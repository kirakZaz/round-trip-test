import { combineReducers } from 'redux';
import filter from './filterReducer';

export default combineReducers({
    filterData: filter
});