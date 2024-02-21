import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Text, TextSize } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { NavbarItemsList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
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

                <div className={classNames(cls.homeHeader)}>
                    <Text title={t('title_home_page')} size={TextSize.XL} />
                    <Text text={t('subtitle_home_page')} size={TextSize.L} />
                </div>

                <Text className={cls.navbarHeader} title={t('start_using_title')} size={TextSize.M} />

                <div className={cls.links}>
                    {NavbarItemsList.map((item) => (
                        <NavbarItem item={item} key={item.path} />
                    ))}
                </div>
            </div>
        </div>
    );
});
