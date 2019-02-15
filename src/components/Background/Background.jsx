import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Background.module.css';

const Background = (props) => {
  const { children, color } = props;
  const classes = classNames({
    [styles.Background]: true,
    [styles['Background--primary']]: color === 'primary',
    [styles['Background--light']]: color === 'light',
    [styles['Background--dark']]: color === 'dark',
  });
  return <div className={classes}>{children}</div>;
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Background.defaultProps = {
  color: '',
};

export default Background;
