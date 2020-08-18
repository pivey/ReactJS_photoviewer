import axios from 'axios';

const fetchUsers = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/users/');
  return res;
};

export default fetchUsers;
