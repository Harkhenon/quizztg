import React, { useEffect } from 'react';
import {
  Header,
  Loader,
  Segment,
} from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import Countdown from 'react-countdown';

import {
  nbOfQuestionsExamen,
  nbOfAuthorizedErrors,
  totalTimeExamen,
} from '@js/resources/gamesConfig';
import client from '@js/axiosConfig';
import PlayExamForm from '@js/containers/Games/Examen/Forms/PlayExamForm';

function PlayExam(props) {
  const { gameData, storeData } = props;

  useEffect(() => {
    if (gameData.started !== true) {
      client.get('/api/rues')
        .then((r) => {
          storeData('gameData', {
            ...gameData,
            questions: _.sampleSize(r.data.data, nbOfQuestionsExamen),
            started: true,
          });
        });
    }
    return undefined;
  });

  const renderer = (time) => {
    if (time.completed === true) {
      return <Header as="h1" textAlign="center">L&apos;ets get this started!</Header>;
    }

    return <Header as="h1" textAlign="center">{time.seconds}</Header>;
  };

  const handleCompleteCountdown = () => {
    storeData('gameData', {
      ...gameData,
      start: Date.now(),
    });
    return <h1>Let&apos;s get this started!</h1>;
  };

  return (
    <Segment as="main" inverted>
      {(gameData && gameData.started === true && gameData.start === undefined)
      && (
        <Countdown
          date={Date.now() + 5000}
          renderer={renderer}
          onComplete={handleCompleteCountdown}
        />
      )}
      {(gameData !== null && gameData.started !== true)
      && <Loader active content="Chargement..." />}
      {gameData !== null && gameData.started === true && gameData.start !== undefined
      && (
        <PlayExamForm
          nbOfAuthorizedErrors={nbOfAuthorizedErrors}
          totalTimeExamen={totalTimeExamen}
        />
      )}
    </Segment>
  );
}

PlayExam.defaultProps = {
  gameData: PropTypes.shape({
    play: false,
  }),
  storeData: null,
};

PlayExam.propTypes = {
  gameData: PropTypes.shape({
    play: PropTypes.bool,
    started: PropTypes.bool,
    start: PropTypes.number,
  }),
  storeData: PropTypes.func,
};

export default PlayExam;
