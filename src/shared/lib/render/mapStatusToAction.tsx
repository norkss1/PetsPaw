import FavouriteIcon from 'shared/assets/icons/favourite-icon.svg';
import FavouriteFilledIcon from 'shared/assets/icons/favourite-filled-icon.svg';
import LikeIcon from 'shared/assets/icons/like-icon.svg';
import DislikeIcon from 'shared/assets/icons/dislike-icon.svg';

export enum ActionStatus {
    LIKE = 'like',
    DISLIKE = 'dislike',
    FAVOURITE = 'favourite',
}

export const mapStatusToAction = (status: string, activeFavorite?: boolean) => {
    switch (status) {
    case ActionStatus.LIKE:
        return <LikeIcon />;

    case ActionStatus.DISLIKE:
        return <DislikeIcon />;

    case ActionStatus.FAVOURITE:
        return activeFavorite ? <FavouriteFilledIcon /> : <FavouriteIcon />;

    default: return null;
    }
};
