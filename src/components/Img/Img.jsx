import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Img.module.css';

const lazyloadImage = async (src, callback) => {
  const image = new Image();

  image.onload = () => {
    console.log('onload');
    callback();
  };

  image.src = src;
};

const Img = (props) => {
  const { alt, lazyload, src } = props;

  const [loadState, setLoadState] = useState({
    src: '',
    loaded: !lazyload,
  });

  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      console.log('??');
      setLoadState({
        src,
        loaded: true,
      });
    };

    image.src = src;
  }, [lazyload]);

  const classes = classNames({
    [styles.Img]: true,
    [styles['Img--lazyload']]: lazyload,
    [styles['Img--lazyloaded']]: loadState.loaded,
  });

  console.log(loadState.loaded);

  return <img alt={alt} className={classes} src={loadState.src} />;
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  lazyload: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

Img.defaultProps = {
  lazyload: false,
};

export default Img;
