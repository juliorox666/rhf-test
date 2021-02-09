import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import MyForm from "components/MyForm";

export default {
  title: "MyForm",
  component: MyForm,
};

const Template: Story<ComponentProps<typeof MyForm>> = (args) => (
  <MyForm {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  onSubmitHandler: (data) => data,
};
