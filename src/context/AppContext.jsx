import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchUsers from '../utils/fetchUsers';

const BontouchContext = React.createContext();

const BontouchContextProvider = ({ children }) => {
  const [userCards, setUserCards] = useState(JSON.parse(sessionStorage.getItem('allUsers')) || []);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('allUsers')).length === 0) {
      fetchUsers().then(res => {
        setUserCards(res.data);
      });
    }
  }, []);

  const nameSplitter = name => {
    const split = name?.split(' ');
    if (split?.length === 3) return split[1];
    return split[0];
  };

  userCards.map(card => (card.name = nameSplitter(card.name)));
  const username = selectedUser?.name;

  const values = {
    username,
    selectedUser,
    userCards,
  };

  const methods = {
    setSelectedUser,
    setUserCards,
  };

  return <BontouchContext.Provider value={{ ...values, ...methods }}>{children}</BontouchContext.Provider>;
};
BontouchContextProvider.propTypes = {
  children: PropTypes.node,
};

BontouchContextProvider.defaultProps = {
  children: null,
};

export { BontouchContext, BontouchContextProvider };