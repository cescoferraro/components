import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {MainHeader} from '../src';

storiesOf('MainHeader', module)
  .add('default', () =>
    <MainHeader title={"Title"} subtitle={"Subtitle"}/>
  )
  .add('mobile', () =>
    <MainHeader mobile={true} title={"Title"} subtitle={"Subtitle"}/>
  )
  .add('different color', () =>
    <MainHeader title={"Title"} textColor={"red"} subtitle={"Subtitle"}/>
  );
