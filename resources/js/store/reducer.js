const initialState = {
  settings: {
    loading: false,
    sidebarVisibility: false,
  },
};

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_CREDENTIALS = 'SET_CREDENTIALS';
const CONTROL_FORM_INPUT = 'CONTROL_FORM_INPUT';
const CONTROL_FORM_ERRORS = 'CONTROL_FORM_ERRORS';
const STORE_DATA = 'STORE_DATA';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTROL_FORM_INPUT: {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.key]: action.value,
        },
      };
    }
    case CONTROL_FORM_ERRORS: {
      return {
        ...state,
        form_errors: action.errors,
      };
    }
    case SET_CREDENTIALS: {
      return {
        ...state,
        username: action.username,
        email: action.email,
      };
    }
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case STORE_DATA: {
      return {
        ...state,
        [action.name]: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export const setCredentials = (username, email) => ({
  type: SET_CREDENTIALS,
  username,
  email,
});

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const controlFormInput = (key, value) => ({
  type: CONTROL_FORM_INPUT,
  key,
  value,
});

export const controlFormErrors = (errors) => ({
  type: CONTROL_FORM_ERRORS,
  errors,
});

export const storeData = (name, data) => ({
  type: STORE_DATA,
  name,
  data,
});

export default reducer;
