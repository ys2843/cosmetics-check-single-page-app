import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import TextField from "material-ui/TextField";

const styles = theme => ({
    textFieldRoot: {
        padding: 0,
        "label + &": {
            marginTop: theme.spacing.unit * 3
        }
    },
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 12px",
        width: window.innerWidth / 3,
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    }
});

function CustomizedInputs(props) {
    const {classes, onChange} = props;

    return (
        <TextField
            onChange={onChange}
            InputProps={{
                disableUnderline: true,
                classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput
                }
            }}
        />
    );
}


CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

export default withStyles(styles)(CustomizedInputs);