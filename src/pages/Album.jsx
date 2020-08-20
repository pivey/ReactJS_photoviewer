/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import UserHero from '../components/UserHero';
import useBontouchContext from '../Hooks/useAppContext';

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: background-color 0.2s linear;
  &.wrapperSelected {
    background-color: rgb(0, 0, 0, 0.6);
    position: fixed;
    padding: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 998;
  }
`;

const PhotoCard = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background: mistyrose;
  min-height: 200px;
  &:hover:not(.selectedPhoto) {
    transform: scale(1.025);
    cursor: pointer;
    font-weight: bold;
  }
  transition: all 0.3s ease;
  transition: margin-top 0s;
  &.selectedPhoto {
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 600px;
    margin-top: calc(calc(100vh - 600px) / 2);
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  height: 100%;
  width: 100%;
`;

const ModalStyles = createGlobalStyle`
html, body {
  overflow: ${({ modalOpen }) => (modalOpen ? 'hidden' : 'scroll')}
}
`;

const CloseHolder = styled.div`
  position: fixed;
  top: 8rem;
  right: 8rem;
  z-index: 999;
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')};
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Album = () => {
  const photoGridRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { selectedUser, saveToLocalStorage, saveToSessionStorage, userPhotos } = useBontouchContext();
  const albumPhotos = selectedUser?.selectedAlbumPhotos;
  const userInfo = {
    name: selectedUser?.selectedAlbum?.title,
    photoCount: `${selectedUser?.selectedAlbumPhotos.length} photos`,
  };

  const handleViewPhoto = e => {
    e.currentTarget.classList.add('wrapperSelected');
    e.currentTarget.children[0].classList.add('selectedPhoto');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    const photosInGrid = [...photoGridRef?.current?.children];
    photosInGrid.map(photo => {
      if (photo.classList.contains('wrapperSelected')) {
        photo.children[0].classList.remove('selectedPhoto');
        return photo.classList.remove('wrapperSelected');
      }
    });
    setModalOpen(false);
  };

  useEffect(() => {
    saveToLocalStorage('AllPhotos', userPhotos);
  }, [saveToLocalStorage, saveToSessionStorage, selectedUser, userPhotos]);

  const crumbs = [
    { crumb: 'Users', path: '/' },
    { crumb: selectedUser?.name, path: '/user' },
    { crumb: userInfo?.name },
  ];

  return (
    <>
      <ModalStyles modalOpen={modalOpen} />
      <CloseHolder modalOpen={modalOpen}>
        <svg onClick={e => handleCloseModal(e)} viewBox="0 0 20 20" fill="white" className="x-circle w-20 h-20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </CloseHolder>
      <PageHeader>
        <Breadcrumbs crumbs={crumbs} />
      </PageHeader>
      <UserHero albumPage {...userInfo} />
      <PhotoGrid ref={photoGridRef}>
        {albumPhotos.map(({ url }) => (
          <CardWrapper onClick={e => handleViewPhoto(e)}>
            <PhotoCard src={url} />
          </CardWrapper>
        ))}
      </PhotoGrid>
    </>
  );
};

Album.propTypes = {
  userId: PropTypes.string,
};

Album.defaultProps = {
  userId: '',
};

export default Album;
