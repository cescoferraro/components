import * as React from 'react';
import {Story} from '@storybook/react';
import {MainHeader, Props} from "./MainHeader";

export default {
    title: 'MainHeader',
    component: MainHeader
};
export const Template: Story<Props> = (props) => (
    <MainHeader {...props} />
);
Template.args = {
    title: "Verdadeiro",
    subtitle: "Verdadeiro",
    textColor: "red",
    mobile: false
};
