import React from 'react'
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';
import 'codemirror/theme/neo.css';
import 'codemirror/addon/display/autorefresh';
import Highlight from 'react-highlight'

const Viewer = ({ code, error }) => {
    return (
        <div className="Viewer">
            <SplitPane split="horizontal" defaultSize={200} primary="second">
                <div className="Code">
                    <Highlight language='javascript'>
                        {code}
                    </Highlight>
                </div>
                <div>{validateError(error)}</div>
            </SplitPane>
        </div>
    );
}

const validateError = error => {
    if (error) {
        return <p className="Error">
            Error at line <strong>{error.lineNumber}</strong> and col <strong>{error.column}</strong>: {error.description}
        </p>;
    }
    return <p></p>
}

const mapStateToProps = state => {
    return state.code;
}

export default connect(mapStateToProps, null)(Viewer);