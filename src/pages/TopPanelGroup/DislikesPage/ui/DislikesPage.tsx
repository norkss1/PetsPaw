import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { HeaderPageInfo } from 'widgets/HeaderPageInfo';
import { DislikesList } from 'entities/TopPanelGroup/Dislikes';
import { getDislikesListData } from 'entities/TopPanelGroup/Dislikes/model/selectors/dislikesList';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './DislikesPage.module.scss';

interface DislikesPageProps {
    className?: string;
}

const DislikesPage = (props: DislikesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('dislikes');

    const dislikeList = useSelector(getDislikesListData);

    const contentPageRef = useRef<HTMLDivElement>(null);
    const { scrollPosition, handleScroll } = useScroll({ ref: contentPageRef });

    const mods: Mods = {
        [cls.overflowY]: dislikeList && dislikeList?.length > 7,
        [cls.unlimitedScreenContent]: scrollPosition <= 85 && dislikeList && dislikeList?.length > 7,
    };

    return (
        <div
            ref={contentPageRef}
            className={classNames(cls.DislikesPage, mods, [className])}
            onScroll={handleScroll}
        >
            <div className={cls.dislikesPageHeader}>
                <HeaderPageInfo badgeText={t('page_name')} />
            </div>

            <DislikesList />
        </div>

    );
};

export default DislikesPage;
