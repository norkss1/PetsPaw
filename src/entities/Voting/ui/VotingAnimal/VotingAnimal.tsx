import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AppImage } from 'shared/ui/AppImage';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchVotingAnimal } from 'entities/Voting/model/services/fetchVoitingAnimal';
import {
    getVotingAnimalData,
    getVotingAnimalIsLoading,
} from 'entities/Voting/model/selectors/votingAnimal';
import { IVotingAnimal } from 'entities/Voting';
import { VotingActions } from 'features/votingActions';
import { classNames } from 'shared/lib/classNames/classNames';
import { FullScreenOverlay } from 'shared/ui/FullScreenOverlay/FullScreenOverlay';
import cls from './VotingAnimal.module.scss';

interface VotingAnimalProps {
    className?: string;
}

export const VotingAnimal = (props: VotingAnimalProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getVotingAnimalIsLoading);
    const votingAnimalData = useSelector(getVotingAnimalData);

    const [votingAnimalItem, setVotingAnimalItem] = useState<IVotingAnimal>();
    const [isFullImgModal, setIsFullImgModal] = useState(false);

    const changeAnimalImage = () => {
        dispatch(fetchVotingAnimal());
    };

    const onOpenModal = useCallback(() => {
        setIsFullImgModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsFullImgModal(false);
    }, []);

    useInitialEffect(() => {
        if (votingAnimalData?.length === 0) {
            dispatch(fetchVotingAnimal());
        }
    });

    useEffect(() => {
        if (votingAnimalData) {
            setVotingAnimalItem(votingAnimalData[0]);
        }
    }, [votingAnimalData]);

    if (isLoading || votingAnimalItem === undefined) {
        return (
            <div className={classNames(cls.VotingAnimal, {}, [className])}>
                <Skeleton
                    width="100%"
                    height="360px"
                    borderRadius="20px"
                />
            </div>
        );
    }

    return (
        <div className={cls.votingAnimalWrapper}>
            <div className={classNames(cls.votingAnimal, {}, [className])}>
                <FullScreenOverlay
                    className={cls.fullScreenImg}
                    url={votingAnimalItem?.url}
                    isOpen={isFullImgModal}
                    onClose={onCloseModal}
                    onClick={onOpenModal}
                />

                <AppImage
                    className={cls.votingAnimalImg}
                    src={votingAnimalItem?.url}
                    fallback={(
                        <Skeleton
                            width="100%"
                            height="360px"
                            borderRadius="20px"
                        />
                    )}
                    onClick={onOpenModal}
                />

            </div>

            {votingAnimalItem && <VotingActions animal={votingAnimalItem} handleChangeImage={changeAnimalImage} />}
        </div>
    );
};
