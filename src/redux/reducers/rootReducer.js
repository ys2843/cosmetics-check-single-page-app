import {combineReducers} from 'redux';
import {items, itemsHasErrored, itemsIsLoading, updateQuery, changePage, getTotalCount} from './reducer';

export default combineReducers({
    items,
    getTotalCount,
    itemsHasErrored,
    changePage,
    itemsIsLoading,
    updateQuery
});
