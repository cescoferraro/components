import React from 'react';
import {storiesOf} from '@storybook/react';
import {ExpendedB2BButton} from "../src/expandable/expandable";
import {select, text} from "@storybook/addon-knobs";


storiesOf('ExpendedB2BButton', module)
  .add('primary', () =>
    <ExpendedB2BButton
      mode={select("Mode", ["add", "edit", "delete"], "add")}
      label={text("Label", "Adicionar")}
      onClick={() => {}}
    />
  );

