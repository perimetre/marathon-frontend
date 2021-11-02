import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';

type SkeletonImageProps = ImageProps & {
  alt: string; // Never make "alt" optional.
};

const SkeletonImage: React.FC<SkeletonImageProps> = ({ className, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      onLoadingComplete={() => setImageLoaded(true)}
      className={classNames({ 'mui-skeleton': !imageLoaded, 'opacity-0 animate-fade-in': imageLoaded }, className)}
    />
  );
};

export default SkeletonImage;
