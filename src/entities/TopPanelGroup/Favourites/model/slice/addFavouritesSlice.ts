import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavouritesItem, FavouritesListSchema } from '../types/favourites';

const initialState: FavouritesListSchema = {
    isLoading: false,
    error: '',
    favouritesData: [],
};

export const addFavouritesSlice = createSlice({
    name: 'addFavourites',
    initialState,
    reducers: {
        addFavouritesList: (state, { payload }: PayloadAction<IFavouritesItem[]>) => {
            state.favouritesData = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addFavouritesActions } = addFavouritesSlice;
export const { reducer: addFavouritesReducer } = addFavouritesSlice;
