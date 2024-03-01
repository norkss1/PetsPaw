import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text';
import { createGridPattern } from 'shared/lib/render/createGridPattern';
import { fetchBreedsList } from 'entities/Breeds/model/services/fetchBreedsList/fetchBreedsList';
import { BreedItem } from 'entities/Breeds';
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
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getBreedsListIsLoading);
    const error = useSelector(getBreedsListError);
    const breedsListData = useSelector(getBreedsListData);
    let content;

    useEffect(() => {
        dispatch(fetchBreedsList(limit));
    }, [dispatch, limit]);

    if (isLoading) {
        content = createGridPattern({ cls, isLoading }, BreedItem);
    } else if (error) {
        content = (
            <Text
                title={t('fetch_error')}
                align={TextAlign.CENTER}
            />
        );
    } else if (breedsListData) {
        content = createGridPattern({ cls, data: breedsListData }, BreedItem);
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.BreedsList, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
