import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { UploadWindowAsync } from '../UploadWindow/UploadWindow.async';
import cls from './UploadModal.module.scss';

interface UploadModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const UploadModal = (props: UploadModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames(cls.UploadModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <UploadWindowAsync />
            </Suspense>
        </Modal>
    );
};
