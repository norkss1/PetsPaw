import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ActionStatusList } from 'entities/ActionStatus';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VotingAnimal, votingAnimalReducer } from 'entities/Voting';
import {
    getVotingActions,
} from 'features/votingActions/model/selectors/getVotingActions/getVotingActions';
import { HeaderPageInfo } from 'widgets/HeaderPageInfo';
import { classNames } from 'shared/lib/classNames/classNames';
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

    const votingActions = useSelector(getVotingActions);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.VotingPage, {}, [className])}>
                <HeaderPageInfo badgeText={t('page_name')} />

                <VotingAnimal />

                <ActionStatusList
                    actions={votingActions.actions}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default VotingPage;
