import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { breedInfoDataInit } from '../../model/lib/data/breedInfoData';
import { IBreedItem, BreedInfoSchema } from '../types/breeds';
import {
    fetchBreedInfoById,
} from '../services/fetchBreedInfoById/fetchBreedInfoById';

const initialState: BreedInfoSchema = {
    breedInfoData: breedInfoDataInit,
    isLoading: false,
    error: undefined,
};

export const breedInfoSlice = createSlice({
    name: 'breedInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBreedInfoById.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(
                fetchBreedInfoById.fulfilled,
                (state, action: PayloadAction<IBreedItem>) => {
                    state.isLoading = false;
                    state.error = '';
                    state.breedInfoData = action.payload;
                },
            )
            .addCase(
                fetchBreedInfoById.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { actions: breedInfoActions } = breedInfoSlice;
export const { reducer: breedInfoReducer } = breedInfoSlice;
