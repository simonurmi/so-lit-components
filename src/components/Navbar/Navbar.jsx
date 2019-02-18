import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../Flex/Flex';
import styles from './Navbar.module.css';
import Container from '../Container/Container';

const Navbar = (props) => {
  const { items, Logo } = props;
  const logoClasses = classNames([styles.Navbar__Logo, styles.Navbar__Link]);
  return (
    <nav className={styles.Navbar}>
      <Container>
        <Flex alignItems="center">
          <a className={logoClasses} href="/">
            {Logo}
          </a>
          <ul className={styles.Navbar__List}>
            {items.map(item => (
              <li key={item.url}>
                <a className={styles.Navbar__Link} href={item.url}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  Logo: PropTypes.node.isRequired,
};

export default Navbar;
