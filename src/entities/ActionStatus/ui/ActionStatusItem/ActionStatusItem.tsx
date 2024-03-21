import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { mapStatusToAction } from 'shared/lib/render/mapStatusToAction';
import { IActionStatus } from '../../model/types/actionStatus';
import cls from './ActionStatusItem.module.scss';

interface ActionStatusItemProps {
    className?: string;
    action: IActionStatus;
}

export const ActionStatusItem = memo((props: ActionStatusItemProps) => {
    const { className, action } = props;
    const { t } = useTranslation('voting');

    const actionsStatusText = `${action.action.charAt(0).toUpperCase() + action.action.slice(1)}`;

    const modsWithStatus: Mods = {
        [cls[action.action]]: true,
    };

    return (
        <div className={classNames(cls.ActionItem, {}, [className])}>
            <div className={cls.actionInfo}>
                <div className={cls.actionDate}>{action.time ? action.time : '00:00'}</div>
                <p className={cls.actionText}>
                    <Trans
                        defaults=""
                        t={t}
                        i18nKey={action.status === 'added' ? 'action_text_add' : 'action_text_remove'}
                        components={{
                            idComponent: <span className={cls.textId}>{action.id.toUpperCase()}</span>,
                        }}
                        values={{ id: action.id.toUpperCase(), action: actionsStatusText }}
                    />
                </p>
            </div>

            <div className={classNames(cls.actionIcon, modsWithStatus)}>
                {mapStatusToAction(action.action)}
            </div>
        </div>
    );
});
