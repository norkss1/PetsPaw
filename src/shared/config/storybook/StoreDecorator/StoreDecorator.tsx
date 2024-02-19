import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

// const defaultAsyncReducers: ReducersList = {
//     loginForm: loginReducer,
//     profile: profileReducer,
// };

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
    >
        <StoryComponent />
    </StoreProvider>
);
