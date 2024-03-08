import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IVotingAnimal } from 'entities/Voting/model/types/voting';

export const fetchVotingAnimal = createAsyncThunk<IVotingAnimal[], void, ThunkConfig<string>>(
    'voting/fetchVotingAnimal',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<IVotingAnimal[]>(
                'images/search',
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
