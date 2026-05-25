import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  Map, Sparkles, AlertCircle, ExternalLink 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "A valid email is required";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    }
    if (!formData.message.trim()) errs.message = "Message details are required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
    setIsSuccess(false);
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Springfield,+MO", "_blank");
  };

  return (
    <div className="space-y-16 pb-12" id="contact-view-container">
      
      {/* Contact Header */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[90px] pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-brand-red font-display tracking-[0.25em] text-xs font-black uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase italic">
            TRANSMISSION <span className="text-brand-red">CENTER</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about a dyno tuning appointment, custom manifold fabrication, or mechanical error diagnostics? Reach out to grease desks immediately.
          </p>
        </div>
      </section>

      {/* Main Grid Contact */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Cards of information */}
        <div className="lg:col-span-5 space-y-6">
          
          <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase italic tracking-tight">
            DIRECT COORDINATES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Call */}
            <a
              href="tel:4173152269"
              className="bg-dark-card border border-dark-border hover:border-brand-red/40 p-5 rounded-2xl flex items-start gap-4 transition group"
            >
              <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl group-hover:bg-brand-red group-hover:text-white transition shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left text-xs sm:text-sm">
                <span className="text-slate-400 block font-mono text-[9px] tracking-wider uppercase">SERVICE HOTLINE</span>
                <span className="text-white font-bold block mt-0.5 text-base">417-315-2269</span>
                <span className="text-slate-500 font-medium block mt-1">Mon - Fri: 8:00 AM - 5:30 PM</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:grayscustoms@gmail.com"
              className="bg-dark-card border border-dark-border hover:border-brand-red/40 p-5 rounded-2xl flex items-start gap-4 transition group"
            >
              <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl group-hover:bg-brand-red group-hover:text-white transition shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left text-xs sm:text-sm">
                <span className="text-slate-400 block font-mono text-[9px] tracking-wider uppercase">ELECTRONIC MAIL</span>
                <span className="text-slate-250 font-bold block mt-0.5 break-all">grayscustoms@gmail.com</span>
                <span className="text-slate-500 font-medium block mt-1">Checked daily by build engineers</span>
              </div>
            </a>

            {/* Address */}
            <div className="bg-dark-card border border-dark-border p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left text-xs sm:text-sm">
                <span className="text-slate-400 block font-mono text-[9px] tracking-wider uppercase">LOCATION ADDRESS</span>
                <span className="text-white font-bold block mt-0.5">LMB Speed Shop</span>
                <span className="text-slate-400 block mt-0.5">Springfield, Missouri</span>
              </div>
            </div>

            {/* Operating Hours card */}
            <div className="bg-dark-card border border-dark-border p-5 rounded-2xl space-y-3">
              <h3 className="text-xs font-mono font-extrabold tracking-wider text-slate-350 uppercase flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-blue" /> SHOP HOURS OF OPERATION
              </h3>
              
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li className="flex justify-between border-b border-dark-border/40 pb-1.5">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">8:00 AM - 5:30 PM</span>
                </li>
                <li className="flex justify-between border-b border-dark-border/40 pb-1.5">
                  <span>Saturday</span>
                  <span className="text-brand-red font-mono uppercase text-[10px] bg-brand-red/5 px-2 py-0.5 rounded border border-brand-red/15">By Appointment Only</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-600 font-mono">CLOSED</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7 bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 shadow-xl">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5" id="direct-contact-form">
              <div>
                <span className="text-brand-red font-display tracking-[0.15em] text-[10px] font-black uppercase">
                  ACTIVE TERMINAL CONTACT
                </span>
                <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase italic tracking-tight mt-1">
                  SECURE TRANSMISSION BOX
                </h2>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-extrabold tracking-wider text-slate-400 uppercase mb-1.5">
                    Your Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-dark-bg border ${
                      errors.name ? "border-brand-red" : "border-dark-border"
                    } rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-[11px] text-brand-red mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-extrabold tracking-wider text-slate-400 uppercase mb-1.5">
                    Phone Number <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-dark-bg border ${
                      errors.phone ? "border-brand-red" : "border-dark-border"
                    } rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50`}
                    placeholder="(417) 555-0123"
                  />
                  {errors.phone && <p className="text-[11px] text-brand-red mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-extrabold tracking-wider text-slate-400 uppercase mb-1.5">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-dark-bg border ${
                      errors.email ? "border-brand-red" : "border-dark-border"
                    } rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50`}
                    placeholder="johndoe@gmail.com"
                  />
                  {errors.email && <p className="text-[11px] text-brand-red mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-extrabold tracking-wider text-slate-400 uppercase mb-1.5">
                    Query Department
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50"
                  >
                    <option value="general">General Shop Question</option>
                    <option value="dyno">ECU Dyno Scheduling</option>
                    <option value="cage">Roll Cages & Welds Support</option>
                    <option value="billing">Pricing / Quote Question</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-mono font-extrabold tracking-wider text-slate-400 uppercase mb-1.5">
                  Message Details <span className="text-brand-red">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`w-full bg-dark-bg border ${
                    errors.message ? "border-brand-red" : "border-dark-border"
                  } rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50`}
                  placeholder="How can Springfield's finest speed shop assist you? Share as much engine or parts specifications details as you'd like."
                />
                {errors.message && <p className="text-[11px] text-brand-red mt-1">{errors.message}</p>}
              </div>

              {/* CTA Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-brand-dark-red disabled:bg-slate-700 disabled:cursor-not-allowed uppercase font-display font-black text-xs tracking-widest text-white py-3.5 rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  id="submit-contact-btn"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Specs...
                    </>
                  ) : (
                    <>
                      Transmit Transmission <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-2 text-[10px] text-slate-550 leading-relaxed pt-2">
                <AlertCircle className="w-4 h-4 text-brand-blue shrink-0" />
                <span>
                  By transmitting, your contact variables are routed directly to <span className="text-brand-red">grayscustoms@gmail.com</span>. We never sell customer details.
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6" id="contact-success-card">
              <div className="w-16 h-16 bg-brand-red/15 border border-brand-red/35 text-brand-red rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight italic">
                  TRANSMISSION SECURED!
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. Your message about department <strong className="text-brand-blue capitalize">{formData.subject}</strong> has been secured and dispatched.
                </p>
              </div>

              <div className="bg-slate-950/90 border border-dark-border p-4 rounded-xl max-w-md mx-auto text-xs space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-500">Shop Route:</span>
                  <span className="text-white font-semibold">grayscustoms@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lead Status:</span>
                  <span className="text-brand-red font-semibold font-mono uppercase text-[10px] tracking-widest">ACTIVE ESTIMATION</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response Promise:</span>
                  <span className="text-white">Under 24 hours</span>
                </div>
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-brand-red text-slate-200 hover:text-white px-6 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition cursor-pointer"
                >
                  Transmit New Message
                </button>
              </div>
            </div>
          )}
        </div>

      </section>

      {/* Embedded Google Map Placeholder - Springfield, MO */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-dark-card border border-dark-border rounded-3xl overflow-hidden p-3.5 shadow-xl space-y-4">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 pt-3">
            <div className="text-left">
              <span className="text-brand-blue font-display tracking-[0.2em] text-[10px] uppercase font-bold flex items-center gap-1">
                <Map className="w-3.5 h-3.5" /> GEOGRAPHIC RADAR
              </span>
              <h3 className="font-display font-black text-lg text-white uppercase italic tracking-tight mt-0.5">
                SPRINGFIELD, MISSOURI SHOP
              </h3>
            </div>
            
            <button
              onClick={openGoogleMaps}
              className="bg-slate-900 hover:bg-slate-850 border border-dark-border hover:border-brand-red text-slate-350 hover:text-white text-xs font-display font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Exile to Google Maps <ExternalLink className="w-3.5 h-3.5 text-brand-red" />
            </button>
          </div>

          {/* Map Frame Visual Mockup */}
          <div className="h-80 w-full relative bg-dark-bg/95 rounded-2xl overflow-hidden border border-dark-border/60">
            {/* Dark Styled Mapping Grid Graphic */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            
            {/* Coordinate Lines decorative */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800/60" />
            <div className="absolute left-1/3 top-0 w-[1px] h-full bg-slate-800/60" />

            {/* Glowing Map pin center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center space-y-3">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-brand-red/20 rounded-full animate-ping pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-brand-red/40 rounded-full animate-pulse pointer-events-none" />
                <div className="w-4 h-4 bg-brand-red border-2 border-white rounded-full mx-auto relative z-10 shadow-lg shadow-brand-red" />
              </div>
              
              {/* Tooltip detail card */}
              <div className="bg-dark-card border border-brand-red/30 p-4 rounded-xl shadow-2xl relative max-w-xs text-left text-xs red-glow">
                <h4 className="font-display font-black text-white italic uppercase block text-[13px]">
                  LMB SPEED HQ
                </h4>
                <p className="text-slate-400 mt-0.5">Springfield, MO 65806</p>
                <div className="flex items-center gap-1.5 text-brand-red font-mono text-[9px] uppercase tracking-widest font-black mt-2 pt-2 border-t border-dark-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                  SHOP INGRESS LIVE
                </div>
              </div>
            </div>

            {/* Simulated background landmarks names */}
            <span className="absolute left-10 top-10 font-mono text-[9px] text-slate-700 tracking-wider">I-44 INTERSTATE CORRIDOR</span>
            <span className="absolute right-12 bottom-12 font-mono text-[9px] text-slate-700 tracking-wider">MO-13 SOUTH RAILWAY</span>
            <span className="absolute left-16 bottom-16 font-mono text-[9px] text-slate-700 tracking-wider">SPRINGFIELD RACING DRAG STRIP</span>

            {/* Bottom mini-caption */}
            <div className="absolute bottom-3 left-3 bg-black/85 border border-dark-border px-3 py-1.5 rounded text-[10px] font-mono text-slate-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              COORDINATES: 37°12'11.2\"N 93°17'49.6\"W • GREENE COUNTY
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
