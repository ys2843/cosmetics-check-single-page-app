import React, {Component} from 'react'
import '../css/styles.css'
import SearchForm from '../SearchForm/SearchForm'
import ProductContainer from './ProductContainer'

class SearchPage extends Component {

    render() {
        return (
            <div className='searchpage'>
                <SearchForm/>
                <br/>
                <ProductContainer/>
            </div>
        )
    }

}


export default SearchPage
