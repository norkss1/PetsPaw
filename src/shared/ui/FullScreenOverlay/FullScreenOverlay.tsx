import React from 'react';
import { AppImage } from 'shared/ui/AppImage';
import { Modal } from 'shared/ui/Modal/Modal';
import FullScreenIcon from 'shared/assets/icons/full-screen.png';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FullScreenOverlay.module.scss';

interface FullScreenOverlayProps {
    className?: string;
    url?: string;
    isOpen: boolean;
    onClose: () => void;
    onClick: () => void;
}

export const FullScreenOverlay = (props: FullScreenOverlayProps) => {
    const {
        className,
        url,
        isOpen,
        onClose,
        onClick,
    } = props;

    return (
        <div className={classNames(cls.FullScreen, {}, [className])} onClick={onClick}>
            <AppImage
                src={FullScreenIcon}
                className={cls.screenIcon}
            />

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                fullImg
            >
                <AppImage
                    className={classNames(cls.fullScreenImg, {}, [])}
                    src={url}
                />
            </Modal>
        </div>
    );
};
