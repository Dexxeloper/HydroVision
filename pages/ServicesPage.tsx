
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const ServiceSection: React.FC<{
  title: string;
  imgUrl: string;
  imgAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
}> = ({ title, imgUrl, imgAlt, children, reverse = false }) => (
    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <div className={`md:w-1/2 ${reverse ? 'md:order-2' : ''}`}>
            <img src={imgUrl} alt={imgAlt} className="rounded-lg shadow-2xl object-cover w-full h-80" />
        </div>
        <div className={`md:w-1/2 ${reverse ? 'md:order-1' : ''}`}>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">{title}</h3>
            {children}
        </div>
    </div>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-800 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{t('services.page.title')}</h1>
          <p className="mt-4 text-xl text-blue-200">{t('services.page.subtitle')}</p>
        </div>
      </div>
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {/* WaaS Section */}
            <ServiceSection
                title={t('services.waas.title')}
                imgUrl="https://picsum.photos/seed/factory/600/400"
                imgAlt="Industrial water treatment facility"
            >
                <p className="text-gray-600 mb-4">{t('services.waas.desc1')}</p>
                <p className="text-gray-600 mb-6">{t('services.waas.desc2')}</p>
                <ul className="space-y-3">
                    <li className="flex items-center"><CheckIcon /><span>{t('services.waas.feature1')}</span></li>
                    <li className="flex items-center"><CheckIcon /><span>{t('services.waas.feature2')}</span></li>
                    <li className="flex items-center"><CheckIcon /><span>{t('services.waas.feature3')}</span></li>
                    <li className="flex items-center"><CheckIcon /><span>{t('services.waas.feature4')}</span></li>
                </ul>
            </ServiceSection>
            
            {/* Reagents Section */}
            <ServiceSection
                title={t('services.reagents.title')}
                imgUrl="https://picsum.photos/seed/lab/600/400"
                imgAlt="Laboratory with chemical reagents"
                reverse={true}
            >
                <p className="text-gray-600 mb-4">{t('services.reagents.desc1')}</p>
                <p className="text-gray-600">{t('services.reagents.desc2')}</p>
            </ServiceSection>
            
            {/* Digital Solutions Section */}
            <ServiceSection
                title={t('services.digital.title')}
                imgUrl="https://picsum.photos/seed/dashboard/600/400"
                imgAlt="Digital dashboard showing data analytics"
            >
                <p className="text-gray-600 mb-4">{t('services.digital.desc1')}</p>
                <p className="text-gray-600">{t('services.digital.desc2')}</p>
            </ServiceSection>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
