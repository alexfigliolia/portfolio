import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/App.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);