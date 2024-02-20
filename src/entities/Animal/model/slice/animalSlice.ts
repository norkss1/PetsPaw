import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAnimalData } from 'entities/Animal';
import { Animal, AnimalSchema } from '../types/animal';

const initialState: AnimalSchema = {
    animalData: [],
    isLoading: false,
    error: '',
};

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimalData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchAnimalData.fulfilled, (state, action: PayloadAction<Animal[]>) => {
                state.isLoading = false;
                state.error = '';
                state.animalData = action.payload;
            })
            .addCase(fetchAnimalData.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: animalActions } = animalSlice;
export const { reducer: animalReducer } = animalSlice;