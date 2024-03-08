import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rtkApi } from 'shared/api/rtkApi';
import { BreedsListSchema } from 'entities/Breeds';
import { BreedInfoSchema } from 'entities/Breeds/model/types/breeds';
import { VotingActionsSchema } from 'pages/VotingPage/model/types/votingActionsSchema';
import { VotingAnimalSchema } from 'entities/Voting/model/types/voting';

export interface StateSchema {
    // counter: CounterSchema;
    votingAnimal: VotingAnimalSchema;
    votingActions: VotingActionsSchema;
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
