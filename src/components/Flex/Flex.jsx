import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Flex.module.css';

const Flex = (props) => {
  const { alignItems, children, wrap } = props;
  const classes = classNames({
    [styles.Flex]: true,
    [styles['Flex--alignItemsCenter']]: alignItems === 'center',
    [styles['Flex--wrap']]: wrap || wrap === 'wrap',
  });
  return <div className={classes}>{children}</div>;
};

Flex.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
  wrap: PropTypes.oneOf([true, false, 'wrap', 'wrap-reverse']),
};

Flex.defaultProps = {
  alignItems: null,
  wrap: false,
};

export default Flex;
