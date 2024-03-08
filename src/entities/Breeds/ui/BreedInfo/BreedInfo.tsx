import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTranslation } from 'react-i18next';
import { IBreedItem } from 'entities/Breeds';
import { getBreedInfoData } from 'entities/Breeds/model/selectors/breedInfo';
import { getBreedsListData } from 'entities/Breeds/model/selectors/breedsList';
import {
    fetchBreedInfoById,
} from 'entities/Breeds/model/services/fetchBreedInfoById/fetchBreedInfoById';
import { BreedInfoBlock } from 'entities/Breeds/ui/BreedInfo/BreedInfoBlock';
import { getItemById } from 'pages/BreedInfoPage/lib/helpers/getItemById';
import { getRouteBreeds } from 'shared/const/router';
import { AppImage } from 'shared/ui/AppImage';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text';
import { BadgeInfo, BadgeInfoTheme } from 'shared/ui/BadgeInfo/BadgeInfo';
import { BackButton } from 'shared/ui/BackButton';
import { BREED_ITEM_IMAGE_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BreedInfo.module.scss';

interface BreedInfoProps {
    className?: string;
    id: string;
}

export const BreedInfo = (props: BreedInfoProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('breeds');

    const breedInfoData = useSelector(getBreedInfoData);
    const breedsListData = useSelector(getBreedsListData);
    const [breedItem, setBreedItem] = useState<IBreedItem>();
    const [breedItemImageUrl, setBreedItemImageUrl] = useState('');

    useInitialEffect(() => {
        if (breedsListData === undefined) {
            dispatch(fetchBreedInfoById(id));
        }
    });

    useEffect(() => {
        if (breedsListData) {
            const item = getItemById(id, breedsListData);
            const imgUrl = item?.image?.url;
            if (imgUrl) {
                localStorage.setItem(
                    BREED_ITEM_IMAGE_LOCALSTORAGE_KEY,
                    imgUrl,
                );
            }

            setBreedItem(item);
        } else if (breedInfoData) {
            setBreedItem(breedInfoData);
            const imgUrl = localStorage.getItem(BREED_ITEM_IMAGE_LOCALSTORAGE_KEY);
            if (imgUrl) setBreedItemImageUrl(imgUrl);
        }
    }, [breedInfoData, breedsListData, id]);

    return (
        <div className={classNames(cls.BreedInfo, {}, [className])}>
            <div className={classNames(cls.pageContainer)}>
                <div className={classNames(cls.pageHeader)}>
                    <BackButton path={getRouteBreeds()} />
                    <BadgeInfo text={t('page_name')} theme={BadgeInfoTheme.SECONDARY} />
                    <BadgeInfo text={id} />
                </div>

                <div className={classNames(cls.pageContent)}>
                    <div className={classNames(cls.imgWrapper)}>
                        {(breedItem?.image || breedItemImageUrl) && (
                            <AppImage
                                src={breedItem?.image?.url ? breedItem.image.url : breedItemImageUrl}
                                className={cls.breedItemImg}
                            />
                        )}
                    </div>

                    <div className={classNames(cls.infoWrapper)}>
                        <Text
                            className={cls.infoTitle}
                            title={breedItem?.name}
                            align={TextAlign.CENTER}
                            size={TextSize.L}
                        />

                        <Text
                            className={cls.infoSubtitle}
                            text={breedItem?.description}
                            align={TextAlign.JUSTIFY}
                            size={TextSize.M}
                        />

                        <div className={cls.infoContent}>
                            <div className={cls.infoContentBlockTemp}>
                                <Text
                                    className={cls.infoContentText}
                                    title={t('temperament_block')}
                                    align={TextAlign.JUSTIFY}
                                    size={TextSize.S}
                                    weight={TextWeight.MEDIUM}
                                />
                                <Text
                                    className={cls.infoContentText}
                                    text={breedItem?.temperament}
                                    align={TextAlign.LEFT}
                                    size={TextSize.M}
                                    weight={TextWeight.REGULAR}
                                />
                            </div>
                            <div className={cls.infoContentBlock}>
                                <BreedInfoBlock
                                    title={t('weight_block')}
                                    text={`${breedItem?.weight.metric} kgs`}
                                />
                                <BreedInfoBlock
                                    title={t('life_span_block')}
                                    text={`${breedItem?.life_span} years`}
                                />
                                <BreedInfoBlock
                                    title={t('origin_block')}
                                    text={`${breedItem?.origin}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
