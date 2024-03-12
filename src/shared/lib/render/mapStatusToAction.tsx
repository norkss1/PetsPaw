import FavoriteIcon from 'shared/assets/icons/favorite-icon.svg';
import FavoriteFilledIcon from 'shared/assets/icons/favorite-filled-icon.svg';
import LikeIcon from 'shared/assets/icons/like-icon.svg';
import DislikeIcon from 'shared/assets/icons/dislike-icon.svg';

export enum ActionStatus {
    LIKE = 'like',
    DISLIKE = 'dislike',
    FAVORITE = 'favorite',
}

export const mapStatusToAction = (status: string, activeFavorite?: boolean) => {
    switch (status) {
    case ActionStatus.LIKE:
        return <LikeIcon />;

    case ActionStatus.DISLIKE:
        return <DislikeIcon />;

    case ActionStatus.FAVORITE:
        return activeFavorite ? <FavoriteFilledIcon /> : <FavoriteIcon />;

    default: return null;
    }
};
