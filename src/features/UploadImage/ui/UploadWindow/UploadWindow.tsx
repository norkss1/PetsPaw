import { classNames } from 'shared/lib/classNames/classNames';
import { Trans, useTranslation } from 'react-i18next';
import cls from './UploadWindow.module.scss';

interface UploadWindowProps {
    className?: string;
}

export const UploadWindow = (props: UploadWindowProps) => {
    const { className } = props;
    const { t } = useTranslation('upload-modal');

    return (
        <div className={classNames(cls.UploadWindow, {}, [className])}>
            <h1 className={classNames(cls.uploadTitle)}>
                {t('upload_title')}
            </h1>
            <p className={classNames(cls.uploadSubtitle)}>
                <Trans
                    t={t}
                    i18nKey="upload_subtitle"
                    components={{
                        guideLink: <a className={classNames(cls.uploadLink)} target="_blank" href="https://www.thedogapi.com/privacy" rel="noreferrer">upload guidelines</a>,
                    }}
                />
            </p>

        </div>
    );
};
