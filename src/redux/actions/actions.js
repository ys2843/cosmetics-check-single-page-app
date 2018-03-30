export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function updatePage(page) {
    return {
        type: 'UPDATE_PAGE',
        pageNumber: page
    }
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
}

export function sendQuery(query) {
    return {
        type: 'SEND_QUERY',
        query: query
    };
}

export function getCountAction(count) {
    return {
        type: 'GET_COUNT',
        count: count
    }
}

export function getCount(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then(count => dispatch(getCountAction(count.count)))
            .catch(() => 'error')
    }
}

export function query(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}