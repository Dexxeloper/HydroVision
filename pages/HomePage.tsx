import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Page } from '../types';
import DropletIcon from '../components/icons/DropletIcon';
import ChipIcon from '../components/icons/ChipIcon';
import GlobeIcon from '../components/icons/GlobeIcon';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const AdvantageCard: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
            {children}
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white -mt-20 pt-20">
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://picsum.photos/seed/energy/1920/1080')" }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14, 23, 44, 0.8), transparent 60%)' }}
        ></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-slideUp">
            {t('home.hero.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8 animate-slideUp delay-200">
            {t('home.hero.subtitle')}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg animate-slideUp delay-400"
          >
            {t('cta.leave_request')}
          </button>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{t('home.directions.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <GlobeIcon className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('home.directions.waas.title')}</h3>
              <p className="text-gray-600">{t('home.directions.waas.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <DropletIcon className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('home.directions.reagents.title')}</h3>
              <p className="text-gray-600">{t('home.directions.reagents.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <ChipIcon className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('home.directions.digital.title')}</h3>
              <p className="text-gray-600">{t('home.directions.digital.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{t('home.advantages.title')}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <AdvantageCard title={t('home.advantages.innovation.title')} description={t('home.advantages.innovation.desc')}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </AdvantageCard>
                  <AdvantageCard title={t('home.advantages.reliability.title')} description={t('home.advantages.reliability.desc')}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </AdvantageCard>
                  <AdvantageCard title={t('home.advantages.expertise.title')} description={t('home.advantages.expertise.desc')}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </AdvantageCard>
                  <AdvantageCard title={t('home.advantages.efficiency.title')} description={t('home.advantages.efficiency.desc')}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </AdvantageCard>
              </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;