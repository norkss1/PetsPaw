import { AppImage } from 'shared/ui/AppImage';
import { IBreedItem } from 'entities/Breeds';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRouteBreedInfo } from 'shared/const/router';
import { BreedItemNoImage } from 'entities/Breeds/ui/BreedItem/BreedItemNoImage';
import cls from './BreedItem.module.scss';

export interface BreedItemProps {
    item: IBreedItem;
    indexItem: number;
}

export const BreedItem = (props: BreedItemProps) => {
    const { item, indexItem } = props;

    return (
        <AppLink
            to={getRouteBreedInfo(`${item.id}`)}
            className={classNames(cls.item, {}, [cls[`item${indexItem + 1}`]])}
        >
            <div className={cls.infoOverlay} />
            <div className={cls.infoContent}>
                {item.name}
            </div>
            {item.image ? (
                <AppImage
                    src={item.image?.url}
                    className={cls.breedImg}
                />
            ) : (
                <BreedItemNoImage />
            )}
        </AppLink>
    );
};
