import React from 'react';
import { Link } from 'react-router-dom';

import HSBreadcrumb from '@js/components/Parts/HSBreadcrumb';
import {
  ButtonGroup,
  Header,
  Icon,
  Button,
  Segment,
} from 'semantic-ui-react';

function Games() {
  return (
    <main>
      <HSBreadcrumb />
      <Header inverted as="h1" textAlign="center">
        Bienvenue sur votre espace de jeux!
      </Header>
      <Header as="h2" textAlign="center" inverted>
        En cliquant sur l&apos;un des boutons,
        vous retrouverez les règles inhérantes au jeu en question.
      </Header>
      <Header as={Segment} textAlign="center" inverted color="blue" icon>
        <Icon name="info circle" />
        Lors du déroulement des jeux, la souris n&apos;est pas nécessaire.
        <br />
        Ceux-ci ont été conçus pour pouvoir répondre facilement et rapidement
        <br />
        aux questions en donnant automatiquement le focus aux champs de réponse.
      </Header>
      <Header as="h4" textAlign="center" inverted>
        Faites vos jeux!
        (Passe ta souris sur les boutons pour voir ce qui t&apos;attends... 😈)
      </Header>
      <ButtonGroup widths={4} size="massive">
        <Button color="yellow" animated="fade" as={Link} to="/games/examen">
          <Button.Content visible>
            Examen
          </Button.Content>
          <Button.Content hidden>
            Conditions réelles (200 questions, 10 minutes)
          </Button.Content>
        </Button>
        <Button animated="fade">
          <Button.Content visible>
            Par équipe
          </Button.Content>
          <Button.Content hidden>
            Choisis ton camp, camarade! 💪
          </Button.Content>
        </Button>
        <Button color="orange" animated="fade">
          <Button.Content visible>
            Time Attack
          </Button.Content>
          <Button.Content hidden>
            Un max de réponses en 10 minutes... 😱
          </Button.Content>
        </Button>
        <Button color="red" animated="fade">
          <Button.Content visible>
            Quinte Flush Royale
          </Button.Content>
          <Button.Content hidden>
            La totalité des rues, pas de temps 💀
          </Button.Content>
        </Button>
      </ButtonGroup>
    </main>
  );
}

export default Games;
