import React from 'react';
import { Header as Text, Icon, Image } from 'semantic-ui-react';

import '@sass/Header.scss';
import UserBar from '@js/containers/Parts/UserBar';
import logolaposte from '@img/logo-la-poste.png';

function Header() {
  return (
    <>
      <header>
        <Text as="h1">
          QuizzTG - La Poste
        </Text>
        <Icon as={Image} src={logolaposte} size="tiny" alt="La Poste" centered />
      </header>
      <UserBar />
    </>
  );
}

export default Header;
