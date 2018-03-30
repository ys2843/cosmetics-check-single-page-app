import React, {Component} from 'react'
import '../css/styles.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {query, getCount} from "../../redux/actions/actions"
import ProductPres from './ProductPres'

class ProductContainer extends Component {

    componentDidMount() {
        if (this.props.query !== '') {
            let url = "http://54.83.169.239/api/search/" + this.props.query + '/' + this.props.pageNumber
            //let url = "http://localhost:3001/api/search/" + this.props.query + '/' + this.props.pageNumber + '/' + this.state.lazyLoadCount
            this.props.fetchData(url)
            let urlCount = "http://54.83.169.239/api/" + this.props.query + '/count'
            //let urlCount = "http://localhost:3001/api/search/" + this.props.query + '/count'
            this.props.fetchCount(urlCount)
        }

    }


    componentWillReceiveProps(nextProps) {
        if (this.props.query !== nextProps.query || this.props.pageNumber !== nextProps.pageNumber) {
            // const url = "http://54.83.169.239/api/search/" + this.props.query + '/' + this.state.pageNumber + '/' + this.state.lazyLoadCount
            let url = "http://54.83.169.239/api/search/" + nextProps.query + '/' + nextProps.pageNumber
            this.props.fetchData(url)
            let urlCount = "http://54.83.169.239/api/" + nextProps.query + '/count'
            this.props.fetchCount(urlCount)
        }
    }

    render() {
        return (
            <ProductPres items={this.props.items} isLoading={this.props.isLoading} totalCount={this.props.count}
                         hasErrored={this.props.hasErrored} result={this.props.query} handleScroll={this.handleScroll}/>

        )
    }
}

ProductPres.propTypes = {
    pageNumber: PropTypes.number,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        pageNumber: state.changePage,
        query: state.updateQuery,
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        count: state.getTotalCount

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(query(url)),
        fetchCount: (url) => dispatch(getCount(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)