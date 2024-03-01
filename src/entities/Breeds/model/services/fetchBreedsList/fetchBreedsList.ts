import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IBreedItem } from '../../types/breeds';

export const fetchBreedsList = createAsyncThunk<IBreedItem[], number | undefined, ThunkConfig<string>>(
    'breedsList/fetchBreedsList',
    async (limit, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<IBreedItem[]>(
                'breeds',
                {
                    params: {
                        limit,
                    },
                },
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
