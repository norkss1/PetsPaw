import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
    const { t } = useTranslation('home');

    return (
        <div data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.switchers}>
                    <LangSwitcher />
                    <ThemeSwitcher />
                </div>
                <div className={cls.links}>
                    <AppLink to="/" className={cls.link}>{t('navbar.home').toUpperCase()}</AppLink>
                    <AppLink to="/voting" className={cls.link}>{t('navbar.voting').toUpperCase()}</AppLink>
                    <AppLink to="/breeds" className={cls.link}>{t('navbar.breeds').toUpperCase()}</AppLink>
                    <AppLink to="/gallery">{t('navbar.gallery').toUpperCase()}</AppLink>
                </div>
            </div>
        </div>
    );
});
