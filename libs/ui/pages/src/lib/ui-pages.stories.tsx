import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiPages } from './ui-pages';

const Story: ComponentMeta<typeof UiPages> = {
    component: UiPages,
    title: 'UiPages',
};
export default Story;

const Template: ComponentStory<typeof UiPages> = (args) => (
    <UiPages {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
