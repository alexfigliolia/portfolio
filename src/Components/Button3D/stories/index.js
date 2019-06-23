import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button3D from '../index';

export const props = {
	text: 'Hello', 
	url: null, 
	function: () => console.log('button clicked')
}

storiesOf('Button3D', module)
  .add('default', () => <Button3D {...props} /> );