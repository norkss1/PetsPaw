import {
    configureStore, ReducersMapObject, Reducer, CombinedState,
} from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { rtkApi } from 'shared/api/rtkApi';
import { $api } from 'shared/api/api';
import { votingAnimalReducer } from 'entities/Voting';
import { votingActionsReducer } from 'features/votingActions';
import { addLikesReducer } from 'entities/TopPanelGroup/Likes';
import { addDislikesReducer } from 'entities/TopPanelGroup/Dislikes';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        votingAnimal: votingAnimalReducer,
        votingActions: votingActionsReducer,
        likesList: addLikesReducer,
        dislikesList: addDislikesReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
