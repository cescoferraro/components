import React from 'react';
import {Story} from '@storybook/react';
import {B2BButton, B2BButtonProps} from "./";

export default {
    title: 'B2BButton',
    component: B2BButton
};
export const Template: Story<B2BButtonProps> = (props) => (
    <B2BButton {...props} />
);
Template.args = {
    label: "asdfkd",
    onClick: () => {
    },
    disabled: false,
    type: "primary",
    style: {},
    submit: false
};
