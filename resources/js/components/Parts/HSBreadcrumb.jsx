import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

import '@sass/HSBreadcrumb.scss';

function HSBreadcrumb() {
  const location = useLocation();

  const locationArray = () => {
    const path = location.pathname;
    const urlArray = path.split('/');
    const numberOfEntries = urlArray.length;

    if (numberOfEntries === 1 && urlArray[0] === '') {
      return null;
    }
    if (urlArray[0] === '') {
      urlArray.shift();
    }
    if (numberOfEntries > 2 && urlArray[numberOfEntries - 1] === '') {
      urlArray.pop();
    }
    return urlArray;
  };

  const constructLinks = (urlArray) => {
    let uris = '';
    const links = [];
    // eslint-disable-next-line array-callback-return
    urlArray.map((e, i) => {
      if (i > 0) {
        for (let j = 0; j <= i; j += 1) {
          uris += `/${urlArray[j]}`;
        }
      } else {
        uris += `/${e}`;
      }
      const obj = {
        name: e,
        uri: `${uris}`,
      };
      links.push(obj);
      uris = '';
    });

    return links;
  };

  const constructBreadcrumb = (uris) => uris.map((e, i) => ((
    <React.Fragment key={e.name}>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section
        key={e.name}
        link={(uris[i + 1]) !== undefined}
        as={(uris[i + 1]) !== undefined ? Link : null}
        to={(uris[i + 1]) !== undefined ? e.uri : null}
      >
        {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
      </Breadcrumb.Section>
    </React.Fragment>
  )));

  return (
    <Breadcrumb>
      <Breadcrumb.Section link as={Link} to="/">
        Home
      </Breadcrumb.Section>
      {constructBreadcrumb(constructLinks(locationArray()))}
    </Breadcrumb>
  );
}

export default HSBreadcrumb;
