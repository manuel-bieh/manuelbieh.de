import React from 'react';
import { useTranslation } from 'next-i18next';
import Item from './Item';

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('cv.content.profile.sections.projects.headline')}</h2>
            <div>
                {Array.from(t('cv.projects.items', { returnObjects: true }))
                    .filter((item: any) => item.hidden !== true)
                    .map((data: any) => (
                        <Item key={data.title} {...data} t={t} />
                    ))}
            </div>
        </div>
    );
};

export default Projects;
