//https://nextgen-project.onrender.com/api/s11d2/login
// username: workintech ve password:wecandoit

import { useHistory } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { useLocalStorage } from '../hooks/useLocalStorage';

const loginUrl = 'https://nextgen-project.onrender.com/api/s11d2/login';
const history = useHistory();
export const login = async (data) => {
  debugger;
  const { response, fetchData } = await useAxios({
    method: 'POST',
    url: loginUrl,
  });
  await fetchData(data);
  const { setToken } = useLocalStorage('token', response.token);
  setToken(response.token);
  history.push('/products');
};
