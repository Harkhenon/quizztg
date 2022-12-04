import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function DisplayErrors(props) {
  const { errors } = props;

  return (
    <Table inverted>
      <Table.Header>
        <Table.HeaderCell />
        <Table.HeaderCell>
          Rue
        </Table.HeaderCell>
        <Table.HeaderCell>
          Numéro de tournée
        </Table.HeaderCell>
        <Table.HeaderCell>
          Ta réponse
        </Table.HeaderCell>
      </Table.Header>
      {errors.map((e, i) => (
        <Table.Row>
          <Table.Cell>
            {`#${i + 1}`}
          </Table.Cell>
          <Table.Cell>
            {e.street}
          </Table.Cell>
          <Table.Cell>
            {e.number}
          </Table.Cell>
          <Table.Cell>
            {e.answer}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table>
  );
}

DisplayErrors.propTypes = {
  errors: PropTypes.shape().isRequired,
};

export default DisplayErrors;
