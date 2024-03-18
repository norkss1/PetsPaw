import { useCallback, useState } from 'react';
import { AppImage } from 'shared/ui/AppImage';
import { Modal } from 'shared/ui/Modal/Modal';
import { IDislikesItem } from 'entities/Dislikes';
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
            <AppImage
                src={item?.url}
                className={cls.dislikesImg}
                onClick={onOpenModal}
            />

            <Modal
                isOpen={isFullImgModal}
                onClose={onCloseModal}
                fullImg
            >
                <AppImage
                    className={classNames(cls.dislikesImg, {}, [cls.full])}
                    src={item?.url}
                />
            </Modal>
        </div>
    );
};
