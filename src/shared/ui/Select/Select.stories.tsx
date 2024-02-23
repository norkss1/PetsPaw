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
    value: 'none',
    theme: SelectTheme.STANDARD,
    options: [
        { value: '0', content: 'none' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};

export const StandardDark = Template.bind({});
StandardDark.args = {
    value: 'none',
    theme: SelectTheme.STANDARD,
    options: [
        { value: '0', content: 'none' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};
StandardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledLight = Template.bind({});
FilledLight.args = {
    label: 'order',
    value: 'All breeds',
    theme: SelectTheme.FILLED,
    options: [
        { value: '0', content: 'All breeds' },
        { value: '1', content: 'Affenpinscher' },
        { value: '2', content: 'Afghan Hound' },
        { value: '3', content: 'African Hunting Dog' },
    ],
};

export const FilledDark = Template.bind({});
FilledDark.args = {
    label: 'order',
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
