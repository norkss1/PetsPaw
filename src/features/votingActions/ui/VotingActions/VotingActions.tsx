import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { votingActionsActions } from 'features/votingActions';
import { mapStatusToAction } from 'shared/lib/render/mapStatusToAction';
import useFormattedTime from 'shared/lib/hooks/useFormattedTime/useFormattedTime';
import { IActionStatus } from 'entities/ActionStatus';
import { IVotingAnimal } from 'entities/Voting';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './VotingActions.module.scss';

interface VotingActionsProps {
    className?: string;
    animal: IVotingAnimal;
    handleChangeImage: () => void;
}

const actionStatuses = ['like', 'favorite', 'dislike'];

export const VotingActions = (props: VotingActionsProps) => {
    const { className, animal, handleChangeImage } = props;
    const dispatch = useAppDispatch();
    const formattedTime = useFormattedTime();

    const addVotingActionClick = useCallback((value: IActionStatus) => {
        handleChangeImage();
        dispatch(votingActionsActions.addAction(value));
    }, [dispatch, handleChangeImage]);

    return (
        <div key={animal.id} className={classNames(cls.VotingActions, {}, [className])}>
            {actionStatuses.map((item: string) => {
                const modsForAction: Mods = {
                    [cls[item]]: true,
                };

                const actionStatusInfo = {
                    id: animal.id,
                    time: formattedTime,
                    action: item,
                };

                return (
                    <div className={classNames(cls.action, modsForAction)} onClick={() => addVotingActionClick(actionStatusInfo)}>
                        {mapStatusToAction(item)}
                    </div>
                );
            })}
        </div>
    );
};
