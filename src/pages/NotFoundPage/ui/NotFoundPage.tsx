import { classNames } from 'shared/lib/classNames/classNames';
import PageNotFoundIcon from 'shared/assets/icons/page_not_found.svg';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div
        data-testid="NotFoundPage"
        className={classNames(cls.NotFoundPage, {}, [className])}
    >
        <div className={classNames(cls.img)}>
            <PageNotFoundIcon />
        </div>

    </div>
);
