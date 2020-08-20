/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';
import UserHero from '../components/UserHero';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import AlbumCard from '../components/AlbumCard';
import CardGrid from '../components/CardGrid';
import useBontouchContext from '../Hooks/useAppContext';

const User = () => {
  const {
    selectedUser,
    setSelectedUser,
    saveToLocalStorage,
    saveToSessionStorage,
    userAlbums,
    userPhotos,
  } = useBontouchContext();

  const selectedUserAlbums = userAlbums.filter(album => album.userId === selectedUser.id);
  const address = selectedUser?.address;
  const userInfo = {
    name: selectedUser?.name,
    email: selectedUser?.email,
    address: `${address?.street} ${address?.suite} ${address?.zipcode} ${address?.city}`,
  };

  const albumClickHandler = e => {
    const targetAlbumId = Number(e.currentTarget.id);
    const selectedAlbum = selectedUserAlbums.find(album => album.id === targetAlbumId);
    const selectedAlbumPhotos = userPhotos.filter(photo => photo.albumId === targetAlbumId);
    const updatedInfo = { ...selectedUser, selectedAlbumPhotos, selectedAlbum };
    setSelectedUser(updatedInfo);
  };

  useEffect(() => {
    saveToSessionStorage('userInformation', selectedUser);
    saveToLocalStorage('AllAlbums', userAlbums);
  }, [saveToLocalStorage, saveToSessionStorage, selectedUser, userAlbums, userPhotos]);

  const crumbs = [{ crumb: 'Users', path: '/' }, { crumb: selectedUser?.name }];

  return (
    <>
      <PageHeader>
        <Breadcrumbs crumbs={crumbs} />
      </PageHeader>
      <UserHero {...userInfo} />
      <SectionTitle title="Albums" />

      <CardGrid className="min-h-full flex flex-wrap mt-6 mb-8">
        {selectedUserAlbums?.length > 0 &&
          selectedUserAlbums.map(({ id, title }) => (
            <AlbumCard key={id} albumId={id} title={title} albumClickHandler={albumClickHandler} />
          ))}
      </CardGrid>
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
