import React from 'react';
import {storiesOf} from '@storybook/react';
import {ExpendedB2BButton} from "../src/searchField/searchField";
import {text} from "@storybook/addon-knobs";

storiesOf('searchField', module)
  .add('primary', () =>
  <ExpendedB2BButton
  label={text("Label", "Pesquisar")}
  />
  );
