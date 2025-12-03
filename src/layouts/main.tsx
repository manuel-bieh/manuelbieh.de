import React from 'react';
import { Column, Grid } from '@manuel-bieh/design-system';
import Head from 'next/head';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import css from '@/styles/Layout.module.css';

export default (page: React.ReactNode) => (
    <div className={css.pageWrapper}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <PageHeader />
        <Grid className={css.pageContent} centered>
            <Column>
                <main>{page}</main>
            </Column>
        </Grid>
        <PageFooter />
    </div>
);
