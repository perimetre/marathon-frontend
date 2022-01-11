import React from 'react';
import classNames from 'classnames';

type SpinnerProps = { className?: string };

const Spinner: React.FC<SpinnerProps> = ({ className }) => <span className={classNames('mui-spinner', className)} />;

export default Spinner;
