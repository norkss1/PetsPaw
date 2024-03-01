import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBreedsList } from '../services/fetchBreedsList/fetchBreedsList';
import { IBreedItem, BreedsListSchema } from '../types/breeds';

const initialState: BreedsListSchema = {
    breedsData: [],
    isLoading: false,
    error: undefined,
};

export const breedsListSlice = createSlice({
    name: 'breedsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBreedsList.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(
                fetchBreedsList.fulfilled,
                (state, action: PayloadAction<IBreedItem[]>) => {
                    state.isLoading = false;
                    state.error = '';
                    state.breedsData = action.payload;
                },
            )
            .addCase(
                fetchBreedsList.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { actions: breedsListActions } = breedsListSlice;
export const { reducer: breedsListReducer } = breedsListSlice;
