import React from 'react';
import classnames from 'classnames';

type SpinnerProps = { className?: string };

const Spinner: React.FC<SpinnerProps> = ({ className }) => <span className={classnames('mui-spinner', className)} />;

export default Spinner;
