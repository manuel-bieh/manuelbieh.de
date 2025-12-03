import React from 'react';
import { DataTable, workDataToDataTable } from '@manuel-bieh/design-system';
import { useTranslation } from 'next-i18next';
import css from './DataTable.module.css';

const Work = () => {
    const { t } = useTranslation(['cv', 'content']);
    return (
        <div className={css.wrapper}>
            <h2>{t('content:profile.sections.work.headline')}</h2>
            <DataTable
                data={workDataToDataTable(t('work'), { since: t('content:time.since') })}
                columnClassNames={[css.cell01]}
            />
        </div>
    );
};

export default Work;
