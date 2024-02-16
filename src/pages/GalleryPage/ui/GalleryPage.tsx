import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import UploadIcon from 'shared/assets/icons/upload.svg';
import { UploadModal } from 'features/UploadImage';
import cls from './GalleryPage.module.scss';

const GalleryPage = () => {
    const { t } = useTranslation('upload-modal');

    const [isUploadModal, setIsUploadModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsUploadModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsUploadModal(false);
    }, []);

    return (
        <div className={classNames(cls.GalleryPage)}>
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

            <UploadModal
                isOpen={isUploadModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default GalleryPage;
