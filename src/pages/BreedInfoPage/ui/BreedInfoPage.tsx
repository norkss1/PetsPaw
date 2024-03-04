import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { BreedInfo } from 'entities/Breeds';
import { breedInfoReducer } from '../../../entities/Breeds/model/slice/breedInfoSlice';

const reducers: ReducersList = {
    breedInfo: breedInfoReducer,
};

const BreedInfoPage = () => {
    const location = useLocation();
    const path = location.pathname;
    const id = path.substring(path.lastIndexOf('/') + 1);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <BreedInfo id={id} />
        </DynamicModuleLoader>
    );
};

export default memo(BreedInfoPage);
