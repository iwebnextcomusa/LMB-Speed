import React from "react";
import { Gauge, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Footer({ setActiveTab, onRequestQuote }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/95 border-t border-dark-border text-slate-400 font-sans" id="main-app-footer">
      
      {/* Upper micro footer with premium summary */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Summary */}
        <div className="space-y-4">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:rotate-6">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-black text-lg italic text-white tracking-wider block">
                LMB <span className="text-brand-red">SPEED</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] text-slate-500 uppercase font-black block leading-none">
                Springfield, MO
              </span>
            </div>
          </button>
          <p className="text-xs text-slate-400 leading-relaxed">
            Springfield’s premier performance tuning, fabrication, and custom automotive design facility. Since day one, we have built on absolute power, surgical precision, and uncorruptible craftsmanship.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-2.5">
            ENGINE DEPARTMENTS
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {[
              { id: "home", label: "Dashboard / Home" },
              { id: "about", label: "Our Story & Setup" },
              { id: "services", label: "Specialty Services" },
              { id: "gallery", label: "Completed Builds" },
              { id: "contact", label: "Request a Consultation" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-white transition duration-200 flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span className="text-brand-red">›</span> {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Localized expertise/Specialties */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-2.5">
            SPECIALTIES & TECH
          </h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li>• Dyno Tuning & Air/Fuel Diagnostics</li>
            <li>• Custom TIG Welded Exhaust & Headers</li>
            <li>• Engine Machining & Race Assembly</li>
            <li>• High-Horsepower Turbos & Injectors</li>
            <li>• Street & Track Component Upgrades</li>
            <li>• Local Auto Repair in Springfield, MO</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-2.5">
            VISIT THE SHOP
          </h4>
          <div className="space-y-3.5 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span>
                <strong>LMB Speed Office</strong>
                <br />
                Springfield, MO
              </span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-red shrink-0" />
              <a href="tel:4173152269" className="hover:text-white">417-315-2269</a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-red shrink-0" />
              <a href="mailto:grayscustoms@gmail.com" className="hover:text-white text-slate-300">grayscustoms@gmail.com</a>
            </div>
          </div>
        </div>

      </div>

      {/* Lower bar with terms & copyright and scrollToTop indicator */}
      <div className="bg-black border-t border-dark-border/40 py-6 px-4 md:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} LMB Speed. All rights reserved.</p>
            <p className="text-[10px] text-slate-600">
              Licensed performance shop operating locally out of Springfield, MO. Serving high horsepower enthusiasts across Greene County.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-[10px] tracking-widest font-display font-medium text-slate-400 hover:text-white uppercase transition group cursor-pointer"
            >
              Back to Premium Top
              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all transform group-hover:-translate-y-0.5">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
