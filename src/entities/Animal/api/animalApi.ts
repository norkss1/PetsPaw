import { rtkApi } from 'shared/api/rtkApi';
import { Animal } from 'entities/Animal';

const animalApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAnimal: build.query<Animal[], number>({
            query: (limit: number = 10) => ({
                url: 'images/search',
                params: {
                    limit,
                },
            }),
        }),
    }),
});

export const getAnimalData = animalApi.endpoints.getAnimal.initiate;
