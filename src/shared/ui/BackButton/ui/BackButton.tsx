import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { getRouteMain } from 'shared/const/router';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import BackButtonIcon from 'shared/assets/icons/back-btn.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BackButton.module.scss';

interface BackButtonProps {
    path?: string;
}

export const BackButton = (props: BackButtonProps) => {
    const { path } = props;

    return (
        <AppLink to={path || getRouteMain()}>
            <Button
                className={classNames(cls.BackButton)}
                size={ButtonSize.L}
                theme={ButtonTheme.SECONDARY}
                square
            >
                <BackButtonIcon />
            </Button>
        </AppLink>
    );
};
