import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, noBorder }) => (
  <div className={noBorder ? 'mt-24' : 'h-20 border-b-2 border-gray-400'}>
    <h2 className="text-3xl h-full flex items-end">{title}</h2>
  </div>
);

SectionTitle.propTypes = {
  noBorder: PropTypes.bool,
  title: PropTypes.string,
};

SectionTitle.defaultProps = {
  noBorder: PropTypes.bool,
  title: '',
};

export default SectionTitle;
