import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text';
import { BreedItem } from 'entities/Breeds';
import { GridPatternList } from 'widgets/GridPatternList';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    getBreedsListData,
    getBreedsListError,
    getBreedsListIsLoading,
} from '../../model/selectors/breedsList';
import { breedsListReducer } from '../../model/slice/breedsListSlice';
import cls from './BreedsList.module.scss';

interface BreedsProps {
    className?: string;
    limit?: number;
}

const reducers: ReducersList = {
    breedsList: breedsListReducer,
};

export const BreedsList = memo((props: BreedsProps) => {
    const { className, limit } = props;
    const { t } = useTranslation('breeds');

    const isLoading = useSelector(getBreedsListIsLoading);
    const error = useSelector(getBreedsListError);
    const breedsListData = useSelector(getBreedsListData);

    const content = isLoading
        ? <GridPatternList isLoading={isLoading} ItemComponent={BreedItem} />
        : error
            ? <Text title={t('fetch_error')} align={TextAlign.CENTER} />
            : <GridPatternList isLoading={isLoading} data={breedsListData} ItemComponent={BreedItem} />;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.BreedsList, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
