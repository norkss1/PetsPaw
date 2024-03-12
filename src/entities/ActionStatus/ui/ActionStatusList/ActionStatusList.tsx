import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { IActionStatus } from '../../model/types/actionStatus';
import { ActionStatusItem } from '../ActionStatusItem/ActionStatusItem';
import cls from './ActionStatusList.module.scss';

interface ActionStatusListProps {
    className?: string;
    isLoading?: boolean;
    actions?: IActionStatus[];
}

export const ActionStatusList = memo((props: ActionStatusListProps) => {
    const { className, isLoading, actions } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ActionStatusList, {}, [cls.loaderContainer])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ActionStatusList, {}, [className])}>
            {actions?.length ? (
                actions.map((action) => (
                    <ActionStatusItem key={`${action.id}-${action.action}`} action={action} />
                ))
            ) : null}
        </div>
    );
});
