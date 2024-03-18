export enum AppRoutes {
  MAIN = 'main',
  VOTING = 'voting',
  BREEDS = 'breeds',
  BREED_INFO = 'breed_info',
  GALLERY = 'gallery',
  LIKES = 'likes',
  FAVOURITES = 'favourites',
  DISLIKES = 'dislikes',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteVoting = () => '/voting';
export const getRouteBreeds = () => '/breeds';
export const getRouteBreedInfo = (breedId: string) => `/breeds/${breedId}`;
export const getRouteGallery = () => '/gallery';
export const getRouteLikes = () => '/likes';
export const getRouteFavourites = () => '/favourites';
export const getRouteDislikes = () => '/dislikes';
export const getRouteNotFound = () => '*';
