import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NoItemInfo.module.scss';

interface NoItemInfoProps {
    className?: string;
}

export const NoItemInfo = (props: NoItemInfoProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NoItemInfo, {}, [className])}>
            <Text
                text={t('no_item_text')}
                size={TextSize.M}
            />
        </div>
    );
};
