import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavbarItemType } from '../../model/items';
import cls from './NavbarItem.module.scss';

interface NavbarItemProps {
    item: NavbarItemType;
}

export const NavbarItem = (props: NavbarItemProps) => {
    const { item } = props;
    const { t } = useTranslation('home');

    // <AppLink to="/" className={cls.link}>{t('navbar.home').toUpperCase()}</AppLink>

    return (
        <AppLink to={item.path}>
            <div className={cls.NavbarItem}>
                <div className={classNames(cls.iconWrapper, {}, [cls[item.backgroundColor]])}>
                    <item.Icon className={cls.icon} />
                </div>
                <div className={cls.link}>
                    {t(item.btnText).toUpperCase()}
                </div>
            </div>
        </AppLink>
    );
};
