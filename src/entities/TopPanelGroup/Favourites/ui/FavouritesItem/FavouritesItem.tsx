import React, { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import useFormattedTime from 'shared/lib/hooks/useFormattedTime/useFormattedTime';
import { IFavouritesItem } from 'entities/TopPanelGroup/Favourites';
import { deleteFavouriteAnimal } from 'entities/TopPanelGroup/Favourites/model/services/deleteFavouriteAnimal';
import { votingActionsActions } from 'features/votingActions';
import { actionStatuses } from 'features/votingActions/ui/VotingActions/VotingActions';
import { AppImage } from 'shared/ui/AppImage';
import FavouriteFilledIcon from 'shared/assets/icons/favourite-filled-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FavouritesItem.module.scss';

interface FavouritesItemProps {
    item: IFavouritesItem;
    indexItem: number;
}

export const FavouritesItem = (props: FavouritesItemProps) => {
    const { item, indexItem } = props;
    const dispatch = useAppDispatch();
    const formattedTime = useFormattedTime();

    const deleteImageClick = useCallback(() => {
        dispatch(deleteFavouriteAnimal(item.id));

        dispatch(votingActionsActions.addAction({
            id: item.image_id,
            time: formattedTime,
            action: actionStatuses.FAVOURITE,
            status: 'removed',
        }));
    }, [dispatch, formattedTime, item]);

    return (
        <div className={classNames(cls.item, {}, [cls[`item${indexItem + 1}`]])}>
            <div className={cls.deleteOverlay} />
            <div className={cls.deleteContent} onClick={deleteImageClick}>
                <FavouriteFilledIcon />
            </div>

            <AppImage
                src={item?.image.url}
                className={cls.favouritesImg}
            />
        </div>
    );
};
