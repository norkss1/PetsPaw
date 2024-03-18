import { StateSchema } from 'app/providers/StoreProvider';

export const getLikesListData = (state: StateSchema) => state.likesList?.likesData;
export const getLikesListIsLoading = (state: StateSchema) => state.likesList?.isLoading;
export const getLikesListError = (state: StateSchema) => state.likesList?.error;
