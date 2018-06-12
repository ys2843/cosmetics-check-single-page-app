import React from 'react';
import {connect} from 'react-redux';
import {updatePage} from "../../redux/actions/actions";
import '../css/styles.css';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        let content = e.target.textContent;
        switch (content) {
            case 'Next':
                if (this.props.pageNumber < this.props.totalCount) {
                    this.props.dispatch(updatePage(content));
                }
                break;
            case 'Previous':
                if (this.props.pageNumber > 1) {
                    this.props.dispatch(updatePage(content));
                }
                break;
            default:
                if (!content.includes('Next')) {
                    this.props.dispatch(updatePage(content));
                }
        }
    };

    render() {

        if (this.props.totalCount === 0) {
            return (
                <div/>
            )
        }
        let arr = [];
        let start, end;
        let mid = parseInt(this.props.pageNumber, 10);
        if (this.props.totalCount < 6) {
            start = 1;
            end = this.props.totalCount;
        } else if (mid <= 3) {
            start = 1;
            end = 6;
        } else if (mid >= this.props.totalCount - 3) {
            start = this.props.totalCount - 6;
            end = this.props.totalCount;
        } else {
            start = mid - 2;
            end = mid + 2;
        }
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return (
            <nav aria-label="Page navigation example">
                <ul onClick={this.onClick} className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="btn">Previous</button>
                    </li>
                    {
                        arr.map(item => (
                            <li key={item} className="page-item">
                                <button className="btn" style={parseInt(this.props.pageNumber, 10) === item ? {
                                    backgroundColor: 'lightpink',
                                } : {}}>{item}</button>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <button className="btn">Next</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.changePage
    };
}

export default connect(mapStateToProps)(Pagination);