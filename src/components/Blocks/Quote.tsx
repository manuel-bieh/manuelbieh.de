import * as React from 'react';
import css from './Quote.module.css';

type Props = {
    name: string;
    image: string;
    quote: string;
};

const Quote = ({ name, image, quote }: Props) => (
    <blockquote className={css.quote}>
        <p>
            <img src={image} />
            {quote}
        </p>
        <cite>{name}</cite>
    </blockquote>
);

export default Quote;
