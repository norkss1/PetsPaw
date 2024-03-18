import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rtkApi } from 'shared/api/rtkApi';
import { BreedInfoSchema, BreedsListSchema } from 'entities/Breeds';
import { VotingAnimalSchema } from 'entities/Voting';
import { VotingActionsSchema } from 'features/votingActions';
import { LikesListSchema } from 'entities/Likes';
import { DislikesListSchema } from 'entities/Dislikes';

export interface StateSchema {
    votingAnimal: VotingAnimalSchema;
    votingActions: VotingActionsSchema;
    likesList: LikesListSchema,
    dislikesList: DislikesListSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
    breedsList?: BreedsListSchema;
    breedInfo?: BreedInfoSchema;
}

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
