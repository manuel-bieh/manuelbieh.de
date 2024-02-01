import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import Link from 'next/link';
import { Grid, Column, ClientLogos } from '@manuel-bieh/design-system';
// import Portrait from '../assets/img/manuel-portrait-01.jpg';

export default function Clients() {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: t('clients.title') })}</title>
            </Head>
            <Grid>
                <Column>
                    <h1>{t('clients.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12}>
                    {(t('clients.intro') as unknown as string[]).map((text: string) => (
                        <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                    <section className="client-logos">
                        <ClientLogos />
                    </section>
                    <p>
                        <small>{t('clients.note')}</small>
                    </p>
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
