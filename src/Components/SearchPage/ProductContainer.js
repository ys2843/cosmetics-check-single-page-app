import React, {Component} from 'react'
import '../css/styles.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {query} from "../../redux/actions/query"
import ProductPres from './ProductPres'


class ProductContainer extends Component {

    componentDidMount() {
        const url = "http://localhost:5000/api/search/" + this.props.query
        this.props.fetchData(url)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.query !== nextProps.query) {
            const url = "http://localhost:5000/api/search/" + nextProps.query
            this.props.fetchData(url)
        }
    }

    render() {
        return (
            <ProductPres items={this.props.items} isLoading={this.props.isLoading}
                         hasErrored={this.props.hasErrored} result={this.props.query}/>
        )
    }
}

ProductPres.propTypes = {
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        query: state.updateQuery,
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(query(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)