/* eslint-disable react/display-name */
import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled(Link)`
  &:hover {
    transform: scale(1.025);
    cursor: pointer;
    background: bg-blue-500;
    color: white;
  }
  .icon {
    fill: ${({ favourite }) => (!favourite ? 'white' : 'darkBlue')};
  }
  .icon:hover {
    fill: darkBlue;
  }
`;

const UserCard = React.forwardRef(
  ({ cardClickHandler, clickHandler, email, favourite, name, userId, username }, ref) => (
    <StyledContainer
      to={`/user/${username}`}
      className="hover:bg-gray-600 bg-blue-300 p-8 pl-6 rounded-lg"
      ref={ref}
      onClick={e => cardClickHandler(e)}
      favourite={favourite}
      id={userId}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">{name}</h3>
        <svg id={userId} onClick={e => clickHandler(e)} viewBox="0 0 20 20" className="star w-6 h-6 ml-4 icon">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div>
        <p className="text-l">Bontouch AB</p>
        <p className="text-l">{email}</p>
      </div>
    </StyledContainer>
  )
);

UserCard.propTypes = {
  cardClickHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  email: PropTypes.string,
  favourite: PropTypes.bool,
  name: PropTypes.string,
  userId: PropTypes.string,
  username: PropTypes.string,
};

UserCard.defaultProps = {
  cardClickHandler: null,
  clickHandler: null,
  email: '',
  favourite: false,
  name: '',
  userId: null,
  username: '',
};

export default UserCard;
