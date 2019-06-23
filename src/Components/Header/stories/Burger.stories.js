import React from 'react';
import { storiesOf } from '@storybook/react';
import Burger from '../Burger';

export const props = {
	open: 'hamburglar is-open',
	closed: 'hamburglar is-closed',
}

storiesOf('Burger', module)
  .add('default', () => <Burger classes={props.open} />)
  .add('closed', () => <Burger classes={props.closed} />);