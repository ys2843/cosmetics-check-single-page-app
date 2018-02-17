import React, {Component} from 'react'
import '../css/styles.css'
import SearchForm from '../SearchForm/SearchForm'
import ProductContainer from './ProductContainer'

class SearchPage extends Component {

    render() {
        return (
            <div>
                <SearchForm/>
                <br/>
                <ProductContainer/>
            </div>
        )
    }

}


export default SearchPage
