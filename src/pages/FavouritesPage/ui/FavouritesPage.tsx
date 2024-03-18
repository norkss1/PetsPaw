import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './FavouritesPage.module.scss';

interface FavouritesPageProps {
    className?: string;
}

const FavouritesPage = (props: FavouritesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FavouritesPage, {}, [className])} />
    );
};

export default FavouritesPage;
