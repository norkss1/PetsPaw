import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import PageErrorManImage from 'shared/assets/icons/page-error-man.png';
import PageErrorRobotImage from 'shared/assets/icons/page-error-robot.png';
import PageErrorBackground from 'shared/assets/icons/page-error-background.svg';
import { AppImage } from 'shared/ui/AppImage';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={classNames(cls.content)}>
                <p className={classNames(cls.title)}>
                    {t('error_boundary.error_boundary_title')}
                </p>
                <p className={classNames(cls.text)}>
                    {t('error_boundary.error_boundary_text')}
                </p>
                <Button
                    className={classNames(cls.buttonError)}
                    onClick={reloadPage}
                >
                    {t('error_boundary.reload_page')}
                </Button>
            </div>
            <AppImage
                src={PageErrorManImage}
                className={cls.imgMan}
            />
            <div className={classNames(cls.backgroundStars)}>
                <PageErrorBackground />
            </div>
            <AppImage
                src={PageErrorRobotImage}
                className={cls.imgRobot}
            />
        </div>

    );
};
