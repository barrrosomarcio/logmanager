import axios from 'axios';
import base64 from 'base-64';

const CLIENT_ID = 'logmanager';
const SECRET = '123';
const endpoint = `http://localhost:8080`;

const loginAPI = async body => {
  const FormData = require('form-data');
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', 'teste@teste.com');
  data.append('password', '123456');

  const hash = base64.encode(`${CLIENT_ID}:${SECRET}`);
  console.log(hash);

  const config = {
    method: 'POST',
    url: `${endpoint}/oauth/token`,
    headers: {
      Authorization: `Basic ${hash}`,
      'Content-Type': 'form-data',
    },
    data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const createLogAPI = body => {
  const token = 'Bearer 924b0822-b0b6-483a-8913-5811a5473391';
  const options = {
    method: 'POST',
    url: `${endpoint}/log`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    data: body,
  };

  return axios
    .request(options)
    .then((response) => response)
    .catch((error) => error.response);
};

export { loginAPI, createLogAPI };
