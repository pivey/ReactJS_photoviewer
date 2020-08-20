/* eslint-disable react/display-name */
import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AlbumNumber = styled.div`
  padding: 0.5rem;
  background-color: #127aba;
  font-size: 1rem;
  color: white;
  top: 0;
  right: 0;
  position: absolute;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 100%;
  padding-top: 0.2rem;
  padding-right: 0.2rem;
`;

const StyledContainer = styled(Link)`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.025);
    cursor: pointer;
    background: bg-blue-500;
    color: white;
    ${AlbumNumber} {
      background: #90cdf4;
      color: black;
    }
  }
  position: relative;
`;

const AlbumCard = ({ albumId, title, albumClickHandler }) => (
  <StyledContainer
    to="/album"
    id={albumId}
    className="hover:bg-gray-600 bg-blue-300 p-8 pl-6 rounded-lg"
    onClick={e => albumClickHandler(e)}
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <AlbumNumber>{albumId}</AlbumNumber>
  </StyledContainer>
);

AlbumCard.propTypes = {
  albumClickHandler: PropTypes.func,
  albumId: PropTypes.number,
  title: PropTypes.string,
};

AlbumCard.defaultProps = {
  albumClickHandler: null,
  albumId: null,
  title: '',
};

export default AlbumCard;
