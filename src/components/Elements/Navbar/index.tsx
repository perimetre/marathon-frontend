import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useProjectCreationProvider } from '../../Providers/ProjectCreationProvider';
import { Button } from '../../UI/Button';
import { UserIcon, XCircleSolid } from '../../UI/Icons';

export type NavbarProps = {
  goBack?: boolean;
};

export const NavBar: React.FC<NavbarProps> = ({ goBack }) => {
  const context = useProjectCreationProvider();

  const router = useRouter();

  const inProjectPage = useMemo(() => {
    return router.pathname.includes('/project/');
  }, [router]);

  return (
    <div className="bg-white border-b">
      <div className="container relative flex flex-row items-center justify-between py-4 mx-auto bg-white">
        <div className="flex">
          <h2 className="text-base font-semibold uppercase">
            <FormattedMessage id="title" />
          </h2>
        </div>
        <div className="absolute z-0 flex justify-center w-full">
          <Link href="/" passHref>
            <Image className="cursor-pointer" src="/images/logo.png" width={150} height={24} alt="logo" />
          </Link>
        </div>
        <div className="z-10 flex">
          {inProjectPage && (
            <div className="flex items-center cursor-pointer">
              <div
                className={classNames(
                  'text-gray-700 font-medium transition-colors',
                  context.unit === 'mm' && 'text-mui-primary'
                )}
              >
                MM
              </div>
              <button className="relative mx-4" onClick={() => context.setUnit(context.unit === 'mm' ? 'in' : 'mm')}>
                <div className="block h-8 bg-gray-200 rounded-full w-14"></div>
                <div
                  className={classNames(
                    'absolute left-1 top-1 bg-mui-primary w-6 h-6 rounded-full transition transform',
                    context.unit === 'in' && 'translate-x-full'
                  )}
                />
              </button>
              <div
                className={classNames(
                  'text-gray-700 font-medium transition-colors',
                  context.unit === 'in' && 'text-mui-primary'
                )}
              >
                IN
              </div>
            </div>
          )}

          {goBack ? (
            <Link href="/" passHref>
              <XCircleSolid className="cursor-pointer w-9 h-9 text-mui-primary" />
            </Link>
          ) : (
            <Link href="/login" passHref>
              <Button variant="text">
                <UserIcon className="text-mui-primary" />
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
