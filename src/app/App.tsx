import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { TopPanel } from 'widgets/TopPanel';
import { getRouteMain } from 'shared/const/router';

function App() {
    const { theme } = useTheme();
    const location = useLocation();
    const homePath = getRouteMain();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    {location.pathname !== homePath && <TopPanel />}
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
