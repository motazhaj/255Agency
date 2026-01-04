"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = ({ isScrolled, isHomePage, isMobile = false }) => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLang = languages[currentLanguage];

  if (isMobile) {
    return (
      <div className="w-full px-8 py-4 border-t-2 border-primary">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-bold mb-2">
            <Globe className="w-5 h-5" />
            <span>Language</span>
          </div>
          {Object.values(languages).map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                currentLanguage === lang.code
                  ? "bg-primary text-background"
                  : "bg-transparent text-primary hover:bg-primary/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.nativeName}</span>
              </div>
              {currentLanguage === lang.code && <Check className="w-5 h-5" />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isHomePage || isScrolled
            ? "border-white text-white hover:bg-white/10 focus:ring-white"
            : "border-primary text-primary hover:bg-primary/10 focus:ring-primary"
        }`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        <span className="text-xl">{currentLang.flag}</span>
        <span className="hidden sm:inline font-medium">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-200"
          >
            <div className="py-2">
              {Object.values(languages).map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 ${
                    currentLanguage === lang.code
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } ${index !== 0 ? "border-t border-gray-100" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{lang.nativeName}</span>
                      <span className="text-xs opacity-75">{lang.name}</span>
                    </div>
                  </div>
                  {currentLanguage === lang.code && (
                    <Check className="w-5 h-5" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
