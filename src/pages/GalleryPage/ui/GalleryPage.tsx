import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import UploadIcon from 'shared/assets/icons/upload.svg';
import { UploadModal } from 'features/UploadImage';
import { BackButton } from 'shared/ui/BackButton';
import { BadgeInfo } from 'shared/ui/BadgeInfo/BadgeInfo';
import cls from './GalleryPage.module.scss';

const GalleryPage = () => {
    const { t } = useTranslation('gallery');

    const [isUploadModal, setIsUploadModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsUploadModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsUploadModal(false);
    }, []);

    return (
        <div className={classNames(cls.GalleryPage)}>
            <div className={cls.galleryPageHeader}>
                <div className={cls.galleryPageHeaderInfo}>
                    <BackButton />
                    <BadgeInfo text={t('page_name')} />
                </div>

                <Button
                    className={classNames(cls.uploadBtn)}
                    size={ButtonSize.S}
                    theme={ButtonTheme.SECONDARY}
                    onClick={onOpenModal}
                >
                    <div className={classNames(cls.uploadIcon)}>
                        <UploadIcon />
                    </div>
                    {t('upload_modal_btn')}
                </Button>
            </div>

            <UploadModal
                isOpen={isUploadModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default GalleryPage;
