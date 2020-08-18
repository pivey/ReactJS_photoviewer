import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ heading }) => {
  return (
    <div className="bg-gray-300 h-16 rounded-lg align-middle p-2 pl-8">
      <p className="text-2xl h-full flex items-center">{heading}</p>
    </div>
  )
}

PageHeader.propTypes = {
  heading: PropTypes.string,
}

PageHeader.defaultProps = {
  heading: '',
}

export default PageHeader
