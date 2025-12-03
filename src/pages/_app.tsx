import '@manuel-bieh/design-system/dist/index.css';
import '@manuel-bieh/design-system/dist/variables.css';
import '@/styles/Layout.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Page } from '@/types/page';
import main from '@/layouts/main';

type Props = AppProps & {
    Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
    const getLayout = Component.getLayout ?? main;

    return getLayout(<Component {...pageProps} />);
};

export default appWithTranslation(App);
