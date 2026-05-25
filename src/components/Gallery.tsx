import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Filter } from "lucide-react";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // High-performance vehicle and shop imagery Unsplash Placeholders
  const galleryItems: GalleryItem[] = [
    {
      id: "g1",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000",
      title: "Supercharged Coyote Engine Assembly",
      category: "engine",
      description: "Complete 1000whp blueprint assembly including forged connecting rods, high-strength piston rings, custom cams, and an Eaton 2.65L supercharger.",
    },
    {
      id: "g2",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000",
      title: "Custom Titanium Exhaust Welds",
      category: "fabrication",
      description: "Surgically TIG-welded, lightweight titanium exhaust pathing custom routed for active weight reduction and raw performance audibles.",
    },
    {
      id: "g3",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1000",
      title: "C5 Corvette Twin Turbo Kit Integration",
      category: "upgrade",
      description: "Direct chassis modification to house precision dual ball-bearing turbochargers and lightweight aluminum intercooler piping.",
    },
    {
      id: "g4",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1000",
      title: "Standalone ECU Hub Dyno Calibration",
      category: "tuning",
      description: "Live real-time timing limit checks and fuel-sensor adjustment on a sequential-dogbox drag machine for maximum track reliability.",
    },
    {
      id: "g5",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000",
      title: "Safety Cage Welder Execution",
      category: "fabrication",
      description: "Custom bent 8-point roll cage welded in-house utilizing robust seamless DOM tubing and precise laser-cut reinforcement plates.",
    },
    {
      id: "g6",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000",
      title: "Forged LS3 Stroker Assembly",
      category: "engine",
      description: "416 Stroker engine setup fully measured and custom assembled to withstand up to 22 lbs of forced-induction boost pressure.",
    },
    {
      id: "g7",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000",
      title: "Air Lift Suspension Mod Integration",
      category: "upgrade",
      description: "Performance height adaptability control module cleanly integrated into the trunk bay with high-pressure dual tank compressors.",
    },
    {
      id: "g8",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1000",
      title: "Multi-Map Fuel Sensor Diagnostics",
      category: "tuning",
      description: "Complete electronics wire harness diagnosis to solve ignition hesitation issues on high-horsepower flex-fuel models.",
    },
  ];

  // Filters items matching current tab selection
  const filteredItems = filterCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filterCategory);

  const categories = [
    { id: "all", label: "All Builds" },
    { id: "tuning", label: "Dyno Tuning" },
    { id: "fabrication", label: "Custom welds / Fab" },
    { id: "engine", label: "Engine Blocks" },
    { id: "upgrade", label: "Safety / Upgrades" },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-16 pb-12" id="gallery-view-container">
      
      {/* Gallery Header */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[90px] pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-brand-red font-display tracking-[0.25em] text-xs font-black uppercase block">
            THE PERFORMANCE CATALOG
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase italic">
            COMPLETED <span className="text-brand-red">CREATIONS</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Take a deep look inside our custom automotive results. From simple turbo installations to extreme ground-up block machining, we hold ourselves to absolute perfection.
          </p>
        </div>
      </section>

      {/* Filter Controllers */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-dark-border/60 pb-8" id="gallery-filters-bar">
          <span className="text-[10px] font-mono tracking-wider font-extrabold text-slate-500 uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> FILTER CATEGORY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilterCategory(cat.id);
                setLightboxIndex(null); // Close active lightbox if filter changes
              }}
              className={`text-xs font-display font-medium tracking-widest uppercase px-5 py-2.5 rounded-lg border transition cursor-pointer ${
                filterCategory === cat.id
                  ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/15"
                  : "bg-dark-card border-dark-border text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of image cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="gallery-image-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group bg-dark-card border border-dark-border hover:border-brand-red/45 rounded-xl spill-hidden overflow-hidden transition-all duration-300 shadow-lg relative cursor-pointer hover:-translate-y-1 block"
            >
              {/* Image Frame */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/45 z-15 group-hover:bg-black/15 transition-all duration-300" />
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                
                {/* Search indicator / badge overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-end justify-between">
                  <span className="p-2.5 rounded-lg bg-brand-red text-white flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                  <span className="p-1 px-2.5 font-mono text-[9px] bg-black text-slate-400 tracking-wider rounded border border-slate-800">
                    CLICK TO FOCUS
                  </span>
                </div>

                <span className="absolute top-3 left-3 z-20 text-[8px] font-mono tracking-widest text-white uppercase bg-black/85 px-2 py-0.5 rounded border border-dark-border">
                  {item.category}
                </span>
              </div>

              {/* Technical Annotations */}
              <div className="p-4 space-y-2">
                <h3 className="font-display font-extrabold text-sm text-white group-hover:text-brand-red transition uppercase tracking-tight italic">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic empty feedback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <Sparkles className="w-10 h-10 text-brand-red mx-auto animate-pulse" />
            <p className="text-slate-400 text-sm italic">
              No matching specifications configured. Choose another filter department.
            </p>
          </div>
        )}
      </section>

      {/* Lightbox Modal display */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4"
          id="gallery-lightbox-overlay"
        >
          {/* Close trigger */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-900 border border-dark-border text-slate-400 hover:text-white hover:border-brand-red transition z-10 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Core visual container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left side Image */}
            <div className="md:w-3/5 h-[40vh] md:h-[60vh] bg-black relative">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              
              {/* Back button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-dark-border transition cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-dark-border transition cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right side Metadata Specs */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-red uppercase font-black bg-brand-red/5 border border-brand-red/15 px-2.5 py-1 rounded inline-block">
                  LMB SPEED // {filteredItems[lightboxIndex].category} SPEC
                </span>
                <h2 className="font-display font-black text-xl md:text-2xl text-white uppercase italic tracking-tight leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h2>
                <div className="w-8 h-1 bg-brand-red rounded" />
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              <div className="pt-4 border-t border-dark-border/40 text-[10px] text-slate-500 font-mono space-y-1 text-left">
                <p>LOCATION: SPRINGFIELD, MISSOURI SHOP</p>
                <p>TOLERANCES: MEETS SEMA SAFETY REQUIREMENTS</p>
                <p>STATUS: COMPLETED & ROAD CERTIFIED</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
