import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <nav id="main-nav">
      <Button
        className="main-button"
        color="orange"
        as={Link}
        to="/games"
      >
        Accéder au jeux
      </Button>
    </nav>
  );
}

export default MainMenu;
