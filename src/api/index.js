import axios from 'axios';
import base64 from 'base-64';
import { getToken } from '../localStorage';

const CLIENT_ID = 'logmanager';
const SECRET = '123';
const endpoint = `http://localhost:3050`;

const loginAPI = async (email, password) => {
  const FormData = require('form-data');
  let success = false;
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', email);
  data.append('password', password);
  const hash = base64.encode(`${CLIENT_ID}:${SECRET}`);
  const config = {
    method: 'POST',
    url: `${endpoint}/oauth/token`,
    headers: {
      Authorization: `Basic ${hash}`,
      'Content-Type': 'form-data',
    },
    data,
  };

  await axios(config)
    .then(response => {
      console.log(response.data);
      if (response.data.access_token !== undefined) {
        localStorage.setItem('token', JSON.stringify(response.data));
        success = true;
      }
    })
    .catch(error => {
      console.log(error);
    });

  return success;
};

const createLogAPI = body => {
  const authToken = getToken();
  const token = `Bearer ${authToken}`;
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
    .then(response => response)
    .catch(error => error.response);
};

const getFiltered = (filterField, filterValue, page, size, sort) => {
  const FormData = require('form-data');
  const data = new FormData();
  data.append('size', size);
  data.append('page', page);
  if (filterField !== '') {
    data.append('filterfield', filterField);
    data.append('filterValue', filterValue);
  }
  console.log('body', size)
  const authToken = getToken();
  const token = `Bearer ${authToken}`;
  const config = {
    method: 'GET',
    url: `${endpoint}/log`,
    headers: {
      'Content-Type': 'form-data',
      Authorization: token,
    },
    data,
  };

  return axios(config)
    .then(response => response)
    .catch(error => error.response);
};

const getAllLogApi = async () => {
  const authToken = getToken();
  const token = `Bearer ${authToken}`;
  const options = {
    method: 'GET',
    url: `${endpoint}/log`,
    headers: {
      Authorization: token,
    },
  };

  let output = [];
  await axios
    .request(options)
    .then((response) => {output = response})
    .catch((error) => { output = error.response});

  return output;
};

export { loginAPI, createLogAPI, getAllLogApi, getFiltered };
