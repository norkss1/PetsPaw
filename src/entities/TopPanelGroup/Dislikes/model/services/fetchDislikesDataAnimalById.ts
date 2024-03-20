import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addDislikesActions, IDislikesItem } from 'entities/TopPanelGroup/Dislikes';

export const fetchDislikesDataAnimalById = createAsyncThunk<
    IDislikesItem,
    string | undefined,
    ThunkConfig<string>
>(
    'voting/fetchDislikesDataAnimalById',
    async (animalId, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;

        try {
            if (!animalId) {
                throw new Error();
            }

            const response = await extra.api.get<IDislikesItem>(
                `/images/${animalId}`,
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(addDislikesActions.addDislikesList(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('');
        }
    },
);
