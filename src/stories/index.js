import React from 'react';
import 'modern-normalize/modern-normalize.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import '../index.css';

import Button from '../components/Button/Button';
import NewsList from '../components/NewsList/NewsList';
import Background from '../components/Background/Background';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => (
    <Button href="#" onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('NewsList', module).add('index', () => {
  const list = [
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
  return (
    <>
      <Background>
        <NewsList list={list} />
      </Background>
      <Background color="primary">
        <NewsList list={list} />
      </Background>
    </>
  );
});
