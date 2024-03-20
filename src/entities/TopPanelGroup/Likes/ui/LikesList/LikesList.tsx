import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import {
    getLikesListData,
    getLikesListError,
    getLikesListIsLoading,
} from 'entities/TopPanelGroup/Likes/model/selectors/likesList';
import { GridPatternList } from 'widgets/GridPatternList';
import { classNames } from 'shared/lib/classNames/classNames';
import { NoItemInfo } from 'shared/ui/NoItemInfo/NoItemInfo';
import { LikesItem } from '../LikesItem/LikesItem';
import cls from './LikesList.module.scss';

interface LikesListProps {
    className?: string;
}

export const LikesList = (props: LikesListProps) => {
    const { className } = props;
    const { t } = useTranslation('likes');

    const isLoading = useSelector(getLikesListIsLoading);
    const error = useSelector(getLikesListError);
    const likeList = useSelector(getLikesListData);

    const content = isLoading ? <Loader />
        : error ? <Text title={t('fetch_error')} align={TextAlign.CENTER} />
            : likeList?.length !== 0 ? <GridPatternList isLoading={isLoading} data={likeList} ItemComponent={LikesItem} />
                : <NoItemInfo />;

    return (
        <div className={classNames(cls.LikesList, {}, [className])}>
            { content }
        </div>
    );
};
