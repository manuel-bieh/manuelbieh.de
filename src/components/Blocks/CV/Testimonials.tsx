import React from 'react';
import { useTranslation } from 'next-i18next';
import Quote from '../Quote';
import css from './Testimonials.module.css';

const Testimonials = () => {
    const { t } = useTranslation();
    return (
        <div className={css.wrapper}>
            <h2>{t('content:profile.sections.testimonials.headline')}</h2>
            {[t('testimonials')[2], t('testimonials')[3], t('testimonials')[4], t('testimonials')[0]].map(
                (data: { name: string; quote: string }) => (
                    <Quote {...data} key={data.name} image={require(`../../../assets/img/${data.image}`)} />
                )
            )}
        </div>
    );
};

export default Testimonials;
