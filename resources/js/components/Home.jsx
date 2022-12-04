import React from 'react';
import { Header } from 'semantic-ui-react';

import '@sass/Home.scss';
// eslint-disable-next-line no-unused-vars
import client from '@js/axiosConfig';
import MainMenu from '@js/components/MainMenu';

function Home() {
  return (
    <main>
      <Header as="h1" textAlign="center" inverted>
        Bienvenue sur QuizzTG!
      </Header>
      <Header as="h3" textAlign="center" inverted>
        La plateforme qui vous entraîne à devenir un titulaire de tournée!
      </Header>
      <Header as="p" textAlign="center" inverted size="tiny">
        Il est conseillé d&apos;utiliser cette appli avec un ordinateur.
        En effet, il est peu aisé de taper rapidement avec un mobile.
      </Header>
      <MainMenu />
    </main>
  );
}

export default Home;
