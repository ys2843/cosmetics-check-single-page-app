import React from 'react'
import Upward from 'material-ui-icons/ArrowUpward'

class ScrollToTopButton extends React.Component {

    constructor() {
        super();
        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval((this.state.intervalId));
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: intervalId});
    }

    render() {
        return (
            <button title='Back to top' className="hvr-pulse-grow"
                    onClick={() => {
                        this.scrollToTop();
                    }}>
                <Upward style={{width: '40px', height: '40px'}}/>
            </button>
        )
    }
}

export default ScrollToTopButton;