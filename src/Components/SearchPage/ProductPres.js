import React, {Component} from 'react'
import '../css/styles.css'
import PropTypes from 'prop-types'
import Product from './Product'
import GridList, {GridListTile} from 'material-ui/GridList';
import {CircularProgress} from 'material-ui/Progress';
import Subheader from 'material-ui/List/ListSubheader';
import Typography from 'material-ui/Typography';

class ProductPres extends Component {

    render() {

        const {items, hasErrored, isLoading, result} = this.props

        if (hasErrored) {
            return (
                <div className='container loading'>
                    <Typography variant="display3">Sorry! There is an error loading the items!</Typography>
                </div>
            )
        }
        if (isLoading) {
            return (
                <div className='container loading'>
                    <CircularProgress size={100}/>
                </div>
            )

        }
        return (
            <div className='container'>
                    <GridList cols={4}>
                        <GridListTile cols={4} style={{height: 'auto'}}>
                            <Subheader component='div'>{items.length} Products results: "{result}"</Subheader>
                        </GridListTile>
                        {
                            items.map(
                                item => (
                                    <GridListTile key={item.url} style={{height: 'auto', paddingTop: 5}}>
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



