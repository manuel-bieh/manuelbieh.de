import { Header } from '@manuel-bieh/design-system';
import React from 'react';
// import { withIntl } from '../i18n';
// import Stage from '../components/Blocks/Cv/Stage';
// import Intro from '../components/Blocks/Cv/Intro';
// import Mission from '../components/Blocks/Cv/Mission';
// import Projects from '../components/Blocks/Cv/Projects';
// import Testimonials from '../components/Blocks/Cv/Testimonials';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import css from './cv.module.css';
import Mission from '@/components/Blocks/CV/Mission';
import Intro from '@/components/Blocks/CV/Intro';
import Projects from '@/components/Blocks/CV/Projects';
import Stage from '@/components/Blocks/CV/Stage';
import blank from '@/layouts/blank';

// const css = {};

const CV = () => (
    <div className={css.wrapper}>
        <Header className={css.header}>
            <h1>Manuel Bieh</h1> <h2>– Developer. Consultant. React Specialist.</h2>
        </Header>
        <table>
            <thead className={css.head}>
                <tr>
                    <th scope="col">{/**/}</th>
                </tr>
            </thead>
            <tbody className={css.content}>
                <tr>
                    <td>
                        <Mission />
                        <Intro />
                        <Stage />
                        <Projects />
                        {/* <Testimonials /> */}
                    </td>
                </tr>
            </tbody>
            <tfoot className={css.foot}>
                <tr>
                    <td>Manuel Bieh – manuel.bieh@wiremore.com – https://www.manuelbieh.de – +49 177 2951165</td>
                </tr>
            </tfoot>
        </table>
        {/* <footer className={css.footer}>
            <p>Manuel Bieh – manuel.bieh@wiremore.com – https://www.manuelbieh.de – +49 177 2951165</p>
        </footer> */}
    </div>
);

CV.getLayout = blank;

// export default withIntl()(CV);
export default CV;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common', 'cv'])),
    },
});
