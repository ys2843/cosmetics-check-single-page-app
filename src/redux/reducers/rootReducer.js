import {combineReducers} from 'redux'
import {items, itemsHasErrored, itemsIsLoading, updateQuery} from './reducer'

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    updateQuery
})
