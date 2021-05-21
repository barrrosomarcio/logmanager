import axios from 'axios';
import qs from 'querystring';

const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const SECRET = process.env.SECRET;
const endpoint = `http://localhost:3050/oauth/token`;


export const loginAPI = async (email, password) => {
  let formData = new FormData();
  formData.append('grant_type', 'password');
  formData.append('username', email);
  formData.append('password', password);
  // formData.append('client_id', CLIENT_ID);
  // formData.append('client_secret', SECRET);
  // formData.append('scope', 'password');
  // const body = {
  //   "grant_type": 'password',
  //   "username": email,
  //   "password": password,
  //   "client_id": CLIENT_ID,
  //   "client_secret": SECRET,
  //   "scope": "password"
  // };
  // const options = {
  //   method: 'POST',
  //   Headers: {
  //     'content-type': 'application/x-www-form-urlencoded'
  //   },
  //   data: qs.stringify(body),
  //   url: endpoint,
  // }
  // axios(options).then(res => console.log(res))var session_url = 'http://api_address/api/session_endpoint';
      const appusername = CLIENT_ID;
      const apppassword = SECRET;
      // const credentials = btoa(appusername + ':' + apppassword);
      // const basicAuth = 'Basic ' + credentials;
      // axios.post(endpoint, {
      //   auth: {
      //     'username': appusername,
      //     'password': apppassword,
      //   },
      //   headers: {  'content-type': 'multipart/form-data' },
      //   body: formData,
      // }).then(function(response) {
      //   console.log('Authenticated');
      // }).catch(function(error) {
      //   console.log('Error on Authentication');
      // });

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin:': '*', 
        },
        body: formData,
        auth: {
          'username': appusername,
          'password': apppassword,
        },
        }).then(response => {console.log(response)}).catch(error => { console.log(error)})
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