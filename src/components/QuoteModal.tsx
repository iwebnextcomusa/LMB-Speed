import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Mail, Phone, Calendar, Clock, Sparkles } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    serviceType: "tuning",
    details: "",
    urgency: "flexible",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.vehicle.trim()) {
      newErrors.vehicle = "Vehicle details (Year, Make, Model) are required";
    }
    if (!formData.details.trim()) {
      newErrors.details = "Please share a few words about your project or repair needs";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form (except keep email for feedback if necessary)
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      serviceType: "tuning",
      details: "",
      urgency: "flexible",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl z-10"
            id="quote-modal-container"
          >
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-red via-red-500 to-brand-blue" />

            {/* Header */}
            <div className="p-6 border-b border-dark-border flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                  <span className="text-brand-red font-black">LMB</span> SPEED QUOTE BUILDER
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tell us about your machine. Let's build something exceptional.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-dark-bg text-slate-400 hover:text-white border border-dark-border hover:border-brand-red transition-all"
                id="close-modal-btn"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="quote-request-form">
                  {/* Basic Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-dark-bg border ${
                          errors.name ? "border-brand-red" : "border-dark-border"
                        } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-brand-red mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                        Phone Number <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-dark-bg border ${
                          errors.phone ? "border-brand-red" : "border-dark-border"
                        } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition`}
                        placeholder="(417) 555-0199"
                      />
                      {errors.phone && <p className="text-xs text-brand-red mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-dark-bg border ${
                          errors.email ? "border-brand-red" : "border-dark-border"
                        } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition`}
                        placeholder="johndoe@gmail.com"
                      />
                      {errors.email && <p className="text-xs text-brand-red mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                        Vehicle (Year, Make, Model) <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className={`w-full bg-dark-bg border ${
                          errors.vehicle ? "border-brand-red" : "border-dark-border"
                        } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition`}
                        placeholder="e.g., 2018 Ford Mustang GT, 1999 Chevy Corvette"
                      />
                      {errors.vehicle && <p className="text-xs text-brand-red mt-1">{errors.vehicle}</p>}
                    </div>
                  </div>

                  {/* Service Type Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                        Desired Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-dark-bg border border-dark-border text-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50"
                      >
                        <option value="upgrades">Performance Upgrades</option>
                        <option value="fabrication">Custom Fabrication</option>
                        <option value="engine">Custom Engine Work</option>
                        <option value="tuning">Dyno Tuning & Fueling</option>
                        <option value="diagnostics">Expert Diagnostics</option>
                        <option value="maintenance">Maintenance & Repairs</option>
                        <option value="other">Other High-Performance Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                        Timeframe / Urgency
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["immediate", "flexible", "future"].map((urgencyVal) => (
                          <button
                            key={urgencyVal}
                            type="button"
                            onClick={() => setFormData({ ...formData, urgency: urgencyVal })}
                            className={`border text-xs py-2.5 rounded-xl capitalize font-medium transition cursor-pointer ${
                              formData.urgency === urgencyVal
                                ? "bg-brand-red/10 border-brand-red text-white"
                                : "bg-dark-bg border-dark-border text-slate-400 hover:text-white"
                            }`}
                          >
                            {urgencyVal}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                      Project Details / Service Request <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      rows={4}
                      className={`w-full bg-dark-bg border ${
                        errors.details ? "border-brand-red" : "border-dark-border"
                      } rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition`}
                      placeholder="Please describe modifications wanted, performance goals (HP targets), symptoms, or specific parts you'd like us to fabricate or install."
                    />
                    {errors.details && <p className="text-xs text-brand-red mt-1">{errors.details}</p>}
                  </div>

                  {/* Submission Notice & Action */}
                  <div className="bg-dark-bg border border-dark-border p-3.5 rounded-xl flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-400 leading-relaxed">
                      LMB Speed is located in <strong>Springfield, MO</strong>. Submitting this form sends a notification to our team at{" "}
                      <span className="text-brand-red">grayscustoms@gmail.com</span>. We will analyze your vehicle spec sheet and contact you via phone or email within 24 business hours.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden bg-brand-red text-white rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider transition duration-300 hover:bg-brand-dark-red disabled:bg-slate-700 disabled:cursor-not-allowed group cursor-pointer"
                      id="submit-quote-btn"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Analyzing Specs...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Submit Quote Request
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 px-4 space-y-6"
                  id="quote-success-screen"
                >
                  <div className="w-16 h-16 bg-brand-red/10 border border-brand-red/30 text-brand-red rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-2xl tracking-tight text-white uppercase">
                      REQUEST SECURED
                    </h4>
                    <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your high-performance quote spec sheet for the{" "}
                      <strong className="text-brand-blue">{formData.vehicle}</strong> has been transmitted successfully.
                    </p>
                  </div>

                  <div className="bg-dark-bg border border-dark-border p-5 rounded-2xl max-w-md mx-auto text-left space-y-3.5">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-brand-red/10 text-brand-red rounded-lg">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-slate-400 block">Est. Response Time</span>
                        <span className="text-white font-semibold">Under 24 Hours</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-brand-blue/10 text-brand-blue rounded-lg">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-slate-400 block">Shop Location</span>
                        <span className="text-white font-semibold">Springfield, Missouri</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-slate-800 text-slate-300 rounded-lg">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-slate-400 block">Direct Assistance</span>
                        <span className="text-white font-semibold">grayscustoms@gmail.com</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 italic max-w-sm mx-auto">
                    A copies of these details was compiled & routed. To make sudden changes to your booking, please call us directly at <span className="text-white">417-315-2269</span>.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-brand-red rounded-xl px-8 py-3 text-xs font-bold uppercase tracking-widest transition cursor-pointer"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
