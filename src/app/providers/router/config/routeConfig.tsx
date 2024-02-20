import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { BreedsPage } from 'pages/BreedsPage';
import { GalleryPage } from 'pages/GalleryPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteBreeds,
    getRouteGallery,
    getRouteMain,
    getRouteNotFound,
} from 'shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.BREEDS]: {
        path: getRouteBreeds(),
        element: <BreedsPage />,
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
