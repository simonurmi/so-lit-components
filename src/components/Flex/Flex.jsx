import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Flex.module.css';

const Flex = (props) => {
  const { alignItems, children } = props;
  const classes = classNames({
    [styles.Flex]: true,
    [styles['Flex--alignItemsCenter']]: alignItems === 'center',
  });
  return <div className={classes}>{children}</div>;
};

Flex.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Flex.defaultProps = {
  alignItems: null,
};

export default Flex;
