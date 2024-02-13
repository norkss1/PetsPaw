import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('about_page_title')}
        </div>
    );
};

export default AboutPage;
