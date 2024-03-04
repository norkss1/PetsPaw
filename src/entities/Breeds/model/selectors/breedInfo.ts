import { StateSchema } from 'app/providers/StoreProvider';

export const getBreedInfoData = (state: StateSchema) => state.breedInfo?.breedInfoData;
export const getBreedInfoIsLoading = (state: StateSchema) => state.breedInfo?.isLoading;
export const getBreedInfoError = (state: StateSchema) => state.breedInfo?.error;
