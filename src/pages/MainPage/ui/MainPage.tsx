import React from 'react';
import MainPageImage from 'shared/assets/icons/main-page-girl-and-pet.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

const MainPage = () => (
    <div className={classNames(cls.MainPage)}>
        <div className={classNames(cls.mainPageImage)}>
            <MainPageImage />
        </div>
    </div>
);

export default MainPage;
