import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRouteDislikes, getRouteFavourites, getRouteLikes } from 'shared/const/router';
import LikeIcon from 'shared/assets/icons/like-icon.svg';
import FavouriteIcon from 'shared/assets/icons/favourite-icon.svg';
import DislikeIcon from 'shared/assets/icons/dislike-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
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

            <AppLink to={getRouteLikes()}>
                <Button
                    className={cls.topPanelBtn}
                    size={ButtonSize.XL}
                    theme={ButtonTheme.THIRTY}
                    square
                >
                    <LikeIcon />
                </Button>
            </AppLink>

            <AppLink to={getRouteFavourites()}>
                <Button
                    className={cls.topPanelBtn}
                    size={ButtonSize.XL}
                    theme={ButtonTheme.THIRTY}
                    square
                >
                    <FavouriteIcon />
                </Button>
            </AppLink>

            <AppLink to={getRouteDislikes()}>
                <Button
                    className={cls.topPanelBtn}
                    size={ButtonSize.XL}
                    theme={ButtonTheme.THIRTY}
                    square
                >
                    <DislikeIcon />
                </Button>
            </AppLink>
        </div>
    );
};
