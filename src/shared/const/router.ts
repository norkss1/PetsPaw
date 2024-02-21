export enum AppRoutes {
  MAIN = 'main',
  VOTING = 'voting',
  BREEDS = 'breeds',
  BREED_INFO = 'breed_info',
  GALLERY = 'gallery',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteVoting = () => '/voting';
export const getRouteBreeds = () => '/breeds';
export const getRouteBreedInfo = () => '/breeds/info';
export const getRouteGallery = () => '/gallery';
export const getRouteNotFound = () => '*';
