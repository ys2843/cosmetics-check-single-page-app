import React from 'react';
import '../css/styles.css';
import SearchTextField from './SearchTextField';
import {sendQuery} from "../../redux/actions/actions";
import Button from 'material-ui/Button';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            fireRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(sendQuery(this.state.value));
        this.setState({
            fireRedirect: true
        });
    }

    handleOnChange(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='searchFormContainer'>
                        <SearchTextField onChange={this.handleOnChange}/>
                        <Button variant="raised" size="small" type='submit'>Search</Button>
                    </div>
                </form>
                {
                    this.props.fire && this.state.fireRedirect && (
                        <Redirect to={'/search?' + this.state.value}/>
                    )
                }
            </div>
        );
    }
}

export default connect()(SearchForm);
