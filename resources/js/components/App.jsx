/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import useJWTTool from '@js/hooks/useJWTTool';

// Containers
import Header from '@js/containers/Parts/Header';
import Home from '@js/containers/Home';

// "Simple" Modules
import Footer from '@js/components/Parts/Footer';
import Error404 from '@js/components/Errors/Error404';
import Logout from '@js/components/AppRouter/Logout';
import client from '@js/axiosConfig';
import Games from '@js/components/Games';
import Examen from '@js/components/Games/Examen';
import PlayExam from '@js/containers/Games/Examen/PlayExam';
import Login from '@js/containers/AppRouter/Login';

import '@sass/AppRouter.scss';
import { toast } from 'react-toastify';

function App(props) {
  const {
    username,
    email,
    setCredentials,
  } = props;

  const userToken = localStorage.getItem('userToken');
  const navigate = useNavigate();
  const JWTTool = useJWTTool(userToken);
  let tokenIsOk = true;

  if (userToken === null) {
    tokenIsOk = false;
  }

  if (tokenIsOk === true && JWTTool.isValid() === false) {
    toast.warning('Token malformed, try to re-connect');
    tokenIsOk = false;
  }

  if (tokenIsOk === true && JWTTool.isExpired()) {
    toast.warning('Your session is expired, please reconnect');
    tokenIsOk = false;
  }

  useEffect(() => {
    if (tokenIsOk === true && username === null && email === null) {
      client.get(`/api/user/${JWTTool.getSubject()}`)
        .then((response) => {
          const { name: userUsername, email: userEmail } = response.data.data;
          setCredentials(userUsername, userEmail);
        })
        .catch(() => {
          navigate('/login');
        });
    }
  });

  if (tokenIsOk !== false) {
    return (
      <>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />
            <Route path="/games/examen/play" element={<PlayExam />} />
            <Route path="/games/examen" element={<Examen />} />
            <Route path="/games" element={<Games />} />
            <Route path="*" exact element={<Error404 />} />
          </Routes>
        </Container>
        <Footer />
      </>
    );
  }

  return <Login />;
}

App.defaultProps = {
  email: null,
  quizzData: null,
  setCredentials: null,
  username: null,
};

App.propTypes = {
  email: PropTypes.string,
  quizzData: PropTypes.shape({
    etablissement: PropTypes.node,
  }),
  setCredentials: PropTypes.func,
  username: PropTypes.string,
};

export default App;
