import React from 'react';
import { getRouteBreeds, getRouteGallery, getRouteVoting } from 'shared/const/router';
import VotingTabIcon from 'shared/assets/icons/tab-icon-voting.svg';
import BreedsTabIcon from 'shared/assets/icons/tab-icon-breeds.svg';
import GalleryTabIcon from 'shared/assets/icons/tab-icon-gallery.svg';

export interface NavbarItemType {
    path: string;
    btnText: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    backgroundColor: string;
}

export const NavbarItemsList: NavbarItemType[] = [
    {
        path: getRouteVoting(),
        Icon: VotingTabIcon,
        btnText: 'navbar.voting',
        backgroundColor: 'purpleBg',
    },
    {
        path: getRouteBreeds(),
        Icon: BreedsTabIcon,
        btnText: 'navbar.breeds',
        backgroundColor: 'greenBg',
    },
    {
        path: getRouteGallery(),
        Icon: GalleryTabIcon,
        btnText: 'navbar.gallery',
        backgroundColor: 'yellowBg',
    },
];
