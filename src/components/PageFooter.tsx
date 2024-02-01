import { Grid, Column, Footer, SocialMediaIcons } from '@manuel-bieh/design-system';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

const PageFooter = () => {
    const { t } = useTranslation();
    return (
        <Footer>
            <Grid centered>
                <Column xs={12} textAlign="center">
                    <p>
                        © 2001-
                        <span>{new Date().getFullYear()}</span> Manuel Bieh –{' '}
                        <Link href="/legal">{t('footer.legal')}</Link> |{' '}
                        <Link href="/contact">{t('footer.contact')}</Link>
                    </p>
                    <SocialMediaIcons />
                </Column>
            </Grid>
        </Footer>
    );
};

export default PageFooter;
