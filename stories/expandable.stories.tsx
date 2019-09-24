import React from 'react';
import {storiesOf} from '@storybook/react';
import {ExpendedButton} from "../src/expandable/expandable";
import {boolean, select, text} from "@storybook/addon-knobs";

declare const module:any;

storiesOf('ExpendedButton', module)
  .add('primary', () =>
    <ExpendedButton
      mode={select("Mode", ["add", "edit", "delete"], "add")}
      disabled={boolean("Disabled", false)}
      label={text("Label", "Adicionar")}
      onClick={() => {}}
    />
  );

