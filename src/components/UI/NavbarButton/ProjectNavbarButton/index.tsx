import React from 'react';
import NavbarButton from '../index';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Link from 'next/link';

const ProjectNavbarButton: React.FC = () => (
  <Link href="/projects">
    <a className="flex items-center justify-center h-full">
      <NavbarButton
        iconPosition="right"
        content={<FormattedMessage id="build.projectsPageNav" />}
        icon={(className) => (
          <FontAwesomeIcon icon={faBarsStaggered} className={classNames('text-2xl text-mui-primary', className)} />
        )}
      />
    </a>
  </Link>
);

export default ProjectNavbarButton;
