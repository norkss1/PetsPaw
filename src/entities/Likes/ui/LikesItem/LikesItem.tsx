import React, { useCallback, useState } from 'react';
import { ILikesItem } from 'entities/Likes';
import { AppImage } from 'shared/ui/AppImage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import FullScreenIcon from 'shared/assets/icons/full-screen.png';
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
            <div className={cls.fullScreenImg} onClick={onOpenModal}>
                <AppImage
                    src={FullScreenIcon}
                    className={cls.img}
                />
            </div>

            <AppImage
                src={item?.url}
                className={cls.likesImg}
            />

            <Modal
                isOpen={isFullImgModal}
                onClose={onCloseModal}
                fullImg
            >
                <AppImage
                    className={classNames(cls.likesImg, {}, [cls.full])}
                    src={item?.url}
                />
            </Modal>
        </div>
    );
};
