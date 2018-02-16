import React from 'react'
import '../css/styles.css'
import SearchTextField from './SearchTextField'
import {sendQuery} from "../../redux/actions/query";
import Button from 'material-ui/Button';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class SearchForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            fireRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(sendQuery(this.state.value))
        this.setState({
            fireRedirect: true
        })
    }

    handleOnChange(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value
        })
    }

    render() {
        const {fireRedirect} = this.state
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}>
                    <div className='searchFormContainer'>
                        <SearchTextField onChange={this.handleOnChange}/>
                        <Button variant="raised" type='submit'>Search</Button>
                    </div>
                </form>
                {
                    fireRedirect && (
                        <Redirect to={'/search/'}/>
                    )
                }
            </div>
        )

    }
}

export default connect()(SearchForm)
