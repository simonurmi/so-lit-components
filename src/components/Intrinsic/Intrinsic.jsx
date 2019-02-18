import React from 'react';
import PropTypes from 'prop-types';
import styles from './Intrinsic.module.css';

const Intrinsic = (props) => {
  const { children, ratioX, ratioY } = props;
  return (
    <div className={styles.Intrinsic}>
      <div
        className={styles.Intrinsic__Padding}
        style={{ paddingTop: `${(ratioY / ratioX) * 100}%` }}
      />
      <div className={styles.Intrinsic__Item}>{children}</div>
    </div>
  );
};

Intrinsic.propTypes = {
  children: PropTypes.node.isRequired,
  ratioX: PropTypes.number.isRequired,
  ratioY: PropTypes.number.isRequired,
};

export default Intrinsic;
