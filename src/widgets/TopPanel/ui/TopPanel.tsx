import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import React from 'react';
import cls from './TopPanel.module.scss';

interface TopPanelProps {
    className?: string;
}

export const TopPanel = (props: TopPanelProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.TopPanel, {}, [className])}>
            <div className={classNames(cls.inputWrapper)}>
                <Input
                    className={cls.input}
                    type="text"
                    placeholder={t('input_default_value')}
                />
            </div>
        </div>
    );
};
