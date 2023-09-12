// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PlayExamForm from '@js/components/Games/Examen/Forms/PlayExamForm';
import { storeData, controlFormInput } from '@js/store/reducer';

/* === State (données) ===
*  - mapStateToProps retroune un objet de props pour le composant de présentation
*  - mapStateToProps met à dispo 2 params
*  - state : le state du store (getState)
*  - ownProps : les props passées au container
* Pas de data à transmettre ? const mapStateToProps = null;
*/

const mapStateToProps = (state, ownProps) => ({
  settings: state.settings ?? null,
  gameData: state.gameData ?? null,
  inputs: state.inputs ?? null,
  ...ownProps,
});

/* === Actions ===
*  - mapDispatchToProps retroune un objet de props pour le composant de présentation
*  - mapDispatchToProps met à dispo 2 params
*  - dispatch : la fonction du store pour dispatcher une actio
*  - ownProps : les props passées au container
* Pas de disptach à transmettre ? const mapDispatchToProps = {};
*/

const mapDispatchToProps = (dispatch) => ({
  storeData: (name, data) => (dispatch(storeData(name, data))),
  controlFormInput: (name, value) => (dispatch(controlFormInput(name, value))),
});

// Container
const PlayExamFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayExamForm);
// == Export

export default PlayExamFormContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayExamForm);
*/