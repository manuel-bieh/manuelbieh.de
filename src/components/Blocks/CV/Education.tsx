import React from 'react';
import { useTranslation } from 'next-i18next';
import { educationDataToDataTable } from '@manuel-bieh/ui/dist/es/DataTable/utils';
import { DataTable } from '@manuel-bieh/design-system';
import css from './DataTable.module.css';

const Education = () => {
    const { t } = useTranslation(['cv', 'content']);
    return (
        <div className={css.wrapper}>
            <h2>{t('content:profile.sections.education.headline')}</h2>
            <DataTable
                data={educationDataToDataTable(t('education'), { since: t('content:time.since') })}
                columnClassNames={[css.cell01]}
            />
        </div>
    );
};
export default Education;
