import { combineReducers } from 'redux';
import items from './items'
import map from './map'

export default combineReducers({
  items: items,
  map: map
});
