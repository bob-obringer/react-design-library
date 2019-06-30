import { addParameters, configure } from '@storybook/react';
import theme from './theme';

addParameters({
  options: {
    name: "React Design Library",
    description: "@bobringer React Design Library",
    theme
  },
  backgrounds: [
    { name: 'white', value: '#FFFFFF', default: true },
    { name: 'fog', value: '#E9E9E9' },
    { name: 'slate', value: '#999999' },
    { name: 'purple', value: '#4F0099' },
    { name: 'black', value: '#000000' },
  ]
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);
