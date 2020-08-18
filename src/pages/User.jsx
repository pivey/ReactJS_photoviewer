import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';

const User = ({ userId }) => (
  <>
    <PageHeader heading={userId} />
  </>
);

User.propTypes = {};

export default User;
