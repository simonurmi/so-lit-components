/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import 'modern-normalize/modern-normalize.css';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Button from '../components/Button/Button';
import NewsList from '../components/NewsList/NewsList';
import Background from '../components/Background/Background';
import Reset from '../components/Reset/Reset';
import Container from '../components/Container/Container';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module).add('with text', () => (
  <Container>
    <Background padding={1}>
      <Button>Regular</Button>
    </Background>
    <Background color="primary" padding={1}>
      <Button color="light">Light</Button>
    </Background>
  </Container>
));

const newslist = [
  {
    category: 'Uutiset',
    href: '#',
    id: 1,
    title: 'Solita avaa toimiston Göteborgiin',
  },
  {
    category: 'Uutiset',
    href: '#',
    id: 2,
    title: 'Skanska julkisti Suomen ensimmäisen digitaalisen asuntokaupan palvelun',
  },
  {
    category: 'Uutiset',
    href: '#',
    id: 3,
    title: 'Solita laajentaa Saksaan - avaa toimiston Müncheniin',
  },
];

storiesOf('NewsList', module)
  .add('Regular', () => (
    <Background>
      <NewsList list={newslist} />
    </Background>
  ))
  .add('Primary background', () => (
    <Background color="primary">
      <NewsList list={newslist} />
    </Background>
  ));

storiesOf('Background', module).add('Image', () => (
  <Background image="https://via.placeholder.com/300">
    <div style={{ height: 300 }} />
  </Background>
));

storiesOf('Reset', module).add('index', () => <Reset />);
