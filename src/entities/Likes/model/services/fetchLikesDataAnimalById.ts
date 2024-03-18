import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ILikesItem } from 'entities/Likes/model/types/likes';
import { addLikesActions } from 'entities/Likes';

export const fetchLikesDataAnimalById = createAsyncThunk<
    ILikesItem,
    string | undefined,
    ThunkConfig<string>
>(
    'voting/fetchLikesDataAnimalById',
    async (animalId, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;

        try {
            if (!animalId) {
                throw new Error();
            }

            const response = await extra.api.get<ILikesItem>(
                `/images/${animalId}`,
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(addLikesActions.addLikesList(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('');
        }
    },
);
