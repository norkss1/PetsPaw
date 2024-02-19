import { classNames } from 'shared/lib/classNames/classNames';
import { Trans, useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text';
import cls from './UploadWindow.module.scss';

export interface UploadWindowProps {
    className?: string;
}

const UploadWindow = (props: UploadWindowProps) => {
    const { className } = props;
    const { t } = useTranslation('upload-modal');

    return (
        <div className={classNames(cls.UploadWindow, {}, [className])}>
            <div className={classNames(cls.uploadTitle)}>
                <Text title={t('upload_title')} size={TextSize.L} />
            </div>

            <p className={classNames(cls.uploadSubtitle)}>
                <Trans
                    defaults=""
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

export default UploadWindow;
