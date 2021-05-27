import React from 'react';
import {ExpendedButton, Props} from './';
import {Story} from "@storybook/react";

export default {
    title: 'ExpendedButton',
    component: ExpendedButton
};
export const Template: Story<Props> = (props) => (
    <ExpendedButton {...props} />
);
Template.args = {
    label: "asdfkd",
    mode: "add",
    onClick: () => {},
    disabled: false,
    color: "red"
};
