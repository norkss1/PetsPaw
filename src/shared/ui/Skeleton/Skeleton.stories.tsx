import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const StandardLight = Template.bind({});
StandardLight.args = {
    width: '600px',
    height: '200px',
};
StandardLight.decorators = [ThemeDecorator(Theme.STORYBOOK_WHITE)];

export const StandardDark = Template.bind({});
StandardDark.args = {
    width: '600px',
    height: '200px',
};
StandardDark.decorators = [ThemeDecorator(Theme.STORYBOOK_BLACK)];

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};
