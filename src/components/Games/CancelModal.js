import React from 'react';
import { useHistory } from 'react-router';
import {
  Container,
  Modal,
  Header,
  Icon,
  Button,
} from 'semantic-ui-react';

const CancelModal = () => {
  const history = useHistory();

  const handleStop = () => {
    history.push('/');
  };

  return (
    <Container>
      <Modal
        trigger={<Button size="massive" color="red" id="close-game">Stopper le jeu</Button>}
        size="small"
        dimmer="blurring"
      >
        <Header icon="close" content="Stopper le jeu?" />
        <Modal.Content>
          <p>
            Êtes vous certain de vouloir stopper le jeu en cours?
            Votre progression sera perdue<br />
            (Pour annuler l'action, cliquez sur la zone floutée)
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={handleStop}>
            <Icon name="checkmark" /> Oui
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
};

export default CancelModal;
