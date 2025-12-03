import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Grid, Column } from '@manuel-bieh/design-system';
// import Portrait from '../assets/img/manuel-portrait-01.jpg';
import { Publication } from '@/components/Publication';
import css from '@/components/Publication/publications.module.css';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: t('publications.title') })}</title>
            </Head>
            <Grid>
                <Column>
                    <h1>{t('publications.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12}>
                    <h2>{t('publications.book')}</h2>
                </Column>
            </Grid>
            <Publication
                title="React Deep Dive"
                image={require('../assets/img/publications/react-deep-dive-cover.png')}
                description={
                    <>
                        <p>
                            React has taken Frontend Development by storm over the past couple of years, unlike any
                            other library before it. Today there are hardly any metrics where React does not take the
                            top spot: downloads, popularity, usability. With &quot;React Deep Dive&quot; you will take a
                            deep look into developing modern Frontend applications with the help of React.
                        </p>
                        <p>
                            <a href="https://learn.react-js.dev/" target="_blank" rel="noopener noreferrer">
                                {t('publications.labels.readOnline')}
                            </a>
                        </p>
                    </>
                }
                meta="Selbstverlag, Berlin, ISBN 978-3982169026, 321 Seiten, Juni 2020"
            />
            <Publication
                title="React – lernen und verstehen"
                image={require('../assets/img/publications/react-lernen.png')}
                description={
                    <>
                        <p>
                            React hat die Frontend-Entwicklung in den letzten Jahren wie keine andere Library im Sturm
                            erobert. Heute gibt es kaum eine Metrik in der React nicht vorne liegt: Downloadzahlen,
                            Beliebtheit, Einsatzmöglichkeiten. Mit „React lernen und verstehen“ steigt der Leser tief
                            ein in die Entwicklung moderner Frontend-Anwendungen mit Hilfe von React.
                        </p>
                        <p>
                            <a href="https://lernen.react-js.dev/" target="_blank" rel="noopener noreferrer">
                                {t('publications.labels.readOnline')}
                            </a>
                        </p>
                    </>
                }
                meta="Selbstverlag, Berlin, ISBN 978-3982169002, 346 Seiten, Mai 2019"
            />
            <Grid className={css.publication}>
                <Column xs={12} md={4} lg={3} xl={2}>
                    <Image
                        src={require('../assets/img/publications/mobiles-webdesign.png')}
                        alt=""
                        style={{ width: 557, aspectRatio: 557 / 768, height: 'auto' }}
                    />
                </Column>
                <Column xs={12} md={8} lg={9} xl={10}>
                    <h3>Mobiles Webdesign – Konzeption, Gestaltung, Entwicklung</h3>
                    <p>
                        Mobiles Internet ist Realität. Jeder, der Websites betreibt, gestaltet, konzipiert oder
                        entwickelt, muss sich mit dem Thema auseinandersetzen. Dabei geht es natürlich zunächst um die
                        Fragen, wann ein mobiler Auftritt sinnvoll ist, welcher Content ausgewählt und wie der Auftritt
                        schließlich konzipiert werden soll.
                    </p>
                    <p>
                        <strong>Galileo Computing, Bonn, ISBN 978-3836211536, 302 Seiten, Juni 2008</strong>
                    </p>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12}>
                    <h2>{t('publications.magazineArticles')}</h2>
                </Column>
            </Grid>
            <Grid className={css.publication}>
                <Column xs={12} md={4} lg={3} xl={2}>
                    <Image
                        src={require('../assets/img/publications/webmaking-1111.jpg')}
                        alt="Cover: Webmaking Magazin 11/11"
                    />
                </Column>
                <Column xs={12} md={8} lg={9} xl={10}>
                    <h4>Webmaking Magazin, Ausgabe 12/2011</h4>
                    <h3>Interview: Webdesign-Trends 2012</h3>
                    <p>
                        <strong>Was werden Ihrer Meinung nach die Trends im Webdesign 2012?</strong>
                        <br />
                        Aus den USA kamen in den letzten Wochen einige gelungene Beispiele von Websites die auf
                        „Responsive Design“ setzen, also Webdesign, das sich an den Umgebungscontext anpasst. Durch CSS
                        Media Queries ist es möglich eine Website auf verschiedenen Geräten (Smartphone, Tablet,
                        Desktop, …) bei gleicher Markup in unterschiedlicher Form und Gestaltung auszugeben. […]
                    </p>
                    <Link href="/publications/webdesign-trends-2012">{t('publications.labels.continue')}</Link>
                </Column>
            </Grid>
            <Grid className={css.publication}>
                <Column xs={12} md={4} lg={3} xl={2}>
                    <Image
                        src={require('../assets/img/publications/internet-intern-0211.jpg')}
                        alt="Cover: Internet Intern 02/11"
                    />
                </Column>
                <Column xs={12} md={8} lg={9} xl={10}>
                    <h4>Internet Intern, Ausgabe 02/2011.</h4>
                    <h3>Interview: Mobiles Webdesign</h3>
                    <p>
                        <strong>
                            Mobiles Webdesign bedeutet in der Praxis, dass man eine für Desktop-PCs gestaltete Webseite
                            für die kleinen Screens der Smartphones oder Tablets umgestaltet. Oder nicht?
                        </strong>
                        <br /> Mobiles Webdesign bedeutet in der Praxis im Grunde genommen mehr, als der Begriff
                        Webdesign vermuten lassen würde. Bei einer mobilen Website stehen neben dem eigentlichen Design
                        an sich bei der Adaption einer bestehenden Website vor allem wohl konzeptionelle Gedanken an
                        erster Stelle.[…]
                    </p>
                    <Link href="/publications/interview-mobiles-webdesign">{t('publications.labels.continue')}</Link>
                    <br />
                    <Link href="/publications/interview-mobiles-webdesign">
                        {t('publications.labels.download')}
                    </Link>{' '}
                    [674 KB]
                </Column>
            </Grid>
            <Grid className={css.publication}>
                <Column xs={12} md={4} lg={3} xl={2}>
                    <Image src={require('../assets/img/publications/devguide9.jpg')} alt="Cover: Mobile Devguide 9" />
                </Column>
                <Column xs={12} md={8} lg={9} xl={10}>
                    <h4>Mobile Developer’s Guide To The Galaxy #9</h4>
                    <h3>Creating Mobile Websites [English]</h3>
                    <p>
                        Why create a mobile website instead of an application? Using the web has a number of advantages,
                        websites can be browsed on most devices, the technology is flexible, and it is easy to update
                        sites so all users get the latest version. You only need to modify a single codebase if you want
                        to add or change content or even features, rather than updating each application. […]
                    </p>
                    <Link href="/publications/creating-mobile-websites">{t('publications.labels.continue')}</Link>
                </Column>
            </Grid>
            <Grid className={css.publication}>
                <Column xs={12} md={4} lg={3} xl={2}>
                    <Image
                        src={require('../assets/img/publications/webstandards-magazin-11.jpg')}
                        alt="Cover: Webstandards Magazin 11"
                    />
                </Column>
                <Column xs={12} md={8} lg={9} xl={10}>
                    <h4>Webstandards-Magazin, Ausgabe 11/2011.</h4>
                    <h3>Mobile Möglichkeiten – Tools für die Entwicklung mobiler Webseiten</h3>
                    <p>
                        Wer heute eine mobile Webseite erstellen möchte, wird vor eine Vielzahl von Entscheidungen
                        gestellt: Kostenlos oder kostenpflichtig? Entwicklung auf Code-Ebene oder per WYSIWYG?
                        Serverseitige oder clientseitige Lösungen? Mittlerweile gibt es eine Menge unterschiedlicher
                        Lösungsansätze, von denen jeder seine eigenen Vor- und Nachteile mit sich bringt. […]
                    </p>
                    <a href="/downloads/034-038_mobile-moeglichkeiten_manuel-bieh.pdf" download>
                        Download
                    </a>{' '}
                    [687 KB]
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
