import React from 'react'
import { connect } from 'react-redux';

const Viewer = ({ code, error }) => {
    return (
        <div>
            {code}
                <br />
            {validateError(error)}
        </div>
    );
}

const validateError = error => {
    if(error) {
        return `Error at line ${error.lineNumber} and col ${error.column}: ${error.description}`;
    }
    return <p></p>
}

const mapStateToProps = state => {
    return state.code;
}

export default connect(mapStateToProps, null)(Viewer);