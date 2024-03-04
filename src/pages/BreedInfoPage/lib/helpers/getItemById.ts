import { IBreedItem } from 'entities/Breeds';

export const getItemById = (id: string, data: IBreedItem[]) => data?.find((item) => item.id === id);
