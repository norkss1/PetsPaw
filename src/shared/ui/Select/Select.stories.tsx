import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select, SelectTheme } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const StandardLight = Template.bind({});
StandardLight.args = {
    label: 'order',
    value: 'None',
    theme: SelectTheme.STANDARD,
    options: [
        { value: '0', content: 'None' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};

export const StandardDark = Template.bind({});
StandardDark.args = {
    label: 'order',
    value: 'None',
    theme: SelectTheme.STANDARD,
    options: [
        { value: '0', content: 'None' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};
StandardDark.decorators = [ThemeDecorator(Theme.STORYBOOK_BLACK)];

export const FilledLight = Template.bind({});
FilledLight.args = {
    value: 'All breeds',
    theme: SelectTheme.FILLED,
    options: [
        { value: '0', content: 'All breeds' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};
FilledLight.decorators = [ThemeDecorator(Theme.STORYBOOK_WHITE)];

export const FilledDark = Template.bind({});
FilledDark.args = {
    value: 'All breeds',
    theme: SelectTheme.FILLED,
    options: [
        { value: '0', content: 'All breeds' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};
FilledDark.decorators = [ThemeDecorator(Theme.DARK)];
