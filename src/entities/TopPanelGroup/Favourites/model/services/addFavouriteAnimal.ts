import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    fetchFavouritesData,
} from 'entities/TopPanelGroup/Favourites/model/services/fetchFavouritesData';

type FavouriteItemType = {
    id: string
};

export const addFavouriteAnimal = createAsyncThunk<
    FavouriteItemType,
    string | undefined,
    ThunkConfig<string>
>(
    'voting/addFavouriteAnimal',
    async (animalId, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;

        try {
            if (!animalId) {
                throw new Error();
            }

            const response = await extra.api.post<FavouriteItemType>(
                '/favourites',
                {
                    image_id: animalId,
                    sub_id: 'user',
                },
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchFavouritesData());

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('');
        }
    },
);
