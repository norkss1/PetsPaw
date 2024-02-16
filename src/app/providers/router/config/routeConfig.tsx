import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { GalleryPage } from 'pages/GalleryPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
    AppRoutes,
    getRouteGallery,
    getRouteMain,
    getRouteNotFound,
} from 'shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
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
