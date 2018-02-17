import React, {Component} from 'react'
import '../css/styles.css'
import PropTypes from 'prop-types'
import Product from './Product'
import GridList, {GridListTile} from 'material-ui/GridList';
import {LinearProgress} from 'material-ui/Progress';
import Subheader from 'material-ui/List/ListSubheader';

class ProductPres extends Component {

    render() {

        const {items, hasErrored, isLoading, result} = this.props

        if (hasErrored) {
            return <p>Sorry! There is an error loading the items</p>
        }
        if (isLoading) {
            return <LinearProgress color="secondary" variant="query"/>
        }
        return (
            <div className='searchPageRoot'>
                <GridList cols={4} style={{width: window.innerWidth * 4 / 7 + 30}}>
                    <GridListTile cols={4} style={{height: 'auto'}}>
                        <Subheader component='div'>{items.length} Products results: "{result}"</Subheader>
                    </GridListTile>
                    {
                        items.map(
                            item => (
                                <GridListTile key={item.url} style={{height: 'auto', paddingTop:5}}>
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

ProductPres.propTypes = {
    items: PropTypes.array,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    result: PropTypes.string
}


export default ProductPres



