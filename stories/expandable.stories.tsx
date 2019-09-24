import React from 'react';
import {storiesOf} from '@storybook/react';
import {ExpendedB2BButton} from "../src/expandable/expandable";
import {boolean, select, text} from "@storybook/addon-knobs";

declare const module:any;

storiesOf('ExpendedButton', module)
  .add('primary', () =>
    <ExpendedB2BButton
      mode={select("Mode", ["add", "edit", "delete"], "add")}
      disabled={boolean("Disabled", false)}
      label={text("Label", "Adicionar")}
      onClick={() => {}}
    />
  );

