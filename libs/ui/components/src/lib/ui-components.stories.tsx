import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiComponents } from './ui-components';

const Story: ComponentMeta<typeof UiComponents> = {
    component: UiComponents,
    title: 'UiComponents',
};
export default Story;

const Template: ComponentStory<typeof UiComponents> = (args) => (
    <UiComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
