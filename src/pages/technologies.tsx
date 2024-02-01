import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import Link from 'next/link';
import { Grid, Column, TechLogos } from '@manuel-bieh/design-system';
// import Portrait from '../assets/img/manuel-portrait-01.jpg';

export default function Technologies() {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: t('technologies.title') })}</title>
            </Head>
            <Grid>
                <Column>
                    <h1>{t('technologies.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12} lg={6}>
                    {(t('technologies.intro') as unknown as string[]).map((text: string) => (
                        <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                </Column>
                <Column xs={12} lg={6}>
                    <TechLogos />
                </Column>
            </Grid>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en')),
    },
});
