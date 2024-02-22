export interface Animal {
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface AnimalSchema {
    animalData?: Animal[];
    isLoading: boolean;
    error?: string;
}
