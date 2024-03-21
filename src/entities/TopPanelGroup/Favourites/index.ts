export { FavouritesList } from './ui/FavouritesList/FavouritesList';

export type {
    FavouritesListSchema, IFavouritesItem,
} from './model/types/favourites';

export { addFavouritesReducer, addFavouritesActions } from './model/slice/addFavouritesSlice';
