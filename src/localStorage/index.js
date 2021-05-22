const getToken = () => {
  const auth = JSON.parse(localStorage.getItem('token'));
  return auth.access_token;
}

export {
  getToken,
}
