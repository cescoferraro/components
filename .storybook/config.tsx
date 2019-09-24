import {addDecorator, addParameters, configure} from '@storybook/react';
import React from "react"
import {withInfo} from '@storybook/addon-info';
import {withA11y} from "@storybook/addon-a11y";
import {withKnobs} from "@storybook/addon-knobs";
import "./global.css"


const req: any = require.context('../stories', true, /\.stories\.tsx$/);

addDecorator(withA11y);
addDecorator(withKnobs);


// addDecorator(withPropsTable({}));
addParameters({
  backgrounds: [
    {name: 'white', value: 'white', default: true},
    {name: 'twitter', value: '#00aced'},
    {name: 'facebook', value: '#3b5998'},
    {
      name: "grid",
      value: `url("data:image/svg+xml,%3Csvg  xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='12' height='12' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 12 0 L 0 0 0 12' fill='none' stroke='gray' stroke-width='0.5'/%3E%3C/pattern%3E%3Cpattern id='grid' width='144' height='144' patternUnits='userSpaceOnUse'%3E%3Crect width='144' height='144' fill='url(%23smallGrid)'/%3E%3Cpath d='M 144 0 L 0 0 0 144' fill='none' stroke='gray' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='144%25' height='144%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
      default: true,
    },
  ],
});

addDecorator(withInfo({
  header: false,
  inline: true,
  source: true,
}));

configure(() => { req.keys().forEach(req) }, module);
