import { useTranslation } from 'next-i18next';
import React from 'react';
import css from './Mission.module.css';

const Mission = () => {
    const { t } = useTranslation();
    return (
        <div className={css.wrapper} data-id="foobar" dangerouslySetInnerHTML={{ __html: t('cv.content.mission') }} />
    );
};

export default Mission;
