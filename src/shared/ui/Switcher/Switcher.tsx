import { useState, type FC } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Switcher.module.scss';

interface SwitcherProps {
  className?: string;
  initialEnabled: boolean;
}

export const Switcher: FC<SwitcherProps> = (props) => {
    const { className, initialEnabled } = props;
    const [enabled, setEnabled] = useState(!initialEnabled);

    return (
        <Switch
            className={classNames(cls.Switcher, {}, [className])}
            checked={enabled}
            onChange={setEnabled}
        >
            <span
                className={classNames(cls.indicator, { [cls.enabled]: enabled }, [className])}
            />
        </Switch>
    );
};
