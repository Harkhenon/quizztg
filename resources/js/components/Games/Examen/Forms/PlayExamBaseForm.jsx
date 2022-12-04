import React from 'react';
import {
  Header,
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function PlayExamBaseForm(props) {
  const {
    question,
    handleChange,
    handleSubmit,
    inputs,
  } = props;

  return (
    <>
      <Header as="h1" textAlign="center" inverted>{question.fullStreetName}</Header>
      <Header as="h2" textAlign="center" inverted>{question.name}</Header>
      {question.options !== ''
      && <Header as="h3" textAlign="center" inverted>{question.options}</Header>}
      <Form onChange={handleChange} onSubmit={handleSubmit} className="form-examen">
        <Form.Input
          type="number"
          name="answer"
          width={1}
          autoFocus
          value={inputs === null ? '' : inputs.answer}
          autoComplete="off"
          className="input-examen"
        />
      </Form>
    </>
  );
}

PlayExamBaseForm.defaultProps = {
  inputs: null,
};

PlayExamBaseForm.propTypes = {
  question: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullStreetName: PropTypes.string.isRequired,
    options: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.shape({
    answer: PropTypes.shape(),
  }),
};

export default PlayExamBaseForm;
