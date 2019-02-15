import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Background.module.css';

const Background = (props) => {
  const {
    children, color, image, padding,
  } = props;
  const classes = classNames({
    [styles.Background]: true,
    [styles['Background--primary']]: color === 'primary',
    [styles['Background--light']]: color === 'light',
    [styles['Background--dark']]: color === 'dark',
    [styles['Background--image']]: !!image,
    [styles['Background--padding-1']]: padding === 1,
  });
  return (
    <div className={classes} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
  padding: PropTypes.number,
};

Background.defaultProps = {
  color: null,
  image: null,
  padding: null,
};

export default Background;
