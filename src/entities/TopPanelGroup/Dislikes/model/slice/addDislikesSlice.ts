import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DislikesListSchema, IDislikesItem } from '../types/dislikes';

const initialState: DislikesListSchema = {
    isLoading: false,
    error: '',
    dislikesData: [],
};

export const addDislikesSlice = createSlice({
    name: 'addDislikes',
    initialState,
    reducers: {
        addDislikesList: (state, { payload }: PayloadAction<IDislikesItem>) => {
            state.dislikesData?.push(payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addDislikesActions } = addDislikesSlice;
export const { reducer: addDislikesReducer } = addDislikesSlice;
