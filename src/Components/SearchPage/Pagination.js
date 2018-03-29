import React from 'react';
import {connect} from 'react-redux'
import {updatePage} from "../../redux/actions/actions";

class Pagination extends React.Component {

    constructor(props) {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        this.props.dispatch(updatePage(e.target.textContent));
    }

    render() {
        let arr = [];
        for (let i = 1; i <= this.props.totalCount; i++) {
            arr.push(i);
        }
        console.log(this.props.totalCount)
        return (
            <nav aria-label="Page navigation example">
                <ul onClick={this.onClick} className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <button className="btn">Previous</button>
                    </li>
                    {
                        arr.map(item => (
                            <li key={item} className="page-item">
                                <button className="btn">{item}</button>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <button className="btn">Next</button>
                    </li>
                </ul>
            </nav>


        )
    }
}

export default connect()(Pagination);