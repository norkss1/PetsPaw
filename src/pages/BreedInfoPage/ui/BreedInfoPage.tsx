import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './BreedInfoPage.module.scss';

interface BreedInfoPageProps {
    className?: string;
}

const BreedInfoPage = (props: BreedInfoPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.BreedInfoPage, {}, [className])}>
            <div className={classNames(cls.breedInfoPageContent)} />
        </div>
    );
};

export default BreedInfoPage;
