import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text';
import cls from './BreedInfo.module.scss';

interface BreedInfoBlockProps {
    title?: string;
    text?: string;
}

export const BreedInfoBlock = (props: BreedInfoBlockProps) => {
    const { title, text } = props;

    return (
        <div className={classNames(cls.blockElement)}>
            <Text
                className={classNames(cls.infoContentText)}
                title={title}
                align={TextAlign.JUSTIFY}
                size={TextSize.S}
                weight={TextWeight.MEDIUM}
            />
            <Text
                className={classNames(cls.infoContentText)}
                text={text}
                align={TextAlign.LEFT}
                size={TextSize.M}
                weight={TextWeight.REGULAR}
            />
        </div>
    );
};
