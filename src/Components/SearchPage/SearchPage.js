import React, {Component} from 'react'
import '../css/styles.css'
import SearchForm from '../SearchForm/SearchForm'
import ProductPres from '../SearchPage/ProductPres'

class SearchPage extends Component {

    render() {
        return (
            <div>
                <SearchForm/>
                <br/>
                <ProductPres/>
            </div>
        )
    }

}


export default SearchPage
