import React, {Component} from 'react'
import '../css/styles.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {query, getCount} from "../../redux/actions/actions"
import ProductPres from './ProductPres'


class ProductContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lazyLoadCount: 0,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }


    handleScroll = (e) => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight && this.state.lazyLoadCount < 5) {
            let tmp = this.state.lazyLoadCount + 1;
            this.setState({
                lazyLoadCount: tmp
            });
            //this.lazyLoad();
        }
    }

    componentDidMount() {
        console.log("did mount")
        // const url = "http://54.83.169.239/api/search/" + this.props.query + '/' + this.state.pageNumber + '/' + this.state.lazyLoadCount
        let url = "http://localhost:3001/api/search/" + this.props.query + '/' + this.props.pageNumber + '/' + this.state.lazyLoadCount
        this.props.fetchData(url)
        let urlCount = "http://localhost:3001/api/search/" + this.props.query + '/count'
        console.log(urlCount)
        this.props.fetchCount(urlCount)

    }


    componentWillReceiveProps(nextProps) {
        if (this.props.query !== nextProps.query || this.props.pageNumber !== nextProps.pageNumber) {
            // const url = "http://54.83.169.239/api/search/" + this.props.query + '/' + this.state.pageNumber + '/' + this.state.lazyLoadCount
            let url = "http://localhost:3001/api/search/" + nextProps.query + '/' + nextProps.pageNumber + '/' + this.state.lazyLoadCount
            this.props.fetchData(url)
            url = "http://localhost:3001/api/search/" + nextProps.query + '/count'
            this.props.fetchCount(url)
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