const getToken = () => {
  const auth = JSON.parse(localStorage.getItem('token'));
  return auth.access_token;
}
const setToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
}

export {
  getToken,
  setToken,
}
