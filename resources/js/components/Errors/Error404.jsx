import React from 'react';
import { Link } from 'react-router-dom';

import '@sass/404.scss';

function Error404() {
  return (
    <main>
      <p>Erreur 404 - La page n&apos;existe pas</p>
      <Link to="/">Retour à l&apos;accueil</Link>
    </main>
  );
}

export default Error404;
