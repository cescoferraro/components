import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {B2BMainText} from '../src';
import {StoryPresenter} from "./Button/index.stories";

storiesOf('MainHeader', module)
  .add('default', () =>
    <StoryPresenter>
      <B2BMainText title={"Title"} subtitle={"Subtitle"}/>
    </StoryPresenter>
  )
  .add('mobile', () =>
    <StoryPresenter>
      <B2BMainText mobile={true} title={"Title"} subtitle={"Subtitle"}/>
    </StoryPresenter>
  )
  .add('different color', () =>
    <StoryPresenter>
      <B2BMainText title={"Title"} textColor={"red"} subtitle={"Subtitle"}/>
    </StoryPresenter>
  );
