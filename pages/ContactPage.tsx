import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('submitted');
        }, 1500);
    };

    return (
        <div className="animate-fadeIn">
            {/* Page Header */}
            <div className="bg-blue-800 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{t('contact.page.title')}</h1>
                    <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">{t('contact.page.subtitle')}</p>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            {status === 'submitted' ? (
                                <div className="text-center py-12">
                                     <svg className="mx-auto h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="mt-4 text-2xl font-semibold text-blue-900">{t('contact.form.success.title')}</h3>
                                    <p className="mt-2 text-gray-600">{t('contact.form.success.desc')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contact.form.name')}</label>
                                        <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contact.form.email')}</label>
                                        <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('contact.form.phone')}</label>
                                        <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contact.form.message')}</label>
                                        <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-400 transition-colors">
                                            {status === 'submitting' ? t('contact.form.submitting') : t('contact.form.submit')}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('contact.info.title')}</h3>
                                <div className="space-y-3 text-lg text-gray-600">
                                    <p><strong className="font-semibold">{t('contact.info.address')}:</strong><br />{t('contact.info.address.value')}</p>
                                    <p><strong className="font-semibold">{t('contact.info.phone')}:</strong> <a href="tel:+77006006636" className="text-cyan-600 hover:underline">8 700 6006636</a></p>
                                    <p><strong className="font-semibold">{t('contact.info.email')}:</strong> <a href="mailto:serik@sunnet.tech" className="text-cyan-600 hover:underline">serik@sunnet.tech</a></p>
                                </div>
                            </div>
                            <div className="h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                                <p className="text-gray-500">Map Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;