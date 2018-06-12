import React from 'react';
import Typography from 'material-ui/Typography';

const style = {
    textAlign: 'center',
    paddingTop: window.innerHeight / 4
}

const NotFound = () =>
    <div>
        <Typography style={style} variant='display3'>404 Not Found</Typography>
    </div>;


export default NotFound;
