import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Gauge } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Header({ activeTab, setActiveTab, onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-dark-bg/95 border-b border-dark-border/50 text-[11px] text-slate-400 py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-brand-red" /> Springfield, Missouri
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red/60 animate-pulse" />
            <span className="text-slate-300">Mon - Fri: 8:00 AM - 5:30 PM</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:4173152269" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-brand-red" /> 417-315-2269
            </a>
            <a href="mailto:grayscustoms@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-brand-red" /> grayscustoms@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/95 backdrop-blur-md shadow-lg py-3 border-b border-dark-border/60"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 bg-brand-red hover:bg-brand-dark-red rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:rotate-12 select-none shadow-md shadow-brand-red/10">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-display font-black text-xl italic text-white tracking-wider block">
                LMB <span className="text-brand-red">SPEED</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-slate-400 uppercase font-black block leading-none">
                Springfield, MO
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-display text-sm tracking-widest font-bold uppercase transition relative py-1 cursor-pointer ${
                  activeTab === item.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call / RFQ Quick Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4173152269"
              className="text-xs font-bold font-display uppercase tracking-widest text-slate-300 hover:text-white transition flex items-center gap-2"
            >
              <div className="p-2 rounded-full bg-slate-800/80 hover:bg-brand-red/10 border border-slate-700 hover:border-brand-red/30 transition-all">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
              </div>
              417-315-2269
            </a>
            <button
              onClick={onRequestQuote}
              className="bg-brand-red hover:bg-brand-dark-red text-white text-xs font-display font-black uppercase tracking-widest px-5 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-red/20 active:translate-y-0 cursor-pointer"
              id="header-rfq-button"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile responsive toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-brand-red transition active:scale-95 cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-red" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-dark-card border-b border-dark-border absolute top-full left-0 w-full overflow-hidden shadow-2xl z-50"
              id="mobile-nav-drawer"
            >
              <div className="p-6 space-y-6">
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left font-display text-sm tracking-widest font-black uppercase py-3 border-b border-dark-border/40 transition cursor-pointer ${
                        activeTab === item.id ? "text-brand-red pl-2 border-brand-red" : "text-slate-300 pl-0 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Additional contacts inside drawer */}
                <div className="space-y-4 pt-4 border-t border-dark-border/50 text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Springfield, Missouri</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    <a href="tel:4173152269" className="hover:text-white">417-315-2269</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-red shrink-0" />
                    <a href="mailto:grayscustoms@gmail.com" className="hover:text-white">grayscustoms@gmail.com</a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="tel:4173152269"
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-display font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl border border-slate-700 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-red" />
                    Call Shop
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onRequestQuote();
                    }}
                    className="bg-brand-red hover:bg-brand-dark-red text-white font-display font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition shadow-lg shadow-brand-red/15 cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
