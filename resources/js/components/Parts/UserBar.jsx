import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function UserBar(props) {
  const { username, email } = props;

  return (
    <aside id="user-bar">
      <span>{username}</span>
      <span>{email}</span>
      <Popup
        content="Log out"
        trigger={
          <Button icon="log out" as={Link} to="/user/logout" />
          }
      />
    </aside>
  );
}

UserBar.defaultProps = {
  email: null,
  username: null,
};

UserBar.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
};

export default UserBar;
