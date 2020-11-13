import { combineReducers } from 'redux';
import account from './account';
import notifications from './notifications';
import mentor from './mentor';

import { IntlReducer as Intl } from 'react-redux-multilingual';

const allReducers = combineReducers({
  account,
  notifications,
  mentor,
  Intl,
});
export default allReducers;
