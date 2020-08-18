/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';
import UserHero from '../components/UserHero';
import SectionTitle from '../components/SectionTitle';
import useBontouchContext from '../Hooks/useAppContext';

const Breadcrumb = styled(Link)`
  margin-right: 0.5rem;
  text-decoration: underline;
  color: blue;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

const User = ({ userId }) => {
  const { selectedUser, saveToLocalStorage } = useBontouchContext();
  const address = selectedUser?.address;
  const userInfo = {
    name: selectedUser?.name,
    email: selectedUser?.email,
    address: `${address.street} ${address.suite} ${address.zipcode} ${address.city}`,
  };

  useEffect(() => {
    saveToLocalStorage('userInformation', selectedUser);
  }, [saveToLocalStorage, selectedUser]);

  return (
    <>
      <PageHeader>
        <Breadcrumb to="/">Users </Breadcrumb> / {userId}
      </PageHeader>
      <UserHero {...userInfo} />
      <SectionTitle noBorder title="Albums" />
    </>
  );
};

User.propTypes = {
  userId: PropTypes.string,
};

User.defaultProps = {
  userId: '',
};

export default User;
