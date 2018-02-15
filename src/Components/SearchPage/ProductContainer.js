import React, {Component} from 'react'
import '../css/styles.css'
import PropTypes from 'prop-types'
import Product from './Product'
import GridList, {GridListTile} from 'material-ui/GridList';
import {LinearProgress} from 'material-ui/Progress';
import Subheader from 'material-ui/List/ListSubheader';

class ProductContainer extends Component {

    render() {

        const {items, hasErrored, isLoading} = this.props

        if (hasErrored) {
            return <p>Sorry! There is an error loading the items</p>
        }
        if (isLoading) {
            return <LinearProgress color="secondary" variant="query"/>
        }
        return (
            <div className='searchPageRoot'>
                <GridList cellHeight={180} style={{width: window.innerWidth * 2 / 3}} cols={4}>
                    <GridListTile cols={4} style={{height: 'auto'}}>
                        <Subheader component='div'>Product</Subheader>
                    </GridListTile>
                    {
                        items.map(
                            item => (
                                <GridListTile key={item.url} style={{height: 'auto'}}>
                                    <Product itemInfo={item}/>
                                </GridListTile>
                            )
                        )
                    }
                </GridList>
            </div>
        )
    }
}

ProductContainer.propTypes = {
    items: PropTypes.array,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
}


export default ProductContainer
