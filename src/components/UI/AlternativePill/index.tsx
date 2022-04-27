import React from 'react';
import { FormattedMessage } from 'react-intl';

const AlternativePill: React.FC = () => (
  <span className="px-2 py-1 ml-2 text-xs font-normal bg-gray-200 rounded-full text-slate-500">
    <FormattedMessage id="common.alternative" />
  </span>
);

export default AlternativePill;
