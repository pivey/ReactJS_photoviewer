import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Hyphen = styled.div`
  background: darkGray;
  height: 2px;
  width: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const UserHero = ({ name, email, address, albumPage, photoCount }) => {
  const liClasses = 'flex items-center align-center text-xl italic';
  return (
    <section className="w-full flex flex-col items-center content-center my-32">
      <div className="w-full h-full text-center text-6xl px-20">
        <h1 className="font-bold">{name}</h1>
        {albumPage ? (
          <p className="text-2xl italic text-center mt-8">{photoCount}</p>
        ) : (
          <ul className="list-none flex flex-row justify-center items-center content-center mx-auto mt-8">
            <li className={liClasses}>Bontouch AB</li>
            <Hyphen />
            <li className={liClasses}>{email}</li>
            <Hyphen />
            <li className={liClasses}>{address}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

UserHero.propTypes = {
  albumPage: PropTypes.bool,
  address: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  photoCount: PropTypes.string,
};

UserHero.degaultProps = {
  albumPage: false,
  address: '',
  email: '',
  name: '',
  photoCount: '',
};

export default UserHero;
