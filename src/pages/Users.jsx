import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader';
import UserCard from '../components/UserCard';
import fetchUsers from '../utils/fetchUsers';
import PageHeader from '../components/PageHeader';
import useBontouchContext from '../Hooks/useAppContext';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 10px;
`;

const Users = () => {
  const { userCards, setUserCards } = useBontouchContext();
  const refArray = userCards.map(() => React.createRef());
  const [favouriteUserCards, setFavouriteUserCards] = useState(
    JSON.parse(localStorage.getItem('favouritedCards')) || []
  );
  const saveToSessionStorage = (storeId, data) => sessionStorage.setItem(storeId, JSON.stringify(data));
  const saveToLocalStorage = (storeId, data) => localStorage.setItem(storeId, JSON.stringify(data));

  useEffect(() => {
    saveToLocalStorage('favouritedCards', favouriteUserCards);
    saveToSessionStorage('allUsers', userCards);
  }, [favouriteUserCards, userCards]);

  const clickHandler = e => {
    const selectedCard = Number(e.currentTarget.id);
    const foundFavourite = favouriteUserCards.findIndex(card => card.id === selectedCard);
    if (foundFavourite !== -1) {
      e.currentTarget.classList.remove('icon');
      const splicedFavourite = favouriteUserCards.splice(foundFavourite, 1);
      splicedFavourite[0].favourite = false;
      setUserCards(prevState => [...prevState, ...splicedFavourite]);
    } else {
      e.currentTarget.classList.add('icon');
      const found = userCards.findIndex(card => card.id === selectedCard);
      const splicedCard = userCards.splice(found, 1);
      splicedCard[0].favourite = true;
      setFavouriteUserCards(prevState => [...prevState, ...splicedCard]);
    }
  };

  const nameSplitter = name => {
    const split = name.split(' ');
    if (split.length === 3) return split[1];
    return split[0];
  };

  return (
    <>
      <PageHeader heading="Users" />
      {!userCards ? (
        <LoaderContainer>
          <PulseLoader />
        </LoaderContainer>
      ) : (
        <>
          <div className="h-20 border-b-2 border-gray-400">
            <h2 className="text-3xl h-full flex items-end">Favourites</h2>
          </div>
          <Grid className="min-h-full flex flex-wrap mt-6 mb-8">
            {favouriteUserCards.length > 0 &&
              favouriteUserCards.map(({ email, favourite, id, name }) => (
                <UserCard
                  email={email}
                  name={nameSplitter(name)}
                  key={id}
                  userId={id}
                  clickHandler={clickHandler}
                  favourite={favourite}
                />
              ))}
          </Grid>
          <div className="h-20 border-b-2 border-gray-400">
            <h2 className="text-3xl h-full flex items-end">Users</h2>
          </div>
          <Grid className="min-h-full flex flex-wrap mt-6 mb-8">
            {userCards.length > 0 &&
              userCards.map(({ email, id, name }, index) => (
                <UserCard
                  email={email}
                  key={id}
                  userId={id}
                  name={nameSplitter(name)}
                  ref={refArray[index]}
                  clickHandler={clickHandler}
                />
              ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Users;
