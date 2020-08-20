import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Breadcrumb = styled(Link)`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-decoration: underline;
  color: blue;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

const Breadcrumbs = ({ crumbs }) => (
  <>
    {crumbs.map(({ crumb, path }) => {
      if (crumb && path) {
        return (
          <>
            <Breadcrumb to={path}>{crumb}</Breadcrumb>
            <span className="mr-2">/</span>
          </>
        );
      }
      return <span>{crumb}</span>;
    })}
  </>
);

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array.isRequired,
};

export default Breadcrumbs;
