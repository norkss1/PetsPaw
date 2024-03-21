import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderPageInfo } from 'widgets/HeaderPageInfo';
import { PageContentContainer } from 'widgets/PageContentContainer';
import { FavouritesList } from 'entities/TopPanelGroup/Favourites';
import { ActionStatusList } from 'entities/ActionStatus';
import { getFavouritesListData } from 'entities/TopPanelGroup/Favourites/model/selectors/favouritesList';
import { getVotingActions } from 'features/votingActions/model/selectors/getVotingActions/getVotingActions';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './FavouritesPage.module.scss';

enum modsValue {
    ONE = '0.2',
    TWO = '0.4',
    THREE = '0.6',
    FOUR = '0.8',
    FIVE = '1',
}

const FavouritesPage = () => {
    const { t } = useTranslation('favourites');

    const favouritesList = useSelector(getFavouritesListData);
    const votingActions = useSelector(getVotingActions);

    const [favouritesListLength, setFavouritesListLength] = useState(0);
    const [remainderResult, setRemainderResult] = useState('');

    const removedActions = votingActions.actions.filter((item) => item.status === 'removed');

    useEffect(() => {
        if (favouritesList) setFavouritesListLength(favouritesList?.length);
    }, [favouritesList]);

    useEffect(() => {
        if (favouritesListLength !== 0) {
            if (favouritesListLength % 5 === 0) {
                setRemainderResult('1');
            } else {
                const fraction = ((favouritesListLength / 5) % 1);
                setRemainderResult(fraction.toFixed(1));
            }
        }
    }, [favouritesListLength]);

    const mods: Mods = {
        [cls.marginTop1]: remainderResult === modsValue.ONE,
        [cls.marginTop2]: remainderResult === modsValue.TWO,
        [cls.marginTop3]: remainderResult === modsValue.THREE,
        [cls.marginTop4]: remainderResult === modsValue.FOUR,
        [cls.marginTop5]: remainderResult === modsValue.FIVE,
    };

    return (
        <PageContentContainer modCondition={(favouritesList && favouritesList?.length > 5) || (removedActions && removedActions?.length > 3)}>
            <div className={cls.favouritesPageHeader}>
                <HeaderPageInfo badgeText={t('page_name')} />
            </div>

            <FavouritesList />

            <div className={classNames(cls.statusListWrapper, mods)}>
                <ActionStatusList
                    actions={removedActions}
                />
            </div>
        </PageContentContainer>
    );
};

export default FavouritesPage;
