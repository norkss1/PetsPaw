import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Switcher } from 'shared/ui/Switcher/Switcher';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className = '' } = props;
    const { theme, toggleTheme } = useTheme();
    const isThemeLight = theme === Theme.LIGHT;

    return (
        <Button
            size={ButtonSize.XL}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <div>
                {isThemeLight ? <LightIcon /> : <DarkIcon />}
            </div>
            <Switcher initialEnabled={isThemeLight} />
        </Button>
    );
});
