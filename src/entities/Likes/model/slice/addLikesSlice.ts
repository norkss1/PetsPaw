import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILikesItem, LikesListSchema } from '../types/likes';

const initialState: LikesListSchema = {
    isLoading: false,
    error: '',
    likesData: [],
};

export const addLikesSlice = createSlice({
    name: 'addLikes',
    initialState,
    reducers: {
        addLikesList: (state, { payload }: PayloadAction<ILikesItem>) => {
            state.likesData?.push(payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addLikesActions } = addLikesSlice;
export const { reducer: addLikesReducer } = addLikesSlice;
