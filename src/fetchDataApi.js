class fetchDataApi {
    getProducts(query) {
        const url = "http://localhost:5000/api/search/" + query
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch(error => {
                return error;
            });
    }
}

export default fetchDataApi;