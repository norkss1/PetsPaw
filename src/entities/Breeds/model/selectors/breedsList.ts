import { StateSchema } from 'app/providers/StoreProvider';

export const getBreedsListData = (state: StateSchema) => state.breedsList?.breedsData;
export const getBreedsListIsLoading = (state: StateSchema) => state.breedsList?.isLoading;
export const getBreedsListError = (state: StateSchema) => state.breedsList?.error;
