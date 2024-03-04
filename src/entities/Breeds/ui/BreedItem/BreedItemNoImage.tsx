import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppImage } from 'shared/ui/AppImage';
import NoImageIcon from 'shared/assets/icons/no-image-card.png';
import { Text, TextAlign, TextSize } from 'shared/ui/Text';
import cls from './BreedItem.module.scss';

export const BreedItemNoImage = () => {
    const { t } = useTranslation('breeds');

    return (
        <div className={classNames(cls.BreedItemNoImageWrapper)}>
            <Text
                className={cls.breedNoImgText}
                text={t('no_image_text')}
                align={TextAlign.JUSTIFY}
                size={TextSize.M}
            />
            <AppImage
                src={NoImageIcon}
                className={cls.breedImg}
            />
        </div>
    );
};
