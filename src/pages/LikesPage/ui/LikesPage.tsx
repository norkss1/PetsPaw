import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderPageInfo } from 'widgets/HeaderPageInfo';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { LikesList } from 'entities/Likes';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { useSelector } from 'react-redux';
import { getLikesListData } from 'entities/Likes/model/selectors/likesList';
import cls from './LikesPage.module.scss';

interface LikesPageProps {
    className?: string;
}

const LikesPage = (props: LikesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('likes');

    const likeList = useSelector(getLikesListData);

    const contentPageRef = useRef<HTMLDivElement>(null);
    const { scrollPosition, handleScroll } = useScroll({ ref: contentPageRef });

    const mods: Mods = {
        [cls.overflowY]: likeList && likeList?.length > 7,
        [cls.unlimitedScreenContent]: scrollPosition <= 85 && likeList && likeList?.length > 7,
    };

    return (
        <div
            ref={contentPageRef}
            className={classNames(cls.LikesPage, mods, [className])}
            onScroll={handleScroll}
        >
            <div className={cls.likesPageHeader}>
                <HeaderPageInfo badgeText={t('page_name')} />
            </div>

            <LikesList />
        </div>

    );
};

export default LikesPage;
