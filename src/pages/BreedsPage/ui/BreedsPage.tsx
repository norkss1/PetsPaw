import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAnimalData } from 'entities/Animal';
import cls from './BreedsPage.module.scss';

interface BreedsPageProps {
    className?: string;
}

const BreedsPage = (props: BreedsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const animal = useSelector(getAnimalData);

    // useEffect(() => {
    //     dispatch(fetchAnimalData());
    // }, [dispatch]);

    return (
        <div className={classNames(cls.BreedsPage, {}, [className])}>
            <div className={classNames(cls.breedsPageContent)} />
        </div>
    );
};

export default BreedsPage;
