import { StateSchema } from 'app/providers/StoreProvider';

export const getDislikesListData = (state: StateSchema) => state.dislikesList?.dislikesData;
export const getDislikesListIsLoading = (state: StateSchema) => state.dislikesList?.isLoading;
export const getDislikesListError = (state: StateSchema) => state.dislikesList?.error;
