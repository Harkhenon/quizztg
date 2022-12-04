import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button,
  Container,
  Form,
  Header,
  Image,
} from 'semantic-ui-react';

import Footer from '@js/components/Parts/Footer';
import '@sass/Login.scss';
import client from '@js/axiosConfig';
import caroule from '@img/caroule.gif';

function Login(props) {
  const { setCredentials } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const email = target.email.value;
    const password = target.password.value;

    client.post('/api/login', {
      email,
      password,
    })
      .then((response) => {
        const { token } = response.data.data;
        localStorage.setItem('userToken', token);
        setCredentials('harkhenon', email);
        toast.success('Sign-in OK');
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <>
      <main>
        <div className="login-form">
          <Container textAlign="center">
            <Image src={caroule} alt="Ca roule!" centered />
            <Header inverted as="h1">Sign-in</Header>
            <Header inverted as="h2">
              Please enter your email and password
            </Header>
            <Header inverted as="h5">
              Forgotten your password ?
            </Header>
            <Link to="/user/lost-password">
              Retrieve lost password
            </Link>

            <Form onSubmit={handleSubmit} inverted>
              <Form.Field>
                <label htmlFor="username">
                  E-Mail
                  <input
                    type="email"
                    name="email"
                    autoComplete="username"
                    placeholder="E-Mail"
                    id="username"
                  />
                </label>
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    title="Password"
                    placeholder="Password"
                    id="password"
                  />
                </label>
              </Form.Field>
              <div className="input-field">
                <Button>Sign In</Button>
              </div>
            </Form>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

Login.defaultProps = {
  setCredentials: null,
};

Login.propTypes = {
  setCredentials: PropTypes.func,
};

export default Login;
