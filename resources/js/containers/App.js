// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '@js/components/App';
import { setCredentials } from '@js/store/reducer';

/* === State (données) ===
* - mapStateToProps retroune un objet de props pour le composant de présentation
* - mapStateToProps met à dispo 2 params
*  - state : le state du store (getState)
*  - ownProps : les props passées au container
* Pas de data à transmettre ? const mapStateToProps = null;
*/
const mapStateToProps = (state) => ({
  username: state.username ?? null,
  email: state.email ?? null,
  quizzData: state.quizzData ?? null,
});

/* === Actions ===
* - mapDispatchToProps retroune un objet de props pour le composant de présentation
* - mapDispatchToProps met à dispo 2 params
*  - dispatch : la fonction du store pour dispatcher une actio
*  - ownProps : les props passées au container
* Pas de disptach à transmettre ? const mapDispatchToProps = {};
*/
const mapDispatchToProps = (dispatch) => ({
  setCredentials: (username, email) => (dispatch(setCredentials(username, email))),
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;

/* = export à la volée
export default connect(
mapStateToProps,
mapDispatchToProps,
)(App);
*/
