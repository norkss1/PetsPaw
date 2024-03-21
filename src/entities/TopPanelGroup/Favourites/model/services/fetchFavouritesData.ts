import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IFavouritesItem } from 'entities/TopPanelGroup/Favourites/model/types/favourites';
import { addFavouritesActions } from 'entities/TopPanelGroup/Favourites';

export const fetchFavouritesData = createAsyncThunk<
    IFavouritesItem[],
    void,
    ThunkConfig<string>
>(
    'voting/fetchFavouritesData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;

        try {
            const response = await extra.api.get<IFavouritesItem[]>(
                '/favourites',
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(addFavouritesActions.addFavouritesList(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('');
        }
    },
);
