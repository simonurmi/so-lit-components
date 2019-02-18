import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Section.module.css';

const Section = (props) => {
  const {
    backgroundColor, backgroundImage, children, padding,
  } = props;
  const classes = classNames({
    [styles.Section]: true,
    [styles['Section--bg-primary']]: backgroundColor === 'primary',
    [styles['Section--bg-light']]: backgroundColor === 'light',
    [styles['Section--bg-dark']]: backgroundColor === 'dark',
    [styles['Section--bg-image']]: !!backgroundImage,
    [styles['Section--padding-1']]: padding === 1,
    [styles['Section--padding-2']]: padding === 2,
    [styles['Section--padding-3']]: padding === 3,
    [styles['Section--padding-4']]: padding === 4,
    [styles['Section--padding-5']]: padding === 5,
  });
  return (
    <div className={classes} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
};

Section.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};

Section.defaultProps = {
  backgroundColor: undefined,
  backgroundImage: undefined,
  padding: 0,
};

export default Section;
