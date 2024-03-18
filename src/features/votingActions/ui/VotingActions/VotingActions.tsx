import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { votingActionsActions } from 'features/votingActions';
import { mapStatusToAction } from 'shared/lib/render/mapStatusToAction';
import useFormattedTime from 'shared/lib/hooks/useFormattedTime/useFormattedTime';
import { IActionStatus } from 'entities/ActionStatus';
import { IVotingAnimal } from 'entities/Voting';
import { fetchLikesDataAnimalById } from 'entities/Likes/model/services/fetchLikesDataAnimalById';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
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
    const { className, animal, handleChangeImage } = props;
    const dispatch = useAppDispatch();
    const formattedTime = useFormattedTime();
    const [activeFavorite, setActiveFavorite] = useState(false);

    const addVotingActionClick = useCallback((value: IActionStatus) => {
        switch (value.action) {
        case actionStatuses.LIKE:
            dispatch(fetchLikesDataAnimalById(animal.id));
            handleChangeImage();
            setActiveFavorite(false);
            break;

        case actionStatuses.DISLIKE:
            dispatch(fetchLikesDataAnimalById(animal.id));
            handleChangeImage();
            setActiveFavorite(false);
            break;

        case actionStatuses.FAVOURITE:
            dispatch(fetchLikesDataAnimalById(animal.id));
            setActiveFavorite(true);
            break;

        default:
            setActiveFavorite(false);
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
