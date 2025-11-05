
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const TeamMemberCard: React.FC<{ name: string; title: string; imageUrl: string }> = ({ name, title, imageUrl }) => (
    <div className="text-center">
        <img className="mx-auto h-32 w-32 rounded-full object-cover" src={imageUrl} alt={name} />
        <h3 className="mt-4 text-xl font-semibold text-blue-900">{name}</h3>
        <p className="text-gray-600">{title}</p>
    </div>
);

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fadeIn">
            {/* Page Header */}
            <div className="bg-blue-800 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{t('about.page.title')}</h1>
                    <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">{t('about.page.subtitle')}</p>
                </div>
            </div>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{t('about.mission.title')}</h2>
                    <p className="mt-4 text-lg text-gray-600">{t('about.mission.desc')}</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{t('about.story.title')}</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyan-200" aria-hidden="true"></div>
                        <div className="space-y-12">
                            {/* Timeline Item 1 */}
                            <div className="flex items-center">
                                <div className="w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-blue-900">{t('about.story.year1')}</h3>
                                    <p className="mt-2 text-gray-600">{t('about.story.desc1')}</p>
                                </div>
                                <div className="w-10 h-10 bg-cyan-500 rounded-full flex-shrink-0 relative z-10 flex items-center justify-center shadow-lg ring-8 ring-gray-50">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414L10 9.414l3.293 3.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="w-1/2 pl-8"></div>
                            </div>
                            {/* Timeline Item 2 */}
                             <div className="flex items-center">
                                <div className="w-1/2 pr-8"></div>
                                 <div className="w-10 h-10 bg-cyan-500 rounded-full flex-shrink-0 relative z-10 flex items-center justify-center shadow-lg ring-8 ring-gray-50">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414L10 9.414l3.293 3.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="w-1/2 pl-8 text-left">
                                    <h3 className="text-xl font-semibold text-blue-900">{t('about.story.year2')}</h3>
                                    <p className="mt-2 text-gray-600">{t('about.story.desc2')}</p>
                                </div>
                            </div>
                             {/* Timeline Item 3 */}
                            <div className="flex items-center">
                                <div className="w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-blue-900">{t('about.story.year3')}</h3>
                                    <p className="mt-2 text-gray-600">{t('about.story.desc3')}</p>
                                </div>
                                <div className="w-10 h-10 bg-cyan-500 rounded-full flex-shrink-0 relative z-10 flex items-center justify-center shadow-lg ring-8 ring-gray-50">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414L10 9.414l3.293 3.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="w-1/2 pl-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{t('about.team.title')}</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t('about.team.desc')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <TeamMemberCard name="Иван Петров" title="CEO" imageUrl="https://picsum.photos/seed/person1/200" />
                        <TeamMemberCard name="Елена Сидорова" title="CTO" imageUrl="https://picsum.photos/seed/person2/200" />
                        <TeamMemberCard name="Алексей Иванов" title="Head of R&D" imageUrl="https://picsum.photos/seed/person3/200" />
                        <TeamMemberCard name="Мария Кузнецова" title="Lead Engineer" imageUrl="https://picsum.photos/seed/person4/200" />
                    </div>
                </div>
            </section>

             {/* Partners Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-extrabold text-blue-900">{t('about.partners.title')}</h2>
                    <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center py-4 px-4 bg-white rounded-lg shadow-sm">
                            <img className="max-h-12 filter grayscale hover:grayscale-0 transition-all" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center py-4 px-4 bg-white rounded-lg shadow-sm">
                            <img className="max-h-12 filter grayscale hover:grayscale-0 transition-all" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center py-4 px-4 bg-white rounded-lg shadow-sm">
                            <img className="max-h-12 filter grayscale hover:grayscale-0 transition-all" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                        </div>
                        <div className="col-span-1 flex justify-center py-4 px-4 bg-white rounded-lg shadow-sm">
                            <img className="max-h-12 filter grayscale hover:grayscale-0 transition-all" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                        </div>
                        <div className="col-span-1 flex justify-center py-4 px-4 bg-white rounded-lg shadow-sm">
                            <img className="max-h-12 filter grayscale hover:grayscale-0 transition-all" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
