import React, { useCallback, useState } from 'react';
import { ILikesItem } from 'entities/TopPanelGroup/Likes';
import { AppImage } from 'shared/ui/AppImage';
import { FullScreenOverlay } from 'shared/ui/FullScreenOverlay/FullScreenOverlay';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LikesItem.module.scss';

export interface LikesItemProps {
    item: ILikesItem;
    indexItem: number;
}

export const LikesItem = (props: LikesItemProps) => {
    const { item, indexItem } = props;

    const [isFullImgModal, setIsFullImgModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsFullImgModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsFullImgModal(false);
    }, []);

    return (
        <div className={classNames(cls.item, {}, [cls[`item${indexItem + 1}`]])}>
            <FullScreenOverlay
                className={cls.fullScreenImg}
                url={item?.url}
                isOpen={isFullImgModal}
                onClose={onCloseModal}
                onClick={onOpenModal}
            />

            <AppImage
                src={item?.url}
                className={cls.likesImg}
            />
        </div>
    );
};
