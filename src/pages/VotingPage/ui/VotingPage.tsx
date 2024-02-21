import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './VotingPage.module.scss';

interface VotingPageProps {
    className?: string;
}

const VotingPage = (props: VotingPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.VotingPage, {}, [className])} />
    );
};

export default VotingPage;
