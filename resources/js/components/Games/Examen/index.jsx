import React from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Rules from '@js/components/Games/Examen/Rules';
import HSBreadcrumb from '@js/components/Parts/HSBreadcrumb';

function Examen() {
  return (
    <Segment as="main" inverted>
      <HSBreadcrumb />
      <Header as="h1" textAlign="center">
        Examen du Tri Général
      </Header>
      <Rules />
      <Header as="h2" textAlign="center">
        Prêt à en découdre? Alors clique sur le bouton &quot;Start&quot; !
      </Header>
      <Button
        color="green"
        size="massive"
        fluid
        as={Link}
        to="/games/examen/play"
      >
        Start
      </Button>
    </Segment>
  );
}

export default Examen;
