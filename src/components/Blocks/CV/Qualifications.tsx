import React from 'react';
import { useTranslation } from 'next-i18next';

const Qualifications = () => {
    const { t } = useTranslation(['cv', 'content']);
    return (
        <div>
            <h2>{t('content:profile.sections.qualifications.headline')}</h2>
            <ul>
                {t('cv:qualifications').map((item: any) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Qualifications;
