import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Animal } from 'entities/Animal';
import { getAnimalData } from 'entities/Animal/api/animalApi';

export const fetchAnimalData = createAsyncThunk<Animal[], void, ThunkConfig<string>>(
    'animal/fetchAnimalsData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await dispatch(
                getAnimalData(10),
            ).unwrap();

            console.log('response: ', response);

            if (!response) {
                throw new Error();
            }

            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue('');
        }
    },
);
