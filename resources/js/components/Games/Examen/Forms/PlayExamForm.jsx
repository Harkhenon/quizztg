/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Button,
  Table,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PlayExamBaseForm from '@js/components/Games/Examen/Forms/PlayExamBaseForm';
import DisplayErrors from '@js/components/Games/Examen/Parts/DisplayErrors';

function PlayExamForm(props) {
  const {
    gameData,
    controlFormInput,
    inputs,
    storeData,
    nbOfAuthorizedErrors,
    totalTimeExamen,
  } = props;

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    controlFormInput(name, value, 10);
  };

  const handleSubmit = () => {
    storeData('gameData', (() => {
      if (gameData.answers === undefined || gameData.answers.length === undefined) {
        return {
          ...gameData,
          answers: [
            [`52${inputs.answer}`],
          ],
        };
      }
      return {
        ...gameData,
        answers: [
          ...gameData.answers,
          `52${inputs.answer}`,
        ],
      };
    })());
    controlFormInput('answer', '');
  };

  const handleReturn = () => {
    storeData('gameData', undefined);
  };

  const constructForm = () => {
    if (gameData.answers.length === undefined) {
      const question = gameData.questions[0];
      return (
        <PlayExamBaseForm
          question={question}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={inputs}
        />
      );
    }

    if (
      gameData.answers !== undefined
      && gameData.answers.length < gameData.questions.length
    ) {
      const nextQuestion = gameData.answers.length;
      const { questions } = gameData;
      return (
        <PlayExamBaseForm
          question={questions[nextQuestion]}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={inputs}
        />
      );
    }

    const examenErrors = () => {
      let errors = [];
      gameData.questions.forEach((e, i) => {
        if (parseInt(gameData.answers[i], 10) !== e.tournees_number) {
          errors.push({
            street: e.fullStreetName,
            number: e.tournees_number,
            answer: gameData.answers[i],
          });
        }
      });

      return errors;
    };

    const timeElapsed = new Date(Date.now() - gameData.start);
    const errors = examenErrors();

    return (
      <>
        <Header as="h1" textAlign="center" inverted>
          Test passé en
          {timeElapsed !== 0 ? ` ${timeElapsed.getMinutes()} minutes ${timeElapsed.getSeconds()} secondes` : 0}
        </Header>
        {(
          timeElapsed.getMinutes() < new Date(totalTimeExamen).getMinutes()
          && errors.length <= nbOfAuthorizedErrors
        )
        && (
          <>
            <Header as="h2" textAlign="center" inverted>
              Bravo! Examen réussi!
            </Header>
            <Header as="h3" textAlign="center" inverted>
              {`Tu as fait ${errors.length} fautes`}
            </Header>
            <DisplayErrors errors={errors} />
          </>
        )}
        {(
          timeElapsed.getMinutes() > new Date(totalTimeExamen).getMinutes()
          || errors.length > nbOfAuthorizedErrors
        )
        && (
          <>
            <Header as="h2" textAlign="center" inverted>
              Dommage! Ce sera pour une prochaine fois!
            </Header>
            <Header as="h3" textAlign="center" inverted>
              {`Tu as fait ${errors.length} fautes`}
            </Header>
            <DisplayErrors errors={errors} />
          </>
        )}
        <Button type="button" as={Link} to="/games" onClick={handleReturn} className="input-examen">
          Revenir à la page de jeux
        </Button>
      </>
    );
  };

  return (
    <main>
      {constructForm()}
    </main>
  );
}

PlayExamForm.defaultProps = {
  gameData: null,
  controlFormInput: PropTypes.func,
  inputs: null,
  storeData: PropTypes.func,
};

PlayExamForm.propTypes = {
  gameData: PropTypes.shape(),
  controlFormInput: PropTypes.func,
  inputs: PropTypes.shape(),
  storeData: PropTypes.func,
};

export default PlayExamForm;
