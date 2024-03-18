import React from 'react';
import { BackButton } from 'shared/ui/BackButton';
import { BadgeInfo } from 'shared/ui/BadgeInfo/BadgeInfo';
import cls from './HeaderPageInfo.module.scss';

interface HeaderPageInfoProps {
    badgeText?: string;
}

export const HeaderPageInfo = (props: HeaderPageInfoProps) => {
    const { badgeText } = props;

    return (
        <div className={cls.HeaderPageInfo}>
            <BackButton />
            <BadgeInfo text={badgeText} />
        </div>
    );
};
