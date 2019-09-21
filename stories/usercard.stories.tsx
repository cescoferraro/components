import React from 'react';
import {storiesOf} from '@storybook/react';
import {UserCardListItem} from "../src/card/usercard";
import {select} from "@storybook/addon-knobs";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

const breakpointGEN = (breakpoint: Breakpoint):Breakpoint =>
  select("Breakpoint", {xs: "xs", sm: "sm", md: "md", lg: "lg"}, breakpoint);

storiesOf('UserCardListItem', module)
  .add('primary', () =>
    <UserCardListItem
      breakpoint={breakpointGEN("xs")}
      data={{
        name: "FRANCESCO FERRARO DA SILVA ",
        phone: "123213213",
        email: "cesco@gmail.com",
        role: "admin",
        type: "type",
        creationdate: "22/12/1987",
        units: 3,
        disabled: false
      }}
      actions={{
        top: {
          mode: "edit",
          label: "Editar",
          onClick: () => {}
        },
        bottom: {
          mode: "delete",
          label: "Desabilitar",
          onClick: () => {}
        }
      }}
    />
  );

