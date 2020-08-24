import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../utils/fetchData';
import pathnames from '../constants';

const { albumPath, photoPath, userPath } = pathnames;

const BontouchContext = React.createContext();

const BontouchContextProvider = ({ children }) => {
  const [userCards, setUserCards] = useState(JSON.parse(sessionStorage.getItem('allUsers')) || []);
  const [userAlbums, setUserAlbums] = useState(JSON.parse(sessionStorage.getItem('allAlbums')) || []);
  const [userPhotos, setUserPhotos] = useState(JSON.parse(sessionStorage.getItem('AllPhotos')) || []);
  const [selectedUser, setSelectedUser] = useState(JSON.parse(sessionStorage.getItem('userInformation')) || {});
  const checkSessionStorage = itemName =>
    JSON.parse(sessionStorage.getItem(itemName))?.length === 0 || JSON.parse(sessionStorage.getItem(itemName)) === null;

  useEffect(() => {
    if (checkSessionStorage('allUsers')) {
      fetchData(userPath)
        .then(res => {
          setUserCards(res.data);
        })
        .catch(err => console.log(err));
    }
    if (checkSessionStorage('allAlbums')) {
      fetchData(albumPath)
        .then(res => {
          setUserAlbums(res.data);
        })
        .catch(err => console.log(err));
    }
    if (checkSessionStorage('AllPhotos')) {
      fetchData(photoPath)
        .then(res => {
          setUserPhotos(res.data);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const nameSplitter = name => {
    const split = name?.split(' ');
    if (split?.length === 3) return split[1];
    return split[0];
  };

  userCards.map(card => (card.name = nameSplitter(card.name)));

  const saveToLocalStorage = (storeId, data) => localStorage.setItem(storeId, JSON.stringify(data));
  const saveToSessionStorage = (storeId, data) => sessionStorage.setItem(storeId, JSON.stringify(data));

  const values = {
    userAlbums,
    userPhotos,
    selectedUser,
    userCards,
  };

  const methods = {
    setUserAlbums,
    setUserPhotos,
    saveToLocalStorage,
    saveToSessionStorage,
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
