import React, { useEffect, useRef, useState } from 'react';
import { useUnityPlayerContext } from '../../../Providers/UnityPlayerProvider';
import { CenterContent } from '../../../Templates/Project/Planner/styles';
import classNames from 'classnames';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import Spinner from '../../../UI/Spinner';
import ProgressBar from '../../../UI/ProgressBar';
import { customImageLoader } from '../../../../lib/next';

const LoadingState: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { loadingProgress } = useUnityPlayerContext();
  const mountRef = useRef<boolean | null>(null);

  useEffect(() => {
    mountRef.current = true;

    return () => {
      mountRef.current = false;
    };
  }, []);

  return (
    <CenterContent
      className={classNames({
        'opacity-0 animate-fade-in': loadingProgress < 1, // Animate in when progress starts
        'animate-fade-out': loadingProgress >= 1 // Fade out when loading is finished
      })}
    >
      <div
        className={classNames('h-28 w-28 relative translate-y-2 opacity-0', {
          'animate-fade-into': imageLoaded // Animate up when image gets loaded
        })}
      >
        <Image
          layout="fill"
          src="/images/logo.webp"
          alt={'marathon'}
          sizes="25vw"
          objectFit="cover"
          loader={customImageLoader}
          unoptimized
          onLoadingComplete={() => {
            if (mountRef.current) setImageLoaded(true);
          }}
        />
      </div>
      <div className="flex items-center justify-center my-6 gap-4">
        <p className="text-2xl font-semibold uppercase text-mui-dark">
          <FormattedMessage id="title" />
        </p>
        <Spinner className="w-6 h-6" />
      </div>
      <ProgressBar color="mui-color-mui-dark" className="max-w-xs" progress={loadingProgress * 100} />
    </CenterContent>
  );
};

export default LoadingState;
