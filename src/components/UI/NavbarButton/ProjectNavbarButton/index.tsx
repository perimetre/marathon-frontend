import React from 'react';
import NavbarButton from '../index';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Link from 'next/link';
import { List } from 'react-feather';

const ProjectNavbarButton: React.FC = () => (
  <Link href="/projects">
    <a className="flex items-center justify-center h-full">
      <NavbarButton iconPosition="right" icon={<List className={classNames('text-2xl text-mui-primary')} />}>
        <FormattedMessage id="build.projectsPageNav" />
      </NavbarButton>
    </a>
  </Link>
);

export default ProjectNavbarButton;
