import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { NavbarItemsList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => (
    <div data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.container}>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>

            <div className={cls.links}>
                {NavbarItemsList.map((item) => (
                    <NavbarItem item={item} key={item.path} />
                ))}
            </div>
        </div>
    </div>
));
