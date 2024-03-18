import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './DislikesPage.module.scss';

interface DislikesPageProps {
    className?: string;
}

const DislikesPage = (props: DislikesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.DislikesPage, {}, [className])} />
    );
};

export default DislikesPage;
