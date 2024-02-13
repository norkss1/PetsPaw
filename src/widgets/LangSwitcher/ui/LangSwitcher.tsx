import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LangIcon from 'shared/assets/icons/lang.png';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { AppImage } from 'shared/ui/AppImage';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo(({ className = '' }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            <AppImage
                src={LangIcon}
                className={cls.img}
            />
        </Button>
    );
});
