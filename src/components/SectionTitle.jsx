import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, border }) => (
  <div className={border ? 'h-20 border-b-2 border-gray-400' : 'mt-24'}>
    <h2 className="text-3xl h-full flex items-end">{title}</h2>
  </div>
);

SectionTitle.propTypes = {
  border: PropTypes.bool,
  title: PropTypes.string,
};

SectionTitle.defaultProps = {
  border: false,
  title: '',
};

export default SectionTitle;
