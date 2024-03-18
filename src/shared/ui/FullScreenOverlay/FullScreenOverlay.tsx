import React from 'react';
import { AppImage } from 'shared/ui/AppImage';
import FullScreenIcon from 'shared/assets/icons/full-screen.png';
import cls from './FullScreenOverlay.module.scss';

interface FullScreenOverlayProps {
    onClick?: () => void;
}

export const FullScreenOverlay = (props: FullScreenOverlayProps) => {
    const { onClick } = props;

    return (
        <div className={cls.FullScreenOverlay} onClick={onClick}>
            <AppImage
                src={FullScreenIcon}
                className={cls.img}
            />
        </div>
    );
};
