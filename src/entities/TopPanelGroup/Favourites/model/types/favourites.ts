export interface IFavouritesItem {
    id: number,
    user_id: string,
    image_id: string,
    sub_id: string,
    created_at: string,
    image: {
        id: string,
        url: string
    }
}

export interface FavouritesListSchema {
    isLoading: boolean;
    error?: string;
    favouritesData?: IFavouritesItem[];
}
