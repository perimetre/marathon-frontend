import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

export type NavbarProps = {
  prependLeft?: () => React.ReactNode;
  appendRight?: () => React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ prependLeft, appendRight }) => {
  return (
    <nav className="relative flex items-stretch justify-between bg-white h-14">
      {/* Left */}
      <div className="flex items-center justify-center">
        {prependLeft}
        <p className="px-4 uppercase font-xs">
          <FormattedMessage id="title" />
        </p>
      </div>
      {/* Center, we absolute position it, because if we don't, it's never perfectly centered */}
      <div className="absolute inset-0 flex items-stretch justify-center pointer-events-none">
        <Link href="/">
          <a className="flex items-center justify-center h-full px-4 pointer-events-auto">
            <div className="relative h-full w-52">
              <Image
                src="/images/IMG_MarathonLogo.png"
                layout="fill"
                alt={'Marathon logo'}
                sizes="50vw"
                objectFit="scale-down"
              />
            </div>
          </a>
        </Link>
      </div>
      {/* Right */}
      <div className="flex items-center justify-center">{appendRight}</div>
    </nav>
  );
};

export default Navbar;
