import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { UploadWindow } from '../UploadWindow/UploadWindow';
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
            <UploadWindow />
        </Modal>
    );
};
