import React, { useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BreedsList } from 'entities/Breeds';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { Select, SelectTheme } from 'shared/ui/Select/Select';
import { BackButton } from 'shared/ui/BackButton';
import { BadgeInfo } from 'shared/ui/BadgeInfo/BadgeInfo';
import cls from './BreedsPage.module.scss';

interface BreedsPageProps {
    className?: string;
}

const BreedsPage = (props: BreedsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('breeds');
    const contentPageRef = useRef<HTMLDivElement>(null);
    const { scrollPosition, handleScroll } = useScroll({ ref: contentPageRef });
    const [limitValue, setLimitValue] = useState({ value: 10, content: 'Limit: 10' });

    const mods: Mods = {
        [cls.unlimitedScreenContent]: scrollPosition <= 85 && limitValue.value > 5,
    };

    return (
        <div className={classNames(cls.BreedsPage, {}, [className])}>
            <div
                ref={contentPageRef}
                className={classNames(cls.breedsPageContent, mods, [])}
                onScroll={handleScroll}
            >
                <div className={cls.breedsPageHeader}>
                    <BackButton />
                    <BadgeInfo text={t('page_name')} />
                    <Select
                        theme={SelectTheme.FILLED}
                        value={limitValue}
                        setValue={setLimitValue}
                        options={[
                            { value: 5, content: 'Limit: 5' },
                            { value: 10, content: 'Limit: 10' },
                            { value: 15, content: 'Limit: 15' },
                            { value: 20, content: 'Limit: 20' },
                        ]}
                    />
                </div>

                <BreedsList limit={limitValue.value} />
            </div>
        </div>
    );
};

export default BreedsPage;
