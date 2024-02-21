import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { VotingPage } from 'pages/VotingPage';
import { BreedsPage } from 'pages/BreedsPage';
import { BreedInfoPage } from 'pages/BreedInfoPage';
import { GalleryPage } from 'pages/GalleryPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteVoting,
    getRouteBreeds,
    getRouteBreedInfo,
    getRouteGallery,
    getRouteMain,
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
        path: getRouteBreedInfo(),
        element: <BreedInfoPage />,
    },
    [AppRoutes.GALLERY]: {
        path: getRouteGallery(),
        element: <GalleryPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },
};
