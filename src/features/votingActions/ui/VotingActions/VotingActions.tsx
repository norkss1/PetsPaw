import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { votingActionsActions } from 'features/votingActions';
import { mapStatusToAction } from 'shared/lib/render/mapStatusToAction';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { IActionStatus } from 'entities/ActionStatus';
import { IVotingAnimal } from 'entities/Voting';
import cls from './VotingActions.module.scss';

interface VotingActionsProps {
    className?: string;
    animal: IVotingAnimal;
}

const actionStatuses = ['like', 'favorite', 'dislike'];

export const VotingActions = (props: VotingActionsProps) => {
    const { className, animal } = props;
    const dispatch = useAppDispatch();

    const addVotingActionClick = useCallback((value: IActionStatus) => {
        dispatch(votingActionsActions.addAction(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.VotingActions, {}, [className])}>
            {actionStatuses.map((item: string) => {
                const modsForAction: Mods = {
                    [cls[item]]: true,
                };

                const actionStatusInfo = {
                    id: animal.id,
                    time: '',
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
