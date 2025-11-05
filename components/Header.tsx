import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { t, setLanguage, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: { page: Page; labelKey: string }[] = [
    { page: 'home', labelKey: 'nav.home' },
    { page: 'about', labelKey: 'nav.about' },
    { page: 'services', labelKey: 'nav.services' },
    { page: 'projects', labelKey: 'nav.projects' },
    { page: 'contact', labelKey: 'nav.contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ page: Page; labelKey: string; isMobile?: boolean }> = ({ page, labelKey, isMobile }) => (
    <a
      href={`#${page}`}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
        if (isMobile) setIsOpen(false);
      }}
      className={`font-medium transition-colors duration-300 ${isMobile ? 'block px-3 py-2 rounded-md text-base' : ''} ${
        currentPage === page
          ? 'text-white'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {t(labelKey)}
    </a>
  );
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-blue-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-white text-2xl font-bold tracking-wider">
              Proji<span className="text-cyan-400">.</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.page} {...link} />
            ))}
            <div className="flex items-center space-x-2">
              <button onClick={() => setLanguage('ru')} className={`px-2 py-1 text-sm rounded ${language === 'ru' ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'}`}>RU</button>
              <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'}`}>EN</button>
            </div>
            <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md transform hover:scale-105"
            >
                {t('cta.contact_us')}
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((link) => (
              <NavLink key={link.page} {...link} isMobile />
            ))}
             <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); setIsOpen(false); }}
                className="block text-center mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300"
            >
                {t('cta.contact_us')}
            </a>
            <div className="flex justify-center items-center space-x-4 pt-4">
              <button onClick={() => setLanguage('ru')} className={`px-3 py-1 text-sm rounded ${language === 'ru' ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'}`}>Русский</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-sm rounded ${language === 'en' ? 'text-white bg-white/20' : 'text-gray-300 hover:text-white'}`}>English</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;