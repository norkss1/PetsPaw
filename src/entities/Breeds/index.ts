export { BreedsList } from './ui/BreedsList/BreedsList';
export { BreedItem } from './ui/BreedItem/BreedItem';
export { BreedInfo } from './ui/BreedInfo/BreedInfo';

export type {
    IBreedItem, BreedInfoSchema, BreedsListSchema,
} from './model/types/breeds';

export { breedInfoReducer, breedInfoActions } from './model/slice/breedInfoSlice';
