import React from 'react';
import {Story} from '@storybook/react';
import {Props, UserCardListItem} from "./";

export default {
    title: 'UserCardListItem',
    component: UserCardListItem
};

export const Template: Story<Props> = (props) => (<UserCardListItem {...props} />);
Template.args = {
    breakpoint: "xs",
    data: {
        name: "FRANCESCO FERRARO DA SILVA ",
        phone: "123213213",
        email: "cesco@gmail.com",
        role: "admin",
        type: "type",
        creationdate: "22/12/1987",
        units: 3,
        disabled: false
    },
    actions: {
        top: {
            mode: "edit",
            label: "Editar",
            onClick: () => {
            }
        },
        bottom: {
            mode: "delete",
            label: "Desabilitar",
            onClick: () => {
            }
        }
    }
};
