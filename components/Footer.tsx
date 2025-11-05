import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
    const { t } = useTranslation();
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <div className="space-y-1">
                <h3 className="text-white text-2xl font-bold tracking-wider">
                    Proji<span className="text-cyan-400">.</span>
                </h3>
                <p className="text-sm text-gray-400">by Sunnet Business Technologies</p>
            </div>
            <p className="text-gray-400 text-base">{t('footer.about')}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{t('sitemap')}</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#about" className="text-base text-gray-400 hover:text-white">{t('nav.about')}</a></li>
                  <li><a href="#services" className="text-base text-gray-400 hover:text-white">{t('nav.services')}</a></li>
                  <li><a href="#projects" className="text-base text-gray-400 hover:text-white">{t('nav.projects')}</a></li>
                  <li><a href="#contact" className="text-base text-gray-400 hover:text-white">{t('nav.contact')}</a></li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{t('legal')}</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#privacy" className="text-base text-gray-400 hover:text-white">{t('footer.privacy')}</a></li>
                </ul>
              </div>
            </div>
            <div>
                 {/* Contact Info can go here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-4 text-base text-gray-400 md:mt-0 md:order-1">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;