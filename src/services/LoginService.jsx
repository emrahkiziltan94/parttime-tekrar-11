//https://nextgen-project.onrender.com/api/s11d2/login
// username: workintech ve password:wecandoit

import axios from 'axios';



export const login = async (data) => {

  return await axios.post('https://nextgen-project.onrender.com/api/s11d2/login', data);

};
