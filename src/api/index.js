import axios from 'axios';
import base64 from 'base-64';

const CLIENT_ID = 'logmanager';
const SECRET = '123';
const endpoint = `http://localhost:3050/oauth/token`;


export const loginAPI = async (email, password) => {
  const FormData = require('form-data');
  let success = false;
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', email);
  data.append('password', password);
  const hash = base64.encode(`${CLIENT_ID}:${SECRET}`);
  const config = {
    method: 'post',
    url: endpoint,
    headers: { 
      'Authorization': `Basic ${hash}`, 
      'Content-Type': 'form-data',
    },
    data : data
  };
  await axios(config)
  .then((response) => {
    console.log(response.data);
    if (response.data.access_token !== undefined) {
      localStorage.setItem('token', JSON.stringify(response.data));
      success = true;
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
  return success;
};
