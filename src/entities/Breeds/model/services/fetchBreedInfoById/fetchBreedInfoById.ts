import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IBreedItem } from '../../types/breeds';

export const fetchBreedInfoById = createAsyncThunk<IBreedItem, string | undefined, ThunkConfig<string>>(
    'breedInfo/fetchBreedInfoById',
    async (breedId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            if (!breedId) {
                throw new Error();
            }

            const response = await extra.api.get<IBreedItem>(
                `/breeds/${breedId}`,
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('');
        }
    },
);
