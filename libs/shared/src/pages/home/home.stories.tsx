import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HomeScreen, HomeProps } from './home';

const props: HomeProps = {};

storiesOf('HomeScreen', module).add('Primary', () => <HomeScreen {...props} />);
