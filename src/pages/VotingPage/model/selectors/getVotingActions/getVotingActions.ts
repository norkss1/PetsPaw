import { StateSchema } from 'app/providers/StoreProvider';

export const getVotingActions = (state: StateSchema) => state.votingActions;
