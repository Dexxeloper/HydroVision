
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import { Language } from '../types';

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, setLanguage } = context;

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { t, setLanguage, language };
};
