import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'shared/ui/BackButton';
import { getRouteBreeds } from 'shared/const/router';
import { BadgeInfo, BadgeInfoTheme } from 'shared/ui/BadgeInfo/BadgeInfo';
import cls from './BreedInfoPage.module.scss';

interface BreedInfoPageProps {
    className?: string;
}

const BreedInfoPage = (props: BreedInfoPageProps) => {
    const { className } = props;
    const { t } = useTranslation('breeds');

    return (
        <div className={classNames(cls.BreedInfoPage, {}, [className])}>
            <div className={classNames(cls.breedInfoPageContent)}>
                <div className={classNames(cls.breedInfoPageHeader)}>
                    <BackButton path={getRouteBreeds()} />
                    <BadgeInfo text={t('page_name')} theme={BadgeInfoTheme.SECONDARY} />
                    <BadgeInfo />
                </div>
            </div>
        </div>
    );
};

export default memo(BreedInfoPage);
