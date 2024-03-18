export interface ILikesItem {
    id: string,
    url: string,
    width: number,
    height: number,
    mime_type?: string,
    breeds?: [
        {
            id: number,
            name: string
        }
    ],
    categories?: string[],
    breed_ids?: string
}

export interface LikesListSchema {
    isLoading: boolean;
    error?: string;
    likesData?: ILikesItem[];
}
