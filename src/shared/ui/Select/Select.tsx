import {
    memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import SelectArrowIcon from 'shared/assets/icons/select-arrow.svg';
import cls from './Select.module.scss';

export enum SelectTheme {
    STANDARD = 'standard',
    FILLED = 'filled',
}

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    theme?: SelectTheme;
    value?: string;
    setValue?: (elemValue: string) => void;
    label?: string;
    options?: SelectOption[];
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        theme = SelectTheme.STANDARD,
        value,
        setValue,
        label,
        options,
    } = props;

    const [isOptionsVisible, setOptionsIsVisible] = useState(false);
    const selectBtnRef = useRef<HTMLButtonElement>(null);

    const openSelectHandler = () => {
        setOptionsIsVisible(!isOptionsVisible);
    };

    const closeSelectHandler = useCallback((event: MouseEvent) => {
        const selectElem = document.querySelector(`.${cls.select}`) as HTMLButtonElement;
        if (event.target !== selectElem) {
            setOptionsIsVisible(false);
        }
    }, [setOptionsIsVisible]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setOptionsIsVisible(false);
        }
    }, [setOptionsIsVisible]);

    const onChange = useCallback((elemValue: string) => {
        setValue?.(elemValue);
        setOptionsIsVisible(false);
    }, [setValue]);

    useEffect(() => {
        if (isOptionsVisible) {
            window.addEventListener('click', closeSelectHandler);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('click', closeSelectHandler);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [closeSelectHandler, isOptionsVisible, onKeyDown]);

    const mods: Mods = {
        [cls[theme]]: true,
    };

    const modsOptionsList: Mods = {
        [cls.optionsListVisible]: isOptionsVisible,
    };

    const optionsList = useMemo(() => options?.map(
        (elem) => (
            <div
                className={cls.option}
                key={elem.value}
                onClick={() => onChange(elem.content)}
            >
                {elem.content}
            </div>
        ),
    ), [onChange, options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            <div className={cls.selectIcon}>
                <SelectArrowIcon />
            </div>

            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}

            <button
                type="button"
                ref={selectBtnRef}
                className={cls.select}
                value={value}
                onClick={openSelectHandler}
            >
                {value}
            </button>
            <div className={classNames(cls.optionsList, modsOptionsList, [className])}>
                {optionsList}
            </div>
        </div>
    );
});
