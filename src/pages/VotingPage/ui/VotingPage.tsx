import React from 'react';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'shared/ui/BackButton';
import { classNames } from 'shared/lib/classNames/classNames';
import { BadgeInfo } from 'shared/ui/BadgeInfo/BadgeInfo';
import { ActionStatusList } from 'entities/ActionStatus';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VotingAnimal, votingAnimalReducer } from 'entities/Voting';
import cls from './VotingPage.module.scss';

interface VotingPageProps {
    className?: string;
}

const reducers: ReducersList = {
    votingAnimal: votingAnimalReducer,
};

const VotingPage = (props: VotingPageProps) => {
    const { className } = props;
    const { t } = useTranslation('voting');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.VotingPage, {}, [className])}>
                <div className={cls.votingPageHeader}>
                    <BackButton />
                    <BadgeInfo text={t('page_name')} />
                </div>

                <VotingAnimal />

                <ActionStatusList
                    actions={[
                        {
                            id: 'asys',
                            time: '22:35',
                            action: 'like',
                        },
                        {
                            id: 'acod',
                            time: '21:22',
                            action: 'favorite',
                        },
                        {
                            id: 'fsde',
                            time: '19:12',
                            action: 'dislike',
                        },
                    ]}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default VotingPage;
