import React, {
    InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import SearchIcon from 'shared/assets/icons/search-icon.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        placeholder,
        type = 'text',
        ...otherProps
    } = props;

    const [value, setValue] = useState('');
    const [placeholderValue, setPlaceholder] = useState(placeholder);

    useEffect(() => {
        setPlaceholder(placeholder);
    }, [placeholder]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onFocusHandler = () => {
        setPlaceholder('');
    };

    const onBlurHandler = () => {
        setPlaceholder(placeholder);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                className={classNames(cls.input)}
                type={type}
                value={value}
                placeholder={placeholderValue}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                {...otherProps}
            />
            <div className={classNames(cls.searchIcon)}>
                <Button
                    size={ButtonSize.XL}
                    theme={ButtonTheme.SECONDARY}
                    square
                >
                    <SearchIcon />
                </Button>
            </div>
        </div>
    );
});
