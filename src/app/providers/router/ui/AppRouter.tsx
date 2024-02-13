import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { routeConfig } from 'app/providers/router/config/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
