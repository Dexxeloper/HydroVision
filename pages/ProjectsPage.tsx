
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface Project {
    titleKey: string;
    categoryKey: string;
    descriptionKey: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        titleKey: 'projects.item1.title',
        categoryKey: 'projects.item1.category',
        descriptionKey: 'projects.item1.desc',
        imageUrl: 'https://picsum.photos/seed/metal/600/400'
    },
    {
        titleKey: 'projects.item2.title',
        categoryKey: 'projects.item2.category',
        descriptionKey: 'projects.item2.desc',
        imageUrl: 'https://picsum.photos/seed/food/600/400'
    },
    {
        titleKey: 'projects.item3.title',
        categoryKey: 'projects.item3.category',
        descriptionKey: 'projects.item3.desc',
        imageUrl: 'https://picsum.photos/seed/paper/600/400'
    }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <img src={project.imageUrl} alt={t(project.titleKey)} className="w-full h-56 object-cover" />
            <div className="p-6">
                <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">{t(project.categoryKey)}</p>
                <h3 className="mt-2 text-xl font-bold text-blue-900">{t(project.titleKey)}</h3>
                <p className="mt-3 text-gray-600">{t(project.descriptionKey)}</p>
            </div>
        </div>
    );
};

const ProjectsPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fadeIn">
            {/* Page Header */}
            <div className="bg-blue-800 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{t('projects.page.title')}</h1>
                    <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">{t('projects.page.subtitle')}</p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.titleKey} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
