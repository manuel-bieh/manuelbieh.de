import React from 'react';
import Image from 'next/image';
import { TFunction } from 'i18next';
import classNames from 'classnames';
import css from './Item.module.css';

type Props = {
    className?: string;
    date: string;
    image: string;
    role: string;
    t: TFunction;
    tech: string;
    text: string[];
    title: string;
};

const Item = ({ image, title, date, role, text, tech, t, ...props }: Props) => (
    <div className={classNames(css.item, props.className)}>
        <Image
            src={require(`@manuel-bieh/design-system/dist/img/clients/${image}`)}
            alt={`Logo: ${image}`}
            style={{ height: 'auto' }}
        />
        {/* {image} */}
        <p className={css.meta}>
            <span className={css.role}>{role}</span>
            <strong className={css.company}>{title}</strong> – {date}
        </p>
        {text.map((textContent: string) => (
            <p key={textContent}>{textContent}</p>
        ))}
        <p>
            <strong>{t('cv.content.meta.technologies')}:</strong> {tech}
        </p>
    </div>
);

export default Item;
