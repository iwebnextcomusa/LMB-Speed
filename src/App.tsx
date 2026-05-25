import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>(null);

  const handleRequestQuote = () => {
    setSelectedServiceType(null);
    setIsQuoteModalOpen(true);
  };

  const handleRequestQuoteWithService = (serviceKey: string) => {
    setSelectedServiceType(serviceKey);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col justify-between overflow-x-hidden speed-bg" id="app-root-wrapper">
      
      {/* 1. Sticky Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onRequestQuote={handleRequestQuote} 
      />

      {/* 2. Main Tabbed Views with Smooth Crossfade Sliding */}
      <main className="flex-grow pt-8 relative z-10" id="main-content-flow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {activeTab === "home" && (
              <Home 
                setActiveTab={setActiveTab} 
                onRequestQuote={handleRequestQuote} 
                setSelectedServiceType={setSelectedServiceType}
              />
            )}
            
            {activeTab === "about" && (
              <About 
                onRequestQuote={handleRequestQuote} 
              />
            )}
            
            {activeTab === "services" && (
              <Services 
                selectedServiceType={selectedServiceType} 
                setSelectedServiceType={setSelectedServiceType}
                onRequestQuoteWithService={handleRequestQuoteWithService} 
              />
            )}
            
            {activeTab === "gallery" && (
              <Gallery />
            )}
            
            {activeTab === "contact" && (
              <Contact />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Extensive Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onRequestQuote={handleRequestQuote} 
      />

      {/* 4. Global Interactive Quote Request Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        preselectedService={selectedServiceType || undefined} 
      />

    </div>
  );
}
