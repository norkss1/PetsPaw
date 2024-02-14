import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Button theme={ButtonTheme.THIRTY} square size={ButtonSize.L} />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
