import axios from 'axios';
import qs from 'querystring';
import base64 from 'base-64';


const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const SECRET = process.env.SECRET;
const endpoint = `http://localhost:3050/oauth/token`;


export const loginAPI = async (email, password) => {
  
  const FormData = require('form-data');
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', 'teste@teste.com');
  data.append('password', '123456');

  const config = {
    method: 'post',
    url: 'http://localhost:3050/oauth/token',
    headers: { 
      'Authorization': 'Basic bG9nbWFuYWdlcjoxMjM=', 
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

// let formData = new FormData();
// formData.append('grant_type', 'password');
// formData.append('username', 'MyUserNameSettedInApi');
// formData.append('password', 'PasswordSettedInApi');
// formData.append('client_id', 'MyClientId');
// formData.append('client_secret', 'MyClientSecret');
// formData.append('scope', 'read Write');

// fetch(endpoint, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: formData
// })
// .then((response) => response.json())
// .then((responseData) => {
//     console.log(responseData);
// });