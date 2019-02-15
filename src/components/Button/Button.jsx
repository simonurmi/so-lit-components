import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, color, type } = props;
  const classes = classNames({
    [styles.Button]: true,
    [styles['Button--light']]: color === 'light',
  });
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'dark',
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
