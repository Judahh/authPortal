/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'; // a utility for constructing className conditionally
// eslint-disable-next-line no-unused-vars
import { Image as ImageStyle, BackgroundImage } from './styles';
function Image({ src, alt, lqip }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    const current = imgRef.current;
    if (current && current['complete']) {
      setLoaded(true);
    }
  }, []);
  return (
    <>
      <BackgroundImage alt={alt} src={lqip} />

      <ImageStyle
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx('source', loaded && 'loaded')}
      />
    </>
  );
}
export default Image;
