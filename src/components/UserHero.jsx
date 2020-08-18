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

const UserHero = ({ name, email, address }) => (
  <section className="w-full flex flex-col items-center content-center">
    <div className="w-full h-full text-center font-bold text-6xl p-20 pt-32 pb-6">
      <h1>{name || 'Dennis Haroldson'}</h1>
    </div>
    <div className="w-full h-full">
      <ul className="list-none flex flex-row justify-center items-center content-center mx-auto">
        <li className="flex items-center align-center text-2xl italic">Bontouch AB</li>
        <Hyphen />
        <li className="flex items-center align-center text-2xl italic">{email || 'Dennis@gmailtogogo.com'}</li>
        <Hyphen />
        <li className="flex items-center align-center text-2xl italic">{address || '34 fryrskeppsvägen alle'}</li>
      </ul>
    </div>
  </section>
);

UserHero.propTypes = {
  address: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

UserHero.degaultProps = {
  address: '',
  email: '',
  name: '',
};

export default UserHero;
