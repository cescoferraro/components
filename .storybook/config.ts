import {addDecorator, addParameters, configure} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from "@storybook/addon-a11y";
import {withKnobs} from "@storybook/addon-knobs";
// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);

import "./global.css"
function loadStories() {
  req.keys().forEach(req);
}
//
addDecorator(withA11y)
addDecorator(withKnobs)

addParameters({
  backgrounds: [
    {name: 'white', value: 'white', default: true},
    {name: 'twitter', value: '#00aced'},
    {name: 'facebook', value: '#3b5998'},
  ],
})
//
addDecorator(withInfo({
  header: false,
  inline: true,
  source: true
}));

configure(loadStories, module);
