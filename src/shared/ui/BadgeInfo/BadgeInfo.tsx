import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BadgeInfo.module.scss';

export enum BadgeInfoTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface BadgeInfoProps {
    theme?: BadgeInfoTheme;
    text?: string;
}

export const BadgeInfo = memo((props: BadgeInfoProps) => {
    const { theme = BadgeInfoTheme.PRIMARY, text } = props;

    const mods: Mods = {
        [cls[theme]]: true,
    };

    return (
        <div className={classNames(cls.BadgeInfo, mods)}>
            {text}
        </div>
    );
});
