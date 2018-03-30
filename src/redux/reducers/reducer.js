export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}


export function updateQuery(state = '', action) {
    switch (action.type) {
        case 'SEND_QUERY':
            return action.query;
        default:
            return state;
    }

}

export function getTotalCount(state = 0, action) {
    switch (action.type) {
        case 'GET_COUNT':
            return action.count
        default:
            return state;
    }
}

export function changePage(state = 1, action) {
    switch (action.type) {
        case 'UPDATE_PAGE':
            let newPage = state;
            if (action.pageNumber === 'Next') {
                return parseInt(newPage, 10) + 1 + '';
            } else if (action.pageNumber === 'Previous') {
                return parseInt(newPage, 10) - 1 + '';
            } else {
                return action.pageNumber;
            }
        default:
            return state;
    }
}