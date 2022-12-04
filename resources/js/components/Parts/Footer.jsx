import React from 'react';

import { Grid, GridRow, Icon } from 'semantic-ui-react';

function Footer() {
  return (
    <footer>
      <Grid>
        <GridRow>
          QuizzTG - 2022
        </GridRow>
        <GridRow>
          Created with&nbsp;
          <Icon name="heart" color="red" />
          by&nbsp;
          <a
            href="https://hark.ovh"
            target="_blank"
            rel="noreferrer"
          >
            Harkhenon
          </a>
        </GridRow>
      </Grid>
    </footer>
  );
}

export default Footer;
