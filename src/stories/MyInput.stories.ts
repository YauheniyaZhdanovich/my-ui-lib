import { Story, Meta } from '@storybook/angular/types-6-0';

import { MyInputComponent } from '../components/my-input';

export default {
  title: 'Example/Input',
  component: MyInputComponent,
  argTypes: {}
} as Meta;

const Template: Story<MyInputComponent> = (args: MyInputComponent) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  value: 'Hello world',
  required: true,
  placeholder: 'My Input Placeholder'
}
