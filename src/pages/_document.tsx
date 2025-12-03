import { useTranslation } from 'next-i18next';
import { Html, Head, Main, NextScript } from 'next/document';
import { languages } from '@/i18n/settings';

export default function Document() {
    const {
        i18n: { language },
    } = useTranslation();
    return (
        <Html lang={language}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                {languages.map((lang) => (
                    <link
                        key={lang}
                        rel="alternate"
                        href={`/${lang}`}
                        hrefLang={lang}
                        type="text/html"
                        title={lang === 'de' ? 'Deutsch' : 'English'}
                    />
                ))}
                <html lang={language} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
