import { ReactNode, useRef } from 'react';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './PageContentContainer.module.scss';

interface PageContentContainerProps {
    className?: string;
    modCondition?: boolean;
    children?: ReactNode;
}

export const PageContentContainer = (props: PageContentContainerProps) => {
    const { className, modCondition, children } = props;

    const contentPageRef = useRef<HTMLDivElement>(null);
    const { scrollPosition, handleScroll } = useScroll({ ref: contentPageRef });

    const mods: Mods = {
        [cls.overflowY]: modCondition,
        [cls.unlimitedScreenContent]: scrollPosition <= 85 && modCondition,
    };

    return (
        <div
            className={classNames(cls.PageContentContainer, mods, [className])}
            ref={contentPageRef}
            onScroll={handleScroll}
        >
            {children}
        </div>
    );
};
