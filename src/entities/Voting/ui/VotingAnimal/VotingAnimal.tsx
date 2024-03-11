import { useEffect, useState } from 'react';
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
import { classNames } from 'shared/lib/classNames/classNames';
import { VotingActions } from 'features/votingActions/ui/VotingActions/VotingActions';
import { IVotingAnimal } from 'entities/Voting';
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

    const changeAnimalImage = () => {
        dispatch(fetchVotingAnimal());
    };

    useInitialEffect(() => {
        dispatch(fetchVotingAnimal());
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
        <div className={classNames(cls.VotingAnimal, {}, [className])}>
            {votingAnimalItem && <VotingActions animal={votingAnimalItem} handleChangeImage={changeAnimalImage} />}
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
            />
        </div>
    );
};
