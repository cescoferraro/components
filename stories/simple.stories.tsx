import React from 'react';
import {storiesOf} from '@storybook/react';
import {Simple} from '../src';

storiesOf('B2BButton', module)
  .add('simple', () =>
    <Simple/>
  );
