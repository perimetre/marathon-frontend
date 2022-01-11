import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import ProjectNavbarButton from '../../UI/NavbarButton/ProjectNavbarButton';
import { customImageLoader } from '../../../lib/next';

export type NavbarProps = {
  hideLeft?: boolean;
  prependLeft?: () => React.ReactNode;
  appendRight?: () => React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ prependLeft, appendRight, hideLeft }) => {
  return (
    <nav className="relative flex items-stretch justify-between h-20 bg-white border print:hidden">
      {/* Left */}
      <div className="flex items-center justify-center">
        {prependLeft && prependLeft()}
        {!hideLeft && <ProjectNavbarButton />}
      </div>
      {/* Center, we absolute position it, because if we don't, it's never perfectly centered */}
      <div className="absolute inset-0 flex items-stretch justify-center p-2 pointer-events-none">
        <Link href="/projects">
          <a className="flex flex-col items-center justify-center h-full px-4 pointer-events-auto ">
            <div className="relative h-full w-52">
              <Image
                src="/images/IMG_MarathonLogo.png"
                layout="fill"
                alt={'Marathon logo'}
                sizes="50vw"
                loader={customImageLoader}
                unoptimized
                objectFit="scale-down"
              />
            </div>
            <p className="px-4 uppercase font-xs">
              <FormattedMessage id="title" />
            </p>
          </a>
        </Link>
      </div>
      {/* Right */}
      <div className="flex items-center justify-center">{appendRight && appendRight()}</div>
    </nav>
  );
};

export default Navbar;
