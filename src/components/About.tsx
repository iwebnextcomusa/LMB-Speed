import React from "react";
import { ShieldCheck, Award, ThumbsUp, MapPin, Check, Heart, Trophy } from "lucide-react";

interface AboutProps {
  onRequestQuote: () => void;
}

export default function About({ onRequestQuote }: AboutProps) {
  const values = [
    {
      title: "Unyielding Craftsmanship",
      desc: "Every cut, weld, and timing adjustment is polished manually. We build machines because we represent them.",
      icon: Award,
    },
    {
      title: "Extreme Objectivity",
      desc: "Diagnostics first. We never guess, and we never upsell on unneeded repairs. We configure cars with transparent numbers.",
      icon: Trophy,
    },
    {
      title: "Local Community Trust",
      desc: "Proudly located in Springfield, MO, assisting performance enthusiasts across Greene county with premium services.",
      icon: ThumbsUp,
    },
  ];

  const highlights = [
    "Expert stand-alone engine controller setups (Haltech, Motec, FuelTech, Holley).",
    "Extreme high horsepower assembly tolerances (Coyote, LS, LT, RB26, 2JZ).",
    "Certified race safety standards including custom DOM-tubed roll cages.",
    "Comprehensive custom TIG welding of stainless steel and lightweight aluminum.",
    "Professional fuel systems suited for pump gas, race gas, and E85 ethanol.",
    "Transparent mechanical repair backing on all diagnostics."
  ];

  return (
    <div className="space-y-16 pb-12" id="about-view-container">
      
      {/* Dynamic Header */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[90px] pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-brand-red font-display tracking-[0.25em] text-xs font-black uppercase block">
            THE FORCE BEHIND THE MACHINE
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase italic">
            ABOUT <span className="text-brand-red">LMB SPEED</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Founded with a hunger for absolute output, LMB Speed has grown to become Springfield, Missouri's hallmark destination for extreme street machines and custom builds.
          </p>
        </div>
      </section>

      {/* Narrative & Focus */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Imagery Mock */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-blue rounded-2xl blur opacity-30 pointer-events-none" />
          <div className="relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden p-3.5 space-y-4 shadow-2xl">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800" 
                alt="Engine Bay Tuning" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-dark-bg/40" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-xs font-mono font-bold text-brand-red bg-dark-bg/95 border border-brand-red/35 px-2.5 py-1 rounded">
                  EST. SPRINGFIELD, MO
                </span>
              </div>
            </div>
            
            <div className="bg-dark-bg/80 border border-dark-border/60 p-4 rounded-xl flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-red shrink-0" />
              <div className="text-xs text-left">
                <span className="text-slate-200 block font-semibold">Locally Built & Track Backed</span>
                <span className="text-slate-400">Serving Greene county racers since inception.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Story Block */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase italic tracking-tight">
            SPRINGFIELD’S PREMIER SPEED CHAMBER
          </h2>
          <div className="space-y-4 text-slate-350 text-sm leading-relaxed">
            <p>
              At LMB Speed, we don't believe in generic off-the-shelf upgrades. We believe that every vehicle leaving our shop should be a peak performance machine, fine-tuned to absolute perfect tolerances, delivering savage horsepower and pristine daily drivability.
            </p>
            <p>
              Operating directly out of Springfield, MO, we provide everything from highly complicated turbocharger packages and custom exhausts to standard vehicle diagnostics, diagnostics tracing, and general maintenance. Every vehicle we service undergoes extreme scrutiny.
            </p>
            <p>
              Whether you want a custom 8-point roll cage welded for drift safety specs, or a clean daily drivability ECU tune for an upgraded fuel pump system, our experienced team ensures your targets are reached safely and within your budget. Let us help you craft your automotive dream.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onRequestQuote}
              className="bg-brand-red hover:bg-brand-dark-red text-white py-3 px-6 rounded-lg font-display font-bold text-xs uppercase tracking-widest transition duration-300 shadow-md shadow-brand-red/10 cursor-pointer"
            >
              Consult with a Specialist
            </button>
          </div>
        </div>

      </section>

      {/* Core Specialties highlights check */}
      <section className="bg-dark-card border-y border-dark-border py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-brand-red font-display tracking-[0.2em] text-xs font-black uppercase">
              THE LMB SPEED CRITERIA
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase italic">
              UNCOMPROMISING MECHANICAL METRICS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, idx) => (
              <div 
                key={idx} 
                className="bg-dark-bg/90 border border-dark-border/60 hover:border-brand-blue/30 p-4 rounded-xl flex items-center gap-3.5 transition group"
              >
                <div className="w-7 h-7 bg-brand-red/10 text-brand-red rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-250 text-xs sm:text-sm font-medium">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Company values */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-brand-blue font-display tracking-[0.2em] text-xs font-black uppercase">
            WHY THE COMMUNITY TRUSTS US
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase italic">
            OUR CORE COMPASS POINTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center space-y-4 hover:border-brand-red/30 transition duration-300"
              >
                <div className="w-12 h-12 bg-dark-bg text-brand-red border border-dark-border hover:border-brand-red rounded-xl flex items-center justify-center mx-auto transition-all">
                  <IconComp className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase italic">
                  {val.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-dark-card border border-dark-border rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-black text-xl text-white uppercase italic">
              WANT TO DISCUSS ENGINE TOLERANCES OR PARTS?
            </h3>
            <p className="text-xs text-slate-450 leading-relaxed max-w-xl">
              From calculating bearing clearances to matching throttle body dimensions, we bring scientific rigour back to automotive speed. Consultations are straightforward.
            </p>
          </div>
          <button 
            onClick={onRequestQuote}
            className="bg-brand-red hover:bg-brand-dark-red text-white py-3.5 px-8 rounded-xl font-display font-black text-xs uppercase tracking-widest text-center shrink-0 shadow-lg shadow-brand-red/15 transition cursor-pointer"
          >
            Schedule Free Estimate
          </button>
        </div>
      </section>

    </div>
  );
}
