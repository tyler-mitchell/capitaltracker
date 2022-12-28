import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Index } from './index';

const Story: ComponentMeta<typeof Index> = {
    component: Index,
    title: 'Index',
};
export default Story;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
