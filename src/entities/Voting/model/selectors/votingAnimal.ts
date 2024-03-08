import { StateSchema } from 'app/providers/StoreProvider';

export const getVotingAnimalData = (state: StateSchema) => state.votingAnimal?.votingAnimalData;
export const getVotingAnimalIsLoading = (state: StateSchema) => state.votingAnimal?.isLoading;
export const getVotingAnimalError = (state: StateSchema) => state.votingAnimal?.error;
