import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderPageInfo } from 'widgets/HeaderPageInfo';
import { LikesList } from 'entities/TopPanelGroup/Likes';
import { getLikesListData } from 'entities/TopPanelGroup/Likes/model/selectors/likesList';
import { PageContentContainer } from 'widgets/PageContentContainer';
import cls from './LikesPage.module.scss';

const LikesPage = () => {
    const { t } = useTranslation('likes');

    const likeList = useSelector(getLikesListData);

    return (
        <PageContentContainer modCondition={likeList && likeList?.length > 7}>
            <div className={cls.likesPageHeader}>
                <HeaderPageInfo badgeText={t('page_name')} />
            </div>

            <LikesList />
        </PageContentContainer>

    );
};

export default LikesPage;
