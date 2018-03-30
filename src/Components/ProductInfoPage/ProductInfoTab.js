import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import uuid from 'uuid/v4'

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    swipeView: {
        padding: 10,
        maxHeight: window.innerHeight / 4,
    }
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {classes, theme, itemInfo} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Details"/>
                        <Tab label="Ingredients"/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <div className={classes.swipeView}>
                            {
                                itemInfo.detail.map(itm => (
                                    <Typography key={uuid()}>
                                        {itm}
                                    </Typography>
                                ))
                            }
                        </div>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <div className={classes.swipeView}>
                            {
                                itemInfo.ingredients.map(itm => (
                                    <Typography key={uuid()}>
                                        {itm}
                                    </Typography>
                                ))
                            }
                        </div>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    itemInfo: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(FullWidthTabs);