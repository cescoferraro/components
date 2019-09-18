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
    <B2BButton
      type={typeGEN("primary")}
      label={"CLICK ME"}
    />
  )
  .add('secondary', () =>
    <div style={{...flexer, minHeight:200}}>
      <B2BButton
        type={typeGEN("secondary")}
        label={"CLICK ME"}
        onClick={() => {
          console.log(2378324)
        }}
      />
    </div>
  );
