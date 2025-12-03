import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import css from './Stage.module.css';

const Stage = () => {
    const { t } = useTranslation();
    return (
        <div className={css.wrapper}>
            <div className={css.image}>
                <Image
                    src={require(`../../../assets/img/misc/${t('cv.projects.stage.image')}`)}
                    alt="React Book Cover"
                    style={{ height: 'auto' }}
                />
            </div>
            <div className={css.meta}>
                <p>
                    <strong>{t('cv.projects.stage.title')}</strong> – {t('cv.projects.stage.date')}
                </p>
            </div>
            <div className={css.text}>
                {t('cv.projects.stage.text').map((text: string) => (
                    <p key={text}>{text}</p>
                ))}
            </div>
        </div>
    );
};

export default Stage;
