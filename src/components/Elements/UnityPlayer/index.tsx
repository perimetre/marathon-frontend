// Explicitly disable because we're dealing with unity objects and we don't have their type
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';

import Script from 'next/script';
import env from '../../../env';
import { useUnityPlayerContext } from '../../Providers/UnityPlayerProvider';

export type UnityPlayerRef = {
  sendMessage: (gameObjectName: string, methodName: string, value: number | string) => void;
};

export type UnityPlayerProps = {
  className?: string;
};

const UnityPlayer = forwardRef<UnityPlayerRef, UnityPlayerProps>(function UnityPlayer({ className }, ref) {
  const { hasProvider, setErrorMessage, setLoadingProgress, state, setState, unityInstance } = useUnityPlayerContext();

  if (!hasProvider) {
    throw 'Called UnityPlayer. But no UnityPlayerProvider was found. Wrap your UnityPlayer with the UnityPlayerProvider component';
  }

  const { buildName, buildUrl, loaderUrl, companyName, productName, productVersion } = useMemo(() => {
    const {
      NEXT_PUBLIC_UNITY_BUILD_NAME,
      NEXT_PUBLIC_UNITY_COMPANY_NAME,
      NEXT_PUBLIC_UNITY_PRODUCT_NAME,
      NEXT_PUBLIC_UNITY_PRODUCT_VERSION,
      NEXT_PUBLIC_UNITY_PUBLIC_FOLDER
    } = env();
    // Unity folder inside /public folder.
    const unityPublicServePath = NEXT_PUBLIC_UNITY_PUBLIC_FOLDER;
    const buildName = NEXT_PUBLIC_UNITY_BUILD_NAME;

    const buildUrl = `${unityPublicServePath}/Build`;
    const loaderUrl = `${buildUrl}/${buildName}.loader.js`;

    return {
      unityPublicServePath,
      buildName,
      buildUrl,
      loaderUrl,
      companyName: NEXT_PUBLIC_UNITY_COMPANY_NAME,
      productName: NEXT_PUBLIC_UNITY_PRODUCT_NAME,
      productVersion: NEXT_PUBLIC_UNITY_PRODUCT_VERSION
    };
  }, []);

  /*
   * Initialization
   * */
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const unityCanvas = useRef<HTMLCanvasElement>(null);

  //! This has not been converted from plain js to react yet
  // const showBanner = useCallback((msg, type) => {
  //   function updateBannerVisibility() {
  //     warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
  //   }
  //   var div = document.createElement('div');
  //   div.innerHTML = msg;
  //   warningBanner.appendChild(div);
  //   if (type == 'error') div.style = 'background: red; padding: 10px;';
  //   else {
  //     if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
  //     setTimeout(function() {
  //       warningBanner.removeChild(div);
  //       updateBannerVisibility();
  //     }, 5000);
  //   }
  //   updateBannerVisibility();
  // }, []);

  useEffect(() => {
    const setup = async () => {
      if (isScriptLoaded && unityCanvas.current && state === 'initializing') {
        // Initial unity config
        const config: any = {
          dataUrl: `${buildUrl}/${buildName}.data`,
          frameworkUrl: `${buildUrl}/${buildName}.framework.js`,
          codeUrl: `${buildUrl}/${buildName}.wasm`,
          streamingAssetsUrl: 'StreamingAssets',
          companyName,
          productName,
          productVersion
          // showBanner: unityShowBanner,
          // By default Unity keeps WebGL canvas render target size matched with
          // the DOM size of the canvas element (scaled by window.devicePixelRatio)
          // Set this to false if you want to decouple this synchronization from
          // happening inside the engine, and you would instead like to size up
          // the canvas DOM size and WebGL render target sizes yourself.
          //matchWebGLToCanvasSize: false
        };

        // Test if mobile
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          config.devicePixelRatio = 1;
        }

        unityCanvas.current.style.width = '100%';
        unityCanvas.current.style.height = '100%';

        // Let's setup unity
        try {
          // Copy the method created by the script
          const createUnityInstance = (window as any).createUnityInstance;

          setState('loading');

          // Setup
          const localUnityInstance = await createUnityInstance(unityCanvas.current, config, (progress: number) => {
            setLoadingProgress(progress);
          });

          // Store unity instance for later use
          unityInstance.current = localUnityInstance;

          setState('complete');
        } catch (error: any) {
          setState('error');
          setErrorMessage(error as string);
        }
      }
    };

    setup();
    // We really only want this to run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScriptLoaded]);

  /*
   * External ref
   * */
  useImperativeHandle(
    ref,
    () => ({
      sendMessage: (gameObjectName, methodName, value) =>
        unityInstance.current?.SendMessage(gameObjectName, methodName, value)
    }),
    [unityInstance]
  );

  return (
    <div className={classnames('w-full h-full', className)}>
      <canvas ref={unityCanvas} width={960} height={600} />
      <Script src={loaderUrl} strategy="afterInteractive" onLoad={() => setIsScriptLoaded(true)} />
    </div>
  );
});

export default UnityPlayer;
