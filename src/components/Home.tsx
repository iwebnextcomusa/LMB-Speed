import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, Phone, ShieldCheck, Award, Zap, Gauge, 
  MessageSquare, Star, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, CheckCircle2 
} from "lucide-react";
import { Testimonial, FAQItem } from "../types";

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
  setSelectedServiceType: (type: string) => void;
}

export default function Home({ setActiveTab, onRequestQuote, setSelectedServiceType }: HomeProps) {
  // Stats
  const stats = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "1,200+", label: "Vehicles Tuned", icon: Gauge },
    { value: "100%", label: "Satisfaction", icon: ShieldCheck },
    { value: "Springfield", label: "Missouri Base", icon: Zap },
  ];

  // Services quick overview
  const previewServices = [
    {
      id: "tuning",
      title: "Dyno Tuning",
      desc: "Unlock maximum horsepower safely. Custom fuel maps, timing curve optimization, and electronic boost configurations.",
      tag: "ECU / Standalone"
    },
    {
      id: "upgrades",
      title: "Performance Upgrades",
      desc: "Turbochargers, supercharger upgrades, high-flow injectors, fuel systems, and performance cams built for speed.",
      tag: "Bolt-ons & Forced Induction"
    },
    {
      id: "fabrication",
      title: "Custom Fabrication",
      desc: "Surgically TIG-welded roll cages, intercooler piping, custom stainless exhausts, and custom steering geometries.",
      tag: "TIG Welding / Race Specs"
    }
  ];

  // Testimonials Carousel State
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Tyler Vance",
      role: "Track Racer",
      vehicle: "2019 Ford Mustang GT (850 whp)",
      content: "LMB Speed completely transformed my Coyote. The dyno tuning is absolute magic. Drives like a civilized cruiser until I pin the throttle, and then it is a rocket ship. Springfield is lucky to have custom builders of this high standard.",
      rating: 5
    },
    {
      id: "t2",
      name: "Marcus Miller",
      role: "Local Enthusiast",
      vehicle: "1998 Chevy Corvette C5 (Twin Turbo)",
      content: "The custom TIG welding on my twin-turbo headers is an absolute work of art. True craftsmanship, clear communication, and they finished on schedule. Absolute 10 out of 10 recommendation for fabrication.",
      rating: 5
    },
    {
      id: "t3",
      name: "Jessica Vance",
      role: "Daily Driver / Autocross",
      vehicle: "2021 Subaru WRX STI",
      content: "Diagnostics was solved in 2 hours after 2 other shops in Greene county failed. They also did custom fuel mapping. Highly transparent, they treat you like family, and respect your budget limit.",
      rating: 5
    }
  ];

  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // FAQ Accordion State
  const faqs: FAQItem[] = [
    {
      id: "f1",
      question: "What types of vehicles do you specialize in?",
      answer: "At LMB Speed, we specialize in high-performance domestic engines, muscle cars, imports, and dedicated track/drag builds. We have deep expertise in Coyote, LS, LT, Small Block/Big Block, and turbocharged import powerplants. We also offer standard services and performance modifications for modern performance models and SUVs."
    },
    {
      id: "f2",
      question: "Are your dyno tunings safe for daily drivers?",
      answer: "Absolutely! Our tuning philosophy focuses on performance and reliability first. We calibrate for smooth engine idle, perfect driveability, and reliable coolant and oil temperatures, meaning you can comfortably drive your car to work on Monday and race it on the track on Saturday."
    },
    {
      id: "f3",
      question: "Do I need to make an appointment for a custom build or service?",
      answer: "Yes, because of the heavy detail we provide for every car, we work primarily by appointment. We can accommodate basic diagnostics quickly, but complex custom fabrication, dyno sessions, and complete engine-building assignments require pre-booking. Submit a quote request online or call us at 417-315-2269 to reserve a slot."
    },
    {
      id: "f4",
      question: "Can you install parts that I purchase myself?",
      answer: "Yes! While we prefer to procure high-quality, authentic performance parts through our professional wholesale networks (ensuring proper warranty coverage), we are happy to install customer-provided parts. They must be authentic and fully compatible with your specific year, make, and model."
    }
  ];

  const [openedFaqs, setOpenedFaqs] = useState<Record<string, boolean>>({
    "f1": true
  });

  const toggleFaq = (faqId: string) => {
    setOpenedFaqs((prev) => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  // Handle preview services trigger
  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceType(serviceId);
    setActiveTab("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-20 pb-12" id="home-view-container">
      
      {/* 1. Dramatic Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4">
        {/* Dynamic Background Grid Pattern & Red Neon Fog */}
        <div className="absolute inset-0 grid-bg opacity-40 z-0" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 rounded-full text-brand-red text-xs font-display font-black uppercase tracking-widest animate-pulse mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand-red" /> Springfield, MO Performance Headquarters
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl italic tracking-tight uppercase leading-[0.95] text-white">
              PERFORMANCE. <br />
              <span className="text-brand-red">PRECISION.</span> <br />
              SPEED.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to LMB Speed, Springfield’s premier automotive elite tuning and fabrication shop. We build high-horsepower street cars, custom race machines, and provide bulletproof mechanical support.
            </p>

            {/* CTA block */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark-red text-white py-4 px-8 rounded-xl font-display font-black text-xs uppercase tracking-widest transition duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-red/25 cursor-pointer flex items-center justify-center gap-2"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="tel:4173152269"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-brand-red/40 text-slate-100 py-4 px-8 rounded-xl font-display font-black text-xs uppercase tracking-widest transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-red shrink-0" /> Call 417-315-2269
              </a>
            </div>

            {/* Quick trust assurances */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-red" /> 100% In-House Dyno Optimization</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Elite TIG-Welded Custom Builds</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Guaranteed Diagnostics Work</span>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              
              {/* Outer Glow Car Decal Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-brand-blue/20 rounded-2xl blur-3xl" />
              
              {/* Automotive Graphics Box */}
              <div className="relative bg-dark-card border border-dark-border rounded-2xl p-6 shadow-2xl space-y-6">
                
                {/* Visual Title Header */}
                <div className="flex items-center justify-between border-b border-dark-border/60 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
                    <span className="text-[10px] tracking-widest font-display text-slate-400 font-extrabold uppercase">DYNO ACTIVE SENSOR FEED</span>
                  </div>
                  <span className="font-mono text-[9px] text-brand-red bg-brand-red/10 border border-brand-red/20 px-2 py-0.5 rounded">8,500 RPM REDLINE</span>
                </div>

                {/* Simulated dyno graphics or stats curves with gorgeous design */}
                <div className="h-44 flex items-end gap-1.5 relative border-b border-dark-border/50 pb-2">
                  <div className="absolute top-2 left-2 text-left">
                    <span className="text-2xl font-display font-black text-white italic">846 <span className="text-xs text-brand-red">WHP</span></span>
                    <span className="text-[9px] text-slate-400 block tracking-wide uppercase">Coyote Mustang E85 Tune</span>
                  </div>
                  
                  {/* Decorative sound wave/horsepower bars */}
                  {[30, 42, 55, 48, 62, 75, 88, 70, 92, 110, 137, 150, 142, 160, 180, 210, 195, 230, 255, 290, 310, 280, 340, 390].map((height, idx) => (
                    <div 
                      key={idx} 
                      className={`w-full rounded-sm transition-all duration-700 ${
                        idx > 18 ? "bg-brand-red" : idx > 12 ? "bg-brand-blue" : "bg-slate-700"
                      }`}
                      style={{ height: `${height / 3.2}%` }}
                    />
                  ))}
                </div>

                {/* Substats */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs">
                  <div className="bg-dark-bg/80 border border-dark-border/50 p-2.5 rounded-lg">
                    <span className="text-slate-400 block mb-0.5">Air/Fuel</span>
                    <span className="font-mono font-bold text-white text-xs">11.8 AFR</span>
                  </div>
                  <div className="bg-dark-bg/80 border border-dark-border/50 p-2.5 rounded-lg">
                    <span className="text-slate-400 block mb-0.5">Boost Limit</span>
                    <span className="font-mono font-bold text-brand-blue text-xs">18.5 PSI</span>
                  </div>
                  <div className="bg-dark-bg/80 border border-dark-border/50 p-2.5 rounded-lg text-brand-red border-brand-red/10 bg-brand-red/5">
                    <span className="text-brand-red/80 block mb-0.5">Torque Peak</span>
                    <span className="font-mono font-bold text-white text-xs">742 WTQ</span>
                  </div>
                </div>

                {/* Contact Banner integration */}
                <button 
                  onClick={onRequestQuote}
                  className="w-full bg-slate-950 hover:bg-slate-900 border border-dark-border hover:border-brand-red/40 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
                >
                  Tune Your Machine
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Fast Stats Grid banner */}
      <section className="bg-dark-card border-y border-dark-border py-12 relative overflow-hidden" id="analytics-grid">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center space-y-2 border-r last:border-r-0 border-dark-border/40 last:border-0"
              >
                <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mx-auto mb-1">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase italic leading-none">
                  {stat.value}
                </h3>
                <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Specialties section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-red font-display tracking-[0.2em] text-xs font-black uppercase">
            BUILT FOR PERFORMANCE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase italic">
            FEATURED SPECIAL SERVICES
          </h2>
          <p className="text-slate-400 text-sm">
            We offer advanced engineering services designed to guarantee throttle response, overall horsepower capabilities, and structural reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-dark-card border border-dark-border hover:border-brand-red/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-red uppercase font-bold bg-brand-red/5 border border-brand-red/15 px-2.5 py-1 rounded inline-block">
                  {service.tag}
                </span>
                <h3 className="font-display font-bold text-xl text-white italic uppercase tracking-tight group-hover:text-brand-red transition">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-dark-border/40 mt-6 flex items-center justify-between">
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className="text-xs font-display font-bold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer group/btn"
                >
                  View Full Specs 
                  <ArrowRight className="w-3.5 h-3.5 text-brand-red transform group-hover/btn:translate-x-1 transition" />
                </button>
                <span className="text-[10px] font-mono text-slate-600 block">LMB / SPEED</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button 
            onClick={() => {
              setActiveTab("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-brand-red text-slate-200 hover:text-white px-8 py-3.5 rounded-xl text-xs font-display font-bold uppercase tracking-widest transition cursor-pointer"
          >
            Explore All 6 Service Modules <ArrowRight className="w-4 h-4 text-brand-red" />
          </button>
        </div>
      </section>

      {/* 4. Sliding Testimonial Carousel Section */}
      <section className="bg-dark-card/60 border-y border-dark-border relative overflow-hidden py-16 px-4">
        
        {/* Neon blur backdrop */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[80px]" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="space-y-2">
            <span className="text-brand-blue font-display tracking-[0.2em] text-xs font-black uppercase">
              100% SATISFIED DRIVERS
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase italic">
              WHAT THE STREET IS SAYING
            </h2>
          </div>

          {/* Carousel container */}
          <div className="min-h-[220px] flex items-center justify-center">
            <div className="space-y-6" id="testimonial-slide">
              <div className="flex justify-center gap-1.5 text-brand-red">
                {[...Array(testimonials[currentTestimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-red stroke-none" />
                ))}
              </div>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg italic font-normal leading-relaxed max-w-2xl mx-auto">
                "{testimonials[currentTestimonialIdx].content}"
              </p>
              <div>
                <h4 className="font-display font-black text-sm text-slate-200 tracking-wider uppercase">
                  {testimonials[currentTestimonialIdx].name}
                </h4>
                <p className="text-[10px] text-brand-red font-mono tracking-widest uppercase mt-1">
                  {testimonials[currentTestimonialIdx].vehicle} • {testimonials[currentTestimonialIdx].role}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel controller buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-lg bg-slate-900 border border-dark-border text-slate-400 hover:text-white hover:border-brand-red active:scale-95 transition cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-600">
              {currentTestimonialIdx + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-lg bg-slate-900 border border-dark-border text-slate-400 hover:text-white hover:border-brand-red active:scale-95 transition cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Clean Mini-Gallery Preview widget */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-dark-border pb-6">
          <div className="space-y-2">
            <span className="text-brand-red font-display tracking-[0.2em] text-xs font-black uppercase">
              GALLERY OF RECENT CREATIONS
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase italic">
              COMPLETED BUILDS PORTFOLIO
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab("gallery");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs font-display font-bold uppercase tracking-widest text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer pb-2 hover:border-b hover:border-brand-red"
          >
            Go to Gallery Grid <ArrowRight className="w-4 h-4 text-brand-red" />
          </button>
        </div>

        {/* 3 beautiful images represented perfectly as stylized cards with car details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Fuel Rails & Dyno Tune",
              img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
              category: "Dyno Tune Calibration",
              engine: "Coyote 5.0L Supercharged"
            },
            {
              title: "TIG-Welded Exhaust System",
              img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
              category: "Precision Fabrication",
              engine: "3-Inch Stainless Steel Duals"
            },
            {
              title: "Full Race Car Roll Cage",
              img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
              category: "Chassis & Safety Engineering",
              engine: "8-Point Custom DOM Tubing"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-dark-card border border-dark-border rounded-xl spill-hidden overflow-hidden transition-all duration-300 shadow-lg relative cursor-pointer"
              onClick={() => {
                setActiveTab("gallery");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-all duration-300" />
                <img 
                  src={item.img} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition duration-500" 
                />
                <span className="absolute top-3 left-3 z-20 text-[9px] font-mono tracking-widest text-white uppercase bg-black/75 px-2 py-1 rounded border border-dark-border">
                  {item.category}
                </span>
              </div>
              <div className="p-4 space-y-1 relative z-20">
                <span className="text-[10px] text-brand-red font-mono font-bold uppercase">{item.engine}</span>
                <h4 className="text-sm font-display font-extrabold text-white group-hover:text-brand-red transition uppercase italic">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-brand-red mx-auto" />
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase italic">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-450 text-sm max-w-lg mx-auto">
            Got complex questions about tunes, lead times, or scheduling work? Find instant answers below or call the service desk directly.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4" id="faq-accordions">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-100 uppercase hover:text-brand-red transition cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition duration-300 ${openedFaqs[faq.id] ? "transform rotate-180 text-brand-red" : "text-slate-400"}`} />
              </button>
              
              {openedFaqs[faq.id] && (
                <div className="px-5 pb-5 pt-1 text-slate-450 text-xs sm:text-sm leading-relaxed border-t border-dark-border/40 bg-dark-bg/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact Banner with CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative z-15">
        <div className="bg-gradient-to-r from-dark-card to-black border border-dark-border rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl">
          
          {/* Subtle design block */}
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[100px]" />
          
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="text-brand-red font-display tracking-[0.2em] text-xs font-black uppercase">
              IMMEDIATE BOOKINGS AVAILABLE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight uppercase italic">
              HAVE A PERFORMANCE GOAL IN MIND?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We operate primarily by booking. Call us to discuss budget limits, schedule diagnostic hours, or discuss build ideas with our expert builders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="tel:4173152269"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-brand-red/40 text-slate-200 py-3.5 px-8 rounded-xl font-display font-bold text-xs uppercase tracking-widest text-center transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-red shrink-0" /> Call 417-315-2269
            </a>
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark-red text-white py-3.5 px-8 rounded-xl font-display font-black text-xs uppercase tracking-widest text-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-red/20 active:translate-y-0 cursor-pointer"
            >
              Request Quote
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
