import React from 'react';
import {storiesOf} from '@storybook/react';
import {SearchField} from "../src/searchField/searchField";
import {text} from "@storybook/addon-knobs";

storiesOf('searchField', module)
  .add('primary', () =>
    <SearchField label={text("Label", "Pesquisar")}/>
  );
