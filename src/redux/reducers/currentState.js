import * as actionTypes from '../actions/actionTypes';

const initState = {};

function currentState(state = initState, action) {
  switch (action.type) {
    case actionTypes.INIT_CURRENT_STATE:
      return initState;

    case actionTypes.CREATE_HELP_SUCCESS:
    case actionTypes.DELETE_WIDGET_SUCCESS:
    case actionTypes.CREATE_WIDGET_SUCCESS:
    case actionTypes.GO_FORWARD_FAILURE:
    case actionTypes.GO_BACKWARD_FAILURE:
      return {
        ...state,
        needUpdateState: true,
      };
    case actionTypes.ALL_ARTICLES_SUCCESS:
    case actionTypes.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        needUpdateState: false,
      };

    case actionTypes.GO_FORWARD_SUCCESS:
    case actionTypes.GO_BACKWARD_SUCCESS:
    case actionTypes.GET_CURRENT_STATE_SUCCESS:
      return {
        ...state,
        needUpdateState: false,
        state: action.response,
      };

    case actionTypes.SEND_ANSWER_SUCCESS: // TODO: fix another answer types
      return {
        ...state,
        state: {
          ...state.state,
          widgets: state.state.widgets.map((widget) =>
            +widget.id === +action.response.problem
              ? {
                  ...widget,
                  last_submit: action.response.xanswer,
                  answer: action.response.answer,
                }
              : widget
          ),
        },
      };

    case actionTypes.START_WORKSHOP_SUCCESS:
      if (action.response.error) {
        return state;
      }
      return { ...state, player: action.response.player };

    default:
      return state;
  }
}

export default currentState;
