/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import 'modern-normalize/modern-normalize.css';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Button from '../components/Button/Button';
import NewsList from '../components/NewsList/NewsList';
import Reset from '../components/Reset/Reset';
import Container from '../components/Container/Container';
import Highlight from '../components/Highlight/Highlight';
import Flex from '../components/Flex/Flex';
import Navbar from '../components/Navbar/Navbar';
import Variables from '../components/Variables/Variables';
import Section from '../components/Section/Section';
import Footer from '../components/Footer/Footer';

const placeholder = '/placeholder.jpg';

storiesOf('Reset', module).add('index', () => <Reset />);

storiesOf('Variables', module).add('index', () => <Variables />);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module).add('with text', () => (
  <Container>
    <Section padding={1}>
      <Button>Regular</Button>
    </Section>
    <Section backgroundColor="primary" padding={1}>
      <Button color="light">Light</Button>
    </Section>
  </Container>
));

const newslist = [
  {
    category: 'Uutinen',
    href: '#',
    id: 1,
    title: 'So Lit avaa toimiston Göteborgiin',
  },
  {
    category: 'Uutinen',
    href: '#',
    id: 2,
    title: 'So Lit julkisti Suomen ensimmäisen digitaalisen asuntokaupan palvelun',
  },
  {
    category: 'Uutinen',
    href: '#',
    id: 3,
    title: 'So Lit laajentaa Saksaan - avaa toimiston Müncheniin',
  },
];

storiesOf('NewsList', module)
  .add('Regular', () => (
    <Container>
      <Section>
        <NewsList list={newslist} />
      </Section>
    </Container>
  ))
  .add('Primary background', () => (
    <Container>
      <Section backgroundColor="primary">
        <NewsList list={newslist} />
      </Section>
    </Container>
  ));

storiesOf('Section', module)
  .add('Color', () => (
    <Container>
      <Section padding={1}>Default</Section>
      <Section backgroundColor="primary" padding={1}>
        Primary
      </Section>
      <Section backgroundColor="light" padding={1}>
        Light
      </Section>
      <Section backgroundColor="dark" padding={1}>
        Dark
      </Section>
    </Container>
  ))
  .add('Image', () => (
    <Container>
      <Section backgroundImage={placeholder}>
        <div style={{ height: 300 }} />
      </Section>
    </Container>
  ));

storiesOf('Highlight', module).add('index', () => (
  <Container>
    <Section padding={4}>
      <Flex wrap>
        <Highlight
          alt="Alt text"
          callToAction="Katso avoimet työpaikat"
          img={placeholder}
          title="Avoimet työpaikat"
          text="Kerro meille unelmasi ja tule mukaan rakentamaan tulevaisuutta, jossa haluat elää. Katso kaikki So Litin avoimet työpaikat."
        />
        <Highlight
          alt="Alt text"
          callToAction="Katso avoimet työpaikat"
          img={placeholder}
          title="Avoimet työpaikat"
          text="Kerro meille unelmasi ja tule mukaan rakentamaan tulevaisuutta, jossa haluat elää. Katso kaikki So Litin avoimet työpaikat."
        />
      </Flex>
    </Section>
  </Container>
));

const Logo = (
  <>
    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
    <span aria-label="So Lit">🔥</span>
  </>
);

storiesOf('Navbar', module).add('index', () => (
  <Navbar
    items={[{ text: 'So Lit', url: '#' }, { text: 'Asiakkaat', url: '#' }]}
    Logo={Logo}
  />
));

storiesOf('Footer', module).add('index', () => (
  <Footer
    Logo={Logo}
  />
));
