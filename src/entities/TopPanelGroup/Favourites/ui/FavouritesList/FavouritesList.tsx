import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { NoItemInfo } from 'shared/ui/NoItemInfo/NoItemInfo';
import {
    getFavouritesListData,
    getFavouritesListError,
    getFavouritesListIsLoading,
} from 'entities/TopPanelGroup/Favourites/model/selectors/favouritesList';
import { GridPatternList } from 'widgets/GridPatternList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchFavouritesData,
} from 'entities/TopPanelGroup/Favourites/model/services/fetchFavouritesData';
import { FavouritesItem } from '../FavouritesItem/FavouritesItem';

export const FavouritesList = () => {
    const { t } = useTranslation('favourites');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getFavouritesListIsLoading);
    const error = useSelector(getFavouritesListError);
    const favouritesList = useSelector(getFavouritesListData);

    useInitialEffect(() => {
        dispatch(fetchFavouritesData());
    });

    const content = isLoading ? <Loader />
        : error ? <Text title={t('fetch_error')} align={TextAlign.CENTER} />
            : favouritesList?.length !== 0 ? <GridPatternList isLoading={isLoading} data={favouritesList} ItemComponent={FavouritesItem} />
                : <NoItemInfo />;

    return (
        <div>
            { content }
        </div>
    );
};
