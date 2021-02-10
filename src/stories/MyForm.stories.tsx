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

export const MyFormPrimary = Template.bind({});
MyFormPrimary.args = {
  onSubmitHandler: (data) => data,
};

export const MyFormSecondVersion = Template.bind({});
MyFormSecondVersion.args = {
  onSubmitHandler: (data) => data,
};
