import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    fetchFavouritesData,
} from 'entities/TopPanelGroup/Favourites/model/services/fetchFavouritesData';

type FavouriteItemType = {
    id: string
};

export const deleteFavouriteAnimal = createAsyncThunk<
    FavouriteItemType,
    number | undefined,
    ThunkConfig<string>
>(
    'voting/deleteFavouriteAnimal',
    async (animalId, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;

        try {
            if (!animalId) {
                throw new Error();
            }

            const response = await extra.api.delete<FavouriteItemType>(
                `/favourites/${animalId}`,
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
