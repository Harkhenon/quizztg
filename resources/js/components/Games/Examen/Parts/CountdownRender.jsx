import React from 'react';
import PropTypes from 'prop-types';

function CountdownRender(hours, minutes, seconds, complete) {
  return (
    <div>
      {hours}
      {minutes}
      {seconds}
      {complete}
    </div>
  );
}

CountdownRender.propTypes = {

};

export default CountdownRender;
