function Logout() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('userId');
  window.location.replace('/');
}

export default Logout;
