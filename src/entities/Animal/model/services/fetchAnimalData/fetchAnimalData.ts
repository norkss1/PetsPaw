import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Animal } from 'entities/Animal';
import { getAnimalData } from 'entities/Animal/api/animalApi';

export const fetchAnimalData = createAsyncThunk<Animal[], void, ThunkConfig<string>>(
    'animal/fetchAnimalsData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch, extra } = thunkApi;

        try {
            // const response = await dispatch(
            //     getAnimalData(10),
            // ).unwrap();

            const response = await extra.api.get<Animal[]>(
                'images/search',
                {
                    params: {
                        limit: 10,
                    },
                },
            );

            console.log('response: ', response);

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
