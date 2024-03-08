import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActionStatus } from 'entities/ActionStatus';
import { VotingActionsSchema } from '../types/votingActionsSchema';

const initialState: VotingActionsSchema = {
    actions: [],
};

export const votingActionsSlice = createSlice({
    name: 'votingActions',
    initialState,
    reducers: {
        addAction: (state, { payload }: PayloadAction<IActionStatus>) => {
            state.actions.unshift(payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: votingActionsActions } = votingActionsSlice;
export const { reducer: votingActionsReducer } = votingActionsSlice;
