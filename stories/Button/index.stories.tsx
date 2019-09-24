import React from 'react';
import {storiesOf} from '@storybook/react';
import {B2BButton} from '../../src';
import {select} from "@storybook/addon-knobs"
import {flexer} from "../../src/flexer";
import {UserCardListItem} from "../../src/card/usercard";

const typeGEN = (type: string) =>
  select("Type", {primary: "primary", secondary: "secondary"}, type);

storiesOf('B2BButton', module)
  .add('primary', () =>
      <B2BButton
        type={typeGEN("primary")}
        label={"CLICK ME"}
      />
  )
  .add('secondary', () =>
      <B2BButton
        type={typeGEN("secondary")}
        label={"CLICK ME"}
        onClick={() => {
          console.log(2378324)
        }}
      />
  );


export const StoryPresenter = ({children}: { children: any }) => {
  return (
    <div style={{
      ...flexer,
      // background: "url('http://www.sclance.com/pngs/grid-png-transparent/grid_png_transparent_613046.png')",
      // backgroundSize: "cover",
      minHeight: 200
    }}>
      {children}
    </div>
  );
};
