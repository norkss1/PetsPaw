import { StateSchema } from 'app/providers/StoreProvider';

export const getAnimalData = (state: StateSchema) => state.animal.animalData;
