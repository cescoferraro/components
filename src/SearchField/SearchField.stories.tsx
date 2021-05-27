import React from 'react';
import {storiesOf, Story} from '@storybook/react';
import {SearchFieldProps, SearchField} from "./SearchField";

export default {
  title: 'SearchField',
  component: SearchField
};
export const Template: Story<SearchFieldProps> = (props) => (
    <SearchField {...props} />
);
Template.args = {
    label:"Here"
};
