export interface IVotingAnimal {
    id: string,
    url: string,
    width: number,
    height: number
}

export interface VotingAnimalSchema {
    isLoading: boolean;
    error?: string;
    votingAnimalData?: IVotingAnimal[];
}
