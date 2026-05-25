import React, { useState, useEffect } from "react";
import { 
  Gauge, Hammer, Zap, Activity, ShieldCheck, Wrench, 
  ArrowRight, Check, Sparkles, AlertCircle, Info 
} from "lucide-react";
import { Service } from "../types";

interface ServicesProps {
  onRequestQuoteWithService: (serviceKey: string) => void;
  selectedServiceType: string | null;
  setSelectedServiceType: (service: string | null) => void;
}

export default function Services({ 
  onRequestQuoteWithService, 
  selectedServiceType, 
  setSelectedServiceType 
}: ServicesProps) {
  
  // List of standard services
  const servicesList: Service[] = [
    {
      id: "tuning",
      title: "Dyno Tuning & Fueling",
      shortDesc: "Complete ECU calibration for custom street cars and dedicated track machines.",
      description: "Using our premium in-house dyno setup, we optimize ignition mapping, fuel curve ratios, boost pressures, and drivability parameters. We specialize in standalone engine management solutions as well as standard OEM flash tuning.",
      icon: "Gauge",
      features: [
        "SCT, HP Tuners, Holley, Haltech, and Motec configurations",
        "E85, race fuel, and pump gas multi-map calibrations",
        "Diagnostic log analysis & peak torque tracking",
        "Cold start optimization & transmission shift-point setup",
      ],
      basePrice: "$450+",
    },
    {
      id: "upgrades",
      title: "Performance Upgrades",
      shortDesc: "Uncompromising bolt-on installations and forced induction kits.",
      description: "Unlock immediate horsepower limits with high-caliber aftermarket parts. We curate, assemble, and test comprehensive bolt-on packages to guarantee peak mechanical integrity and high horsepower goals.",
      icon: "Zap",
      features: [
        "Turbocharger custom setups and supercharger installations",
        "Upgraded fuel pumps, injectors, and direct rails",
        "Catback systems, long tube headers, and intake manifolds",
        "High-performance camshaft and valvetrain assembly",
      ],
      basePrice: "$350+",
    },
    {
      id: "fabrication",
      title: "Custom Fabrication",
      shortDesc: "Surgically clean TIG-welded mechanical solutions.",
      description: "Our dedicated custom welding department designs and fabricates lightweight, ultra-rigid safety systems and custom plumbing. We specialize in clean stainless steel, chromoly, and aluminum designs.",
      icon: "Hammer",
      features: [
        "Custom DOM steel roll cages & custom chassis stiffeners",
        "One-off custom manifolds & stainless steel exhaust headers",
        "Intercooler aluminum piping & structural radiator support mounts",
        "Custom steering and suspension bracket redesign",
      ],
      basePrice: "Custom Hourly Range",
    },
    {
      id: "engine",
      title: "Custom Engine Work",
      shortDesc: "Precision blueprinting, machining, and internal assembly.",
      description: "From simple rod and piston upgrades to complete, balanced drag-strip engines, our meticulous internal assembly procedures ensure long-term durability and resistance to extreme cylinder pressures.",
      icon: "Wrench",
      features: [
        "Short-block & long-block performance blueprinting",
        "Forged pistons, connecting rods, and custom billet crank setup",
        "Cylinder head porting & heavy-duty head stud reinforcement",
        "Piston ring end-gap optimization for high-pressure setups",
      ],
      basePrice: "Custom Range",
    },
    {
      id: "diagnostics",
      title: "Expert Diagnostics",
      shortDesc: "Traces complex mechanical gremlins with electronic telemetry.",
      description: "We use high-fidelity diagnostic tools to locate air leaks, ignition hesitations, fuel starvation bugs, and wiring faults. Receive an objective checklist with accurate options to fix.",
      icon: "Activity",
      features: [
        "Engine cylinder health tests & smoke leak-testing",
        "Intermittent sensor error tracing & harness telemetry",
        "Fuel pump pressure logs & high-resolution scope tests",
        "No-start diagnostic and timing checks",
      ],
      basePrice: "$120+",
    },
    {
      id: "maintenance",
      title: "Maintenance & Repairs",
      shortDesc: "Keep your high-horsepower machine reliable.",
      description: "High performance requires regular, careful upkeep. We provide premium fluid swaps, spark plug checks, valve-lash calibrations, and brake performance modifications with unmatched care.",
      icon: "ShieldCheck",
      features: [
        "Motul and Liqui Moly performance fluid swaps",
        "Extreme spark plug checks & direct valve calibrations",
        "Upgraded heavy-duty clutches & high-strength axles",
        "Track day brake safety inspections & custom pad setups",
      ],
      basePrice: "$95+",
    },
  ];

  // Helper matching Lucide Icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Gauge": return <Gauge className="w-6 h-6" />;
      case "Hammer": return <Hammer className="w-6 h-6" />;
      case "Zap": return <Zap className="w-6 h-6" />;
      case "Wrench": return <Wrench className="w-6 h-6" />;
      case "Activity": return <Activity className="w-6 h-6" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  // State of custom Estimator Checklist
  const estimatorOptions = [
    { id: "opt-dyno", name: "Dynamic Dyno Calibrations & Fuel Setup", price: 450, time: 1, tier: "Street Tuning" },
    { id: "opt-headers", name: "Long Tube Stainless Headers Install", price: 650, time: 2, tier: "Bolt-ons" },
    { id: "opt-welds", name: "Custom TIG Intercooler Piping Fabrication", price: 800, time: 3, tier: "Fabrication" },
    { id: "opt-cams", name: "Stage 2 Performance Camshaft Kit", price: 1100, time: 3, tier: "Valvetrain Work" },
    { id: "opt-plugs", name: "Iridium Plugs & Ignition Coil Testing", price: 150, time: 1, tier: "Diagnostics" },
    { id: "opt-leak", name: "Smoke Intake Boost Leak Testing", price: 120, time: 1, tier: "Maintenance" },
  ];

  const [selectedEstimates, setSelectedEstimates] = useState<string[]>([
    "opt-dyno", "opt-plugs"
  ]);

  const toggleEstimatorOption = (optionId: string) => {
    if (selectedEstimates.includes(optionId)) {
      setSelectedEstimates(selectedEstimates.filter((id) => id !== optionId));
    } else {
      setSelectedEstimates([...selectedEstimates, optionId]);
    }
  };

  // Math calculated states
  const totalCostEstimate = estimatorOptions
    .filter((opt) => selectedEstimates.includes(opt.id))
    .reduce((sum, opt) => sum + opt.price, 0);

  const totalTimeEstimate = estimatorOptions
    .filter((opt) => selectedEstimates.includes(opt.id))
    .reduce((sum, opt) => sum + opt.time, 0);

  // Clear or auto focus smooth effect on load if service clicked from Home
  useEffect(() => {
    if (selectedServiceType) {
      const element = document.getElementById(`service-card-${selectedServiceType}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        // Clean selected type after 3.5 seconds
        const timer = setTimeout(() => setSelectedServiceType(null), 3500);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedServiceType]);

  const handleApplyEstimate = () => {
    // Generate description for the quote modal
    const prefilledData = estimatorOptions
      .filter((opt) => selectedEstimates.includes(opt.id))
      .map((opt) => opt.name)
      .join(", ");
    
    onRequestQuoteWithService(`Selected custom build list: ${prefilledData}`);
  };

  return (
    <div className="space-y-20 pb-12" id="services-view-container">
      
      {/* Services Intro Header */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[90px] pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-brand-blue font-display tracking-[0.25em] text-xs font-black uppercase block">
            SPEED DEPARTMENTS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase italic">
            MECHANICAL <span className="text-brand-red">DIALECTS</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explored our six specialized custom automotive service segments in Springfield, Missouri. Click on any segment to request a scheduled repair estimate.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="services-list-grid">
          {servicesList.map((service) => {
            const isHighlighted = selectedServiceType === service.id;
            return (
              <div 
                key={service.id} 
                id={`service-card-${service.id}`}
                className={`bg-dark-card border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted 
                    ? "border-brand-red ring-2 ring-brand-red/30 -translate-y-1 md:shadow-2xl" 
                    : "border-dark-border hover:border-brand-red/40"
                }`}
              >
                {/* Design indicator */}
                {isHighlighted && (
                  <div className="absolute top-4 right-4 bg-brand-red text-white text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded font-black uppercase animate-pulse">
                    ACTIVE SELECTION
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-xl border shrink-0 ${
                      isHighlighted
                        ? "bg-brand-red/10 border-brand-red text-brand-red"
                        : "bg-dark-bg border-dark-border text-slate-350"
                    }`}>
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase italic tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-xs text-brand-blue font-semibold tracking-wide block">
                        Base Rate: {service.basePrice}
                      </span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-3">
                    <p className="text-slate-200 text-xs sm:text-sm font-medium">
                      {service.shortDesc}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="pt-4 border-t border-dark-border/40 space-y-2.5">
                    <h4 className="text-[10px] font-mono tracking-wider font-extrabold text-slate-400 uppercase">
                      SPECIALTY CAPABILITIES
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-400">
                          <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sub Action */}
                <div className="pt-8 mt-6 border-t border-dark-border/40 flex items-center justify-between">
                  <span className="text-[10px] text-slate-600 font-mono">LMB SPEED // DEPT</span>
                  <button
                    onClick={() => onRequestQuoteWithService(service.id)}
                    className="bg-slate-900 border border-slate-800 hover:border-brand-red text-slate-300 hover:text-white px-5 py-2.5 rounded-xl text-xs font-display font-black uppercase tracking-widest transition flex items-center gap-1.5 cursor-pointer"
                  >
                    Select service <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Innovative Interactive Live Quote Estimator widget */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Accent Header */}
          <div className="bg-slate-950/80 p-6 md:p-8 border-b border-dark-border text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 px-3 py-1 rounded-full text-brand-blue text-[10px] font-mono uppercase tracking-widest mb-1">
                <Sparkles className="w-3 h-3" /> EXTRAS: INTERACTIVE PLANNERS
              </div>
              <h2 className="font-display font-black text-xl md:text-2xl text-white uppercase italic">
                SPEED MODEL & COST ESTIMATOR
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Mock estimate of shop cost limits, difficulty ranks, and ballpark lead times in Springfield, MO.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-slate-500 font-mono block">LIVE TELEMETRY CALC</span>
              <span className="text-xs text-brand-red font-bold">LMB SPEED V2.0 BETA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Checklist items - left */}
            <div className="lg:col-span-8 p-6 md:p-8 space-y-4">
              <h3 className="text-xs font-semibold tracking-wider text-slate-450 uppercase mb-4 border-b border-dark-border/50 pb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-brand-blue" /> Check any performance task below:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {estimatorOptions.map((opt) => {
                  const isChecked = selectedEstimates.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleEstimatorOption(opt.id)}
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer select-none ${
                        isChecked
                          ? "bg-brand-red/10 border-brand-red"
                          : "bg-dark-bg/60 border-dark-border hover:border-slate-700 hover:bg-dark-bg"
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border shrink-0 transition ${
                        isChecked
                          ? "bg-brand-red border-brand-red text-white"
                          : "bg-transparent border-slate-600 text-transparent"
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs">
                        <span className="text-slate-400 font-mono text-[9px] uppercase block mb-0.5">
                          {opt.tier}
                        </span>
                        <span className="font-bold text-white block">
                          {opt.name}
                        </span>
                        <span className="text-brand-blue font-semibold block mt-1">
                          Est. ${opt.price} • {opt.time} Day{opt.time > 1 ? "s" : ""}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculations right panel */}
            <div className="lg:col-span-4 bg-slate-950/95 p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-dark-border flex flex-col justify-between">
              
              <div className="space-y-6">
                <h3 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-2">
                  ESTIMATE SUMMARY
                </h3>

                <div className="space-y-4 text-xs font-semibold">
                  
                  <div className="flex justify-between border-b border-dark-border/50 pb-3">
                    <span className="text-slate-400">Selected Tasks:</span>
                    <span className="text-white">{selectedEstimates.length} items</span>
                  </div>

                  <div className="flex justify-between border-b border-dark-border/50 pb-3">
                    <span className="text-slate-400">Est. Labor Days:</span>
                    <span className="text-brand-blue font-bold">~{totalTimeEstimate} Days</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-350 text-sm">Ballpark Total:</span>
                    <span className="text-xl font-display font-black text-white italic">
                      ${totalCostEstimate} <span className="text-xs text-brand-red font-mono">USD</span>
                    </span>
                  </div>
                  
                  {/* Performance Rating Index badge */}
                  <div className="bg-dark-card border border-dark-border/60 p-3 rounded-xl">
                    <span className="text-[10px] text-slate-400 block tracking-wide uppercase font-semibold">
                      COMPLEXITY CLASSIFICATION
                    </span>
                    <span className={`text-xs uppercase font-extrabold tracking-widest inline-block mt-0.5 ${
                      selectedEstimates.length > 4 ? "text-brand-red" : "text-brand-blue"
                    }`}>
                      {selectedEstimates.length === 0 
                        ? "No tasks checked" 
                        : selectedEstimates.length > 4 
                        ? "⚠ EXTREME BUILD (Race Tolerances)"
                        : "✓ STREET CALIBRATION (Standard)"}
                    </span>
                  </div>

                </div>
              </div>

              <div className="space-y-3 pt-6 lg:pt-0">
                <button
                  onClick={handleApplyEstimate}
                  disabled={selectedEstimates.length === 0}
                  className="w-full bg-brand-red hover:bg-brand-dark-red disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed border-transparent rounded-xl py-3.5 text-xs text-white font-display font-black uppercase tracking-widest text-center transition cursor-pointer"
                >
                  Book Selected Blueprint
                </button>
                <div className="flex items-start gap-2 text-[10px] text-slate-400 leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-brand-red shrink-0" />
                  <span>
                    Price above includes placeholder estimates. Direct custom project specs will be drafted locally by LMB Speed in Springfield.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
