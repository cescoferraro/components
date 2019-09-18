import React from 'react';
import {storiesOf} from '@storybook/react';
import {B2BButton} from '../src';
import {select} from "@storybook/addon-knobs"

export const flexer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  alignItems: "center"
};

const typeGEN = (type: string) =>
  select("Type", {primary: "primary", secondary: "secondary"}, type);

storiesOf('B2BButton', module)
  .add('primary', () =>
    <StoryPresenter>
      <B2BButton
        type={typeGEN("primary")}
        label={"CLICK ME"}
      />
    </StoryPresenter>
  )
  .add('secondary', () =>
    <StoryPresenter>
      <B2BButton
        type={typeGEN("secondary")}
        label={"CLICK ME"}
        onClick={() => {
          console.log(2378324)
        }}
      />
    </StoryPresenter>
  );


export const StoryPresenter = ({children}: { children: any }) => {
  return (
    <div style={{
      ...flexer,
      background: "url('http://www.sclance.com/pngs/grid-png-transparent/grid_png_transparent_613046.png')",
      backgroundSize: "cover",
      minHeight: 200}}>
      {children}
    </div>
  );
};
