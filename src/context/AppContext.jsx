import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchUsers from '../utils/fetchUsers';

const BontouchContext = React.createContext();

const BontouchContextProvider = ({ children }) => {
  const [userCards, setUserCards] = useState(JSON.parse(sessionStorage.getItem('allUsers')) || []);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('allUsers')).length === 0) {
      fetchUsers().then(res => {
        setUserCards(res.data);
      });
    }
  }, []);

  const values = {
    userCards,
  };

  const methods = {
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
