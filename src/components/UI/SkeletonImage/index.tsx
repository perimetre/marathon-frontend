import React, { useEffect, useRef, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';

type SkeletonImageProps = ImageProps & {
  alt: string; // Never make "alt" optional.
};

const SkeletonImage: React.FC<SkeletonImageProps> = ({ className, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const mountRef = useRef<boolean | null>(null);

  useEffect(() => {
    mountRef.current = true;

    return () => {
      mountRef.current = false;
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      onLoadingComplete={() => {
        if (mountRef.current) setImageLoaded(true);
      }}
      className={classNames({ 'mui-skeleton': !imageLoaded }, className)}
    />
  );
};

export default SkeletonImage;
