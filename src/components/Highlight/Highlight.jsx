import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Highlight.module.css';
import Intrinsic from '../Intrinsic/Intrinsic';

const Highlight = (props) => {
  const {
    alt, callToAction, img, title, text,
  } = props;
  return (
    <div className={styles.Highlight}>
      <div className={styles.Highlight__Image}>
        <Intrinsic ratioX={16} ratioY={9}>
          <img alt={alt} src={img} />
        </Intrinsic>
      </div>
      <h3 className={styles.Highlight__Title}>{title}</h3>
      <p className={styles.Highlight__Text}>{text}</p>
      <Button>{callToAction}</Button>
    </div>
  );
};

Highlight.propTypes = {
  alt: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Highlight;
