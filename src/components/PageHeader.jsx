import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ children }) => (
  <div className="bg-gray-300 h-16 rounded-lg align-middle p-2 pl-8">
    <p className="text-2xl h-full flex items-center">{children}</p>
  </div>
);

PageHeader.propTypes = {
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
};

export default PageHeader;
