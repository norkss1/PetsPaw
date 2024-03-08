import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchVotingAnimal } from 'entities/Voting/model/services/fetchVoitingAnimal';
import { VotingAnimalSchema, IVotingAnimal } from '../types/voting';

const initialState: VotingAnimalSchema = {
    votingAnimalData: [],
    isLoading: false,
    error: undefined,
};

export const votingAnimalSlice = createSlice({
    name: 'votingAnimal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVotingAnimal.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(
                fetchVotingAnimal.fulfilled,
                (state, action: PayloadAction<IVotingAnimal[]>) => {
                    state.isLoading = false;
                    state.error = '';
                    state.votingAnimalData = action.payload;
                },
            )
            .addCase(
                fetchVotingAnimal.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { actions: votingAnimalActions } = votingAnimalSlice;
export const { reducer: votingAnimalReducer } = votingAnimalSlice;
