import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import FavoriteIcon from 'shared/assets/icons/favorite-icon.svg';
import LikeIcon from 'shared/assets/icons/like-icon.svg';
import DislikeIcon from 'shared/assets/icons/dislike-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { IActionStatus } from '../../model/types/actionStatus';
import cls from './ActionStatusItem.module.scss';

interface ActionStatusItemProps {
    className?: string;
    action: IActionStatus;
}

export enum ActionStatus {
    LIKE = 'like',
    DISLIKE = 'dislike',
    FAVORITE = 'favorite',
}

export const ActionStatusItem = memo((props: ActionStatusItemProps) => {
    const { className, action } = props;
    const { t } = useTranslation('voting');

    const actionsStatusText = `${action.action.charAt(0).toUpperCase() + action.action.slice(1)}s`;

    const mapStatusToAction = (status: string) => {
        switch (status) {
        case ActionStatus.LIKE:
            return <LikeIcon />;

        case ActionStatus.DISLIKE:
            return <DislikeIcon />;

        case ActionStatus.FAVORITE:
            return <FavoriteIcon />;

        default: return null;
        }
    };

    return (
        <div className={classNames(cls.ActionItem, {}, [className])}>
            <div className={cls.actionInfo}>
                <div className={cls.actionDate}>{action.time}</div>
                <p className={cls.actionText}>
                    <Trans
                        defaults=""
                        t={t}
                        i18nKey="action_text"
                        components={{
                            idComponent: <span className={cls.textId}>{action.id.toUpperCase()}</span>,
                        }}
                        values={{ id: action.id.toUpperCase(), action: actionsStatusText }}
                    />
                </p>
            </div>

            <div className={cls.actionIcon}>
                {mapStatusToAction(action.action)}
            </div>
        </div>
    );
});
