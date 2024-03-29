import React, {
    MutableRefObject,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import CloseModalIcon from 'shared/assets/icons/close-modal-btn.svg';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    fullImg?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
        fullImg = false,
    } = props;

    const [isOpening, setIsOpening] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsOpening(false);
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, ANIMATION_DELAY);
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={fullImg ? cls.fullImg : cls.content}
                        onClick={fullImg ? () => {} : onContentClick}
                    >
                        {fullImg ? null : (
                            <Button
                                className={classNames(cls.closeModalBtn)}
                                size={ButtonSize.L}
                                theme={ButtonTheme.FORTY}
                                onClick={closeHandler}
                                square
                            >
                                <div className={classNames(cls.closeModalIcon)}>
                                    <CloseModalIcon />
                                </div>
                            </Button>
                        )}

                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
