import {ActionType} from './action';
import questions from '../mocks/questions';
import {FIRST_GAME_STEP, AuthorizationStatus} from '../const';

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      return {
        ...state,
        step: nextStep,
      };

    case ActionType.INCREMENT_MISTAKES:

      return {
        ...state,
        mistakes: state.mistakes + action.payload
      };

    case ActionType.RESET_GAME:
      return {
        ...initialState
      };
    case ActionType.LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }

  return state;
};


export {reducer};
