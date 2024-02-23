import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectTheme } from 'shared/ui/Select/Select';
import cls from './BreedsPage.module.scss';

interface BreedsPageProps {
    className?: string;
}

const BreedsPage = (props: BreedsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [value1, setValue1] = useState('All breeds');
    const [value2, setValue2] = useState('All breeds');

    // const dispatch = useAppDispatch();
    // const animal = useSelector(getAnimalData);

    // useEffect(() => {
    //     dispatch(fetchAnimalData());
    // }, [dispatch]);

    return (
        <div className={classNames(cls.BreedsPage, {}, [className])}>
            <div className={classNames(cls.breedsPageContent)}>
                <Select
                    theme={SelectTheme.FILLED}
                    value={value1}
                    setValue={setValue1}
                    options={[
                        { value: '0', content: 'All breeds' },
                        { value: '1', content: 'Affenpinscher' },
                        { value: '2', content: 'Afghan Hound' },
                        { value: '3', content: 'African Hunting Dog' },
                    ]}
                />

                <Select
                    theme={SelectTheme.STANDARD}
                    value={value2}
                    setValue={setValue2}
                    options={[
                        { value: '0', content: 'none' },
                        { value: '1', content: 'Affenpinscher' },
                        { value: '2', content: 'Afghan Hound' },
                        { value: '3', content: 'African Hunting Dog' },
                    ]}
                />
            </div>
        </div>
    );
};

export default BreedsPage;
