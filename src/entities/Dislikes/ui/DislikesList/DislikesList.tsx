import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getDislikesListData,
    getDislikesListError,
    getDislikesListIsLoading,
} from 'entities/Dislikes/model/selectors/dislikesList';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign } from 'shared/ui/Text';
import { GridPatternList } from 'widgets/GridPatternList';
import { NoItemInfo } from 'shared/ui/NoItemInfo/NoItemInfo';
import { classNames } from 'shared/lib/classNames/classNames';
import { DislikesItem } from '../DislikesItem/DislikesItem';
import cls from './DislikesList.module.scss';

interface DislikesListProps {
    className?: string;
}

export const DislikesList = (props: DislikesListProps) => {
    const { className } = props;
    const { t } = useTranslation('dislikes');

    const isLoading = useSelector(getDislikesListIsLoading);
    const error = useSelector(getDislikesListError);
    const dislikeList = useSelector(getDislikesListData);

    const content = isLoading ? <Loader />
        : error ? <Text title={t('fetch_error')} align={TextAlign.CENTER} />
            : dislikeList?.length !== 0 ? <GridPatternList isLoading={isLoading} data={dislikeList} ItemComponent={DislikesItem} />
                : <NoItemInfo />;

    return (
        <div className={classNames(cls.DislikesList, {}, [className])}>
            { content }
        </div>
    );
};
