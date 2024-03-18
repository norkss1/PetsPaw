import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTranslation } from 'react-i18next';

import { BreedsList } from 'entities/Breeds';
import { fetchBreedsList } from 'entities/Breeds/model/services/fetchBreedsList/fetchBreedsList';
import { getBreedsListData } from 'entities/Breeds/model/selectors/breedsList';

import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { Select, SelectTheme } from 'shared/ui/Select/Select';
import { HeaderPageInfo } from 'widgets/HeaderPageInfo';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './BreedsPage.module.scss';

interface BreedsPageProps {
    className?: string;
}

const BreedsPage = (props: BreedsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('breeds');

    const breedsListData = useSelector(getBreedsListData);

    const contentPageRef = useRef<HTMLDivElement>(null);
    const { scrollPosition, handleScroll } = useScroll({ ref: contentPageRef });
    const [limitValue, setLimitValue] = useState({ value: 10, content: 'Limit: 10' });

    const mods: Mods = {
        [cls.unlimitedScreenContent]: scrollPosition <= 85 && limitValue.value > 5,
    };

    useInitialEffect(() => {
        if (!breedsListData) {
            dispatch(fetchBreedsList());
        }
    });

    return (
        <div className={classNames(cls.BreedsPage, {}, [className])}>
            <div
                ref={contentPageRef}
                className={classNames(cls.breedsPageContent, mods, [])}
                onScroll={handleScroll}
            >
                <div className={cls.breedsPageHeader}>
                    <HeaderPageInfo badgeText={t('page_name')} />
                    <Select
                        theme={SelectTheme.FILLED}
                        value={limitValue}
                        setValue={setLimitValue}
                        options={[
                            { value: 5, content: 'Limit: 5' },
                            { value: 10, content: 'Limit: 10' },
                            { value: 15, content: 'Limit: 15' },
                            { value: 20, content: 'Limit: 20' },
                            { value: 40, content: 'Limit: 40' },
                            { value: 60, content: 'Limit: 60' },
                        ]}
                    />
                </div>

                <BreedsList limit={limitValue.value} />
            </div>
        </div>
    );
};

export default BreedsPage;
