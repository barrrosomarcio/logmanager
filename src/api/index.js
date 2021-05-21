import axios from 'axios';
import base64 from 'base-64';
import env from 'react-dotenv';


const CLIENT_ID = 'logmanager';
const SECRET = '123';
const endpoint = `http://localhost:3050/oauth/token`;


export const loginAPI = async (email, password) => {
  
  const FormData = require('form-data');
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', 'teste@teste.com');
  data.append('password', '123456');
  const hash = base64.encode(`${CLIENT_ID}:${SECRET}`);
  console.log(hash)
  const config = {
    method: 'post',
    url: endpoint,
    headers: { 
      'Authorization': `Basic ${hash}`, 
      'Content-Type': 'form-data',
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};
