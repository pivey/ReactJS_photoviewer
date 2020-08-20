import axios from 'axios';

const fetchPhotos = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/photos');
  return res;
};

export default fetchPhotos;