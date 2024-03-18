import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { VotingPage } from 'pages/VotingPage';
import { BreedsPage } from 'pages/BreedsPage';
import { BreedInfoPage } from 'pages/BreedInfoPage';
import { GalleryPage } from 'pages/GalleryPage';
import { LikesPage } from 'pages/LikesPage';
import { FavouritesPage } from 'pages/FavouritesPage';
import { DislikesPage } from 'pages/DislikesPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
    getRouteVoting,
    getRouteBreeds,
    getRouteBreedInfo,
    getRouteGallery,
    getRouteLikes,
    getRouteFavourites,
    getRouteDislikes,
    getRouteNotFound,
} from 'shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.VOTING]: {
        path: getRouteVoting(),
        element: <VotingPage />,
    },
    [AppRoutes.BREEDS]: {
        path: getRouteBreeds(),
        element: <BreedsPage />,
    },
    [AppRoutes.BREED_INFO]: {
        path: getRouteBreedInfo(':breed_id'),
        element: <BreedInfoPage />,
    },
    [AppRoutes.GALLERY]: {
        path: getRouteGallery(),
        element: <GalleryPage />,
    },
    [AppRoutes.LIKES]: {
        path: getRouteLikes(),
        element: <LikesPage />,
    },
    [AppRoutes.FAVOURITES]: {
        path: getRouteFavourites(),
        element: <FavouritesPage />,
    },
    [AppRoutes.DISLIKES]: {
        path: getRouteDislikes(),
        element: <DislikesPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },
};
