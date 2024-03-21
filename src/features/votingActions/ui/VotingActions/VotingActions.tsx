import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { votingActionsActions } from 'features/votingActions';
import { mapStatusToAction } from 'shared/lib/render/mapStatusToAction';
import useFormattedTime from 'shared/lib/hooks/useFormattedTime/useFormattedTime';
import { IActionStatus } from 'entities/ActionStatus';
import { IVotingAnimal } from 'entities/Voting';
import { fetchLikesDataAnimalById } from 'entities/TopPanelGroup/Likes/model/services/fetchLikesDataAnimalById';
import { fetchDislikesDataAnimalById } from 'entities/TopPanelGroup/Dislikes/model/services/fetchDislikesDataAnimalById';
import { addFavouriteAnimal } from 'entities/TopPanelGroup/Favourites/model/services/addFavouriteAnimal';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getFavouritesListData } from 'entities/TopPanelGroup/Favourites/model/selectors/favouritesList';
import cls from './VotingActions.module.scss';

interface VotingActionsProps {
    className?: string;
    animal: IVotingAnimal;
    handleChangeImage: () => void;
}

export const actionStatuses = {
    LIKE: 'like',
    FAVOURITE: 'favourite',
    DISLIKE: 'dislike',
};

export const VotingActions = (props: VotingActionsProps) => {
    const {
        className,
        animal,
        handleChangeImage,
    } = props;
    const dispatch = useAppDispatch();
    const formattedTime = useFormattedTime();

    const favouritesList = useSelector(getFavouritesListData);
    const [activeFavorite, setActiveFavorite] = useState(false);

    useEffect(() => {
        const isFavourite = favouritesList?.some((item) => item.image_id === animal?.id);

        if (isFavourite !== undefined) setActiveFavorite(isFavourite);
    }, [favouritesList, animal]);

    const addVotingActionClick = useCallback((value: IActionStatus) => {
        switch (value.action) {
        case actionStatuses.LIKE:
            dispatch(fetchLikesDataAnimalById(animal.id));
            handleChangeImage();
            break;

        case actionStatuses.DISLIKE:
            dispatch(fetchDislikesDataAnimalById(animal.id));
            handleChangeImage();
            break;

        case actionStatuses.FAVOURITE:
            dispatch(addFavouriteAnimal(animal.id));
            setActiveFavorite(true);
            break;

        default:
        }

        dispatch(votingActionsActions.addAction(value));
    }, [animal.id, dispatch, handleChangeImage]);

    return (
        <div key={animal.id} className={classNames(cls.VotingActions, {}, [className])}>
            {Object.values(actionStatuses).map((item: string) => {
                const modsForAction: Mods = {
                    [cls[item]]: true,
                    [cls.activeFavorite]: (item === 'favourite') && activeFavorite,
                };

                const actionStatusInfo = {
                    id: animal.id,
                    time: formattedTime,
                    action: item,
                    status: 'added',
                };

                return (
                    <div
                        key={`action-${uuidv4()}`}
                        className={classNames(cls.action, modsForAction)}
                        onClick={() => addVotingActionClick(actionStatusInfo)}
                    >
                        {mapStatusToAction(item, activeFavorite)}
                    </div>
                );
            })}
        </div>
    );
};
