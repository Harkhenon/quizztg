// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import { storeData, controlFormInput, controlFormErrors } from '@js/store/reducer';
import PlayExam from '@js/components/Games/Examen/PlayExam';

/* === State (données) ===
* - mapStateToProps retroune un objet de props pour le composant de présentation
* - mapStateToProps met à dispo 2 params
*  - state : le state du store (getState)
*  - ownProps : les props passées au container
* Pas de data à transmettre ? const mapStateToProps = null;
*/
const mapStateToProps = (state) => ({
  quizzData: state.quizzData ?? null,
  gameData: state.gameData ?? {
    started: false,
    answers: [],
  },
  inputs: state.inputs ?? null,
});

/* === Actions ===
* - mapDispatchToProps retroune un objet de props pour le composant de présentation
* - mapDispatchToProps met à dispo 2 params
*  - dispatch : la fonction du store pour dispatcher une actio
*  - ownProps : les props passées au container
* Pas de disptach à transmettre ? const mapDispatchToProps = {};
*/
const mapDispatchToProps = (dispatch) => ({
  storeData: (name, data) => (dispatch(storeData(name, data))),
  controlFormInput: (name, data) => (dispatch(controlFormInput(name, data))),
  controlFormErrors: (data) => (dispatch(controlFormErrors(data))),
});

// Container
const PlayExamContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayExam);

// == Export
export default PlayExamContainer;

/* = export à la volée
export default connect(
mapStateToProps,
mapDispatchToProps,
)(PlayExam);
*/