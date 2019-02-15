import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, type } = props;
  return (
    <button className={styles.Button} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

const LinkButton = (props) => {
  const { children, href } = props;
  return (
    <a className={styles.Button} href={href}>
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
export { LinkButton };
