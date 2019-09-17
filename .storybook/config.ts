import {addDecorator, addParameters, configure} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from "@storybook/addon-a11y";
import {withKnobs} from "@storybook/addon-knobs";
import "./global.css"

const req: any = require.context('../stories', true, /\.stories\.tsx$/);

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    {name: 'white', value: 'white', default: true},
    {name: 'twitter', value: '#00aced'},
    {name: 'facebook', value: '#3b5998'},
  ],
});

addDecorator(withInfo({
  header: false,
  inline: true,
  source: true
}));

configure(() => { req.keys().forEach(req) }, module);
