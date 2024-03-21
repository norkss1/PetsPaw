import { StateSchema } from 'app/providers/StoreProvider';

export const getFavouritesListData = (state: StateSchema) => state.favouritesList?.favouritesData;
export const getFavouritesListIsLoading = (state: StateSchema) => state.favouritesList?.isLoading;
export const getFavouritesListError = (state: StateSchema) => state.favouritesList?.error;
