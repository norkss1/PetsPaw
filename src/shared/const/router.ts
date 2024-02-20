export enum AppRoutes {
  MAIN = 'main',
  BREEDS = 'breeds',
  GALLERY = 'gallery',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteBreeds = () => '/breeds';
export const getRouteGallery = () => '/gallery';
export const getRouteNotFound = () => '*';
