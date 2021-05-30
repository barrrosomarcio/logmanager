import axios from 'axios';
import base64 from 'base-64';
import { getToken } from '../localStorage';

const CLIENT_ID = 'logmanager';
const SECRET = '123';
const endpoint = `http://localhost:3050`;

const loginAPI = async (email, password) => {
  const FormData = require('form-data');
  const data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', email);
  data.append('password', password);
  let success = false;
  const hash = base64.encode(`${CLIENT_ID}:${SECRET}`);
  const config = {
    method: 'POST',
    url: `${endpoint}/oauth/token`,
    headers: {
      'Content-Type': 'form-data',
      Authorization: `Basic ${hash}`,
    },
    data,
  };
  console.log('config', config)
  await axios(config)
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', JSON.stringify(response.data));
        success = true;
      }
    })
    .catch(error => {
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

const handleUrlFilter = (filterField, filterValue, page, size, sort) => {
  let url = `${endpoint}/log`;
  let exist = false;

  if (filterField && filterValue) {
    url += `?filterField=${filterField}&filterValue=${filterValue}`;
    exist = true;
  }
  if (page && exist) url += `&page=${page}`;
  if (page && !exist) {
    url += `?page=${page}`;
    exist = true;
  }
  if (size && exist) url += `&size=${size}`;
  if (size && !exist) {
    url += `?size=${size}`;
    exist = true;
  }
  if (sort && exist) url += `&sort=${sort}`;
  if (sort && !exist) {
    url += `?sort=${sort}`;
    exist = true;
  }

  return url;
};

const getFiltered = ({ filterField, filterValue, page, size, sort, sortField }) => {
  const authToken = getToken();
  const token = `Bearer ${authToken}`;
  const config = {
    method: 'GET',
    url: handleUrlFilter(filterField, filterValue, page, size, `${sortField},${sort}`),
    headers: {
      'Content-Type': 'form-data',
      Authorization: token,
    },
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
    .then(response => {
      output = response;
    })
    .catch(error => {
      output = error.response;
    });

  return output;
};

const getLogByIdApi = async id => {
  const authToken = getToken();
  const token = `Bearer ${authToken}`;
  const options = {
    method: 'GET',
    url: `${endpoint}/log/${id}`,
    headers: {
      Authorization: token,
    },
  };

  let output = [];
  await axios
    .request(options)
    .then(response => {
      output = response;
    })
    .catch(error => {
      output = error.response;
    });

  return output;
};

export { loginAPI, createLogAPI, getAllLogApi, getFiltered, getLogByIdApi };
