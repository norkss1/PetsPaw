import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('main_page_title')}
        </div>
    );
};

export default MainPage;
