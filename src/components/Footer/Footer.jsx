import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Container from '../Container/Container';

const Footer = (props) => {
  const { Logo } = props;
  return (
    <footer>
      <Section backgroundColor="dark" padding={4}>
        <Container>{Logo}</Container>
      </Section>
    </footer>
  );
};

Footer.propTypes = {
  Logo: PropTypes.node.isRequired,
};

export default Footer;
