import React, { useCallback, useState } from 'react';
import { IDislikesItem } from 'entities/Dislikes';
import { AppImage } from 'shared/ui/AppImage';
import { FullScreenOverlay } from 'shared/ui/FullScreenOverlay/FullScreenOverlay';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DislikesItem.module.scss';

export interface DislikesItemProps {
    item: IDislikesItem;
    indexItem: number;
}

export const DislikesItem = (props: DislikesItemProps) => {
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
                className={cls.dislikesImg}
            />
        </div>
    );
};
