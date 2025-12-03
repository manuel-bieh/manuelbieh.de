import React from 'react';
import { Grid, Column, GitHub, Linkedin, Twitter } from '@manuel-bieh/design-system';
import css from './Intro.module.css';

const Intro = () => (
    <div className={css.wrapper}>
        <Grid className={css.reduceMargin}>
            <Column xs={4}>
                <GitHub label="github.com/manuelbieh" className={css.icon} />
            </Column>
            <Column xs={4}>
                <Twitter label="twitter.com/manuelbieh" className={css.icon} />
            </Column>
            <Column xs={4}>
                <Linkedin label="linkedin.com/in/manuelbieh" className={css.icon} />
            </Column>
        </Grid>
    </div>
);

export default Intro;
