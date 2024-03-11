import React from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { IBreedItem } from 'entities/Breeds';
import { BreedItemProps } from 'entities/Breeds/ui/BreedItem/BreedItem';

interface createGridPatternProps {
    cls: Record<string, string>;
    isLoading?: boolean;
    data?: IBreedItem[];
}

export const createGridPattern = (props: createGridPatternProps, ItemComponent: (props: BreedItemProps) => JSX.Element) => {
    const {
        cls,
        isLoading = false,
        data,
    } = props;

    const mods: Mods = { [cls.reverse]: true };

    const numberArray = (len: number) => Array.from({ length: len }, (_, index) => `item${index + 1}`);

    const skeletonGenerator = () => {
        const skeletonList = numberArray(5);

        return skeletonList.map((item) => (
            <Skeleton
                className={cls[item]}
                borderRadius="20px"
                key={item}
            />
        ));
    };

    const skeletonItems = skeletonGenerator();

    const containerGenerator = () => {
        if (isLoading) {
            const gridContainerList = numberArray(2);

            return gridContainerList.map((item, index) => {
                const isMods = !((index + 1) % 2) ? mods : {};
                const keyValue = `key-load-${index}`;

                return (
                    <div key={keyValue} className={classNames(cls.gridContainer, isMods)}>
                        {skeletonItems}
                    </div>
                );
            });
        }

        const imagesListGenerator = () => {
            const imagesListArr = [];
            if (data) {
                for (let i = 0; i < data.length; i += 5) {
                    imagesListArr.push(data.slice(i, i + 5));
                }
            }
            return imagesListArr;
        };

        const imagesList = imagesListGenerator();

        return imagesList.map((items, index) => {
            const isMods = !((index + 1) % 2) ? mods : {};
            const keyValue = `key-image-${index}`;

            return (
                <div key={keyValue} className={classNames(cls.gridContainer, isMods)}>
                    {items.map((item, index) => (
                        <ItemComponent key={item.id} item={item} indexItem={index} />
                    ))}
                </div>
            );
        });
    };

    return (
        <>
            {containerGenerator()}
        </>
    );
};
