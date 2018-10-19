import React from 'react';
import CodeMirror from 'react-codemirror';
import { codeUpdate } from '../store/actions';
import { parseScript } from 'esprima';
import { connect } from 'react-redux';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const Editor = ({ code, onUpdate }) => {
    return (
        <CodeMirror
            value={code}
            onChange={(value) => update(value, onUpdate)}
            autoFocus={true}
            options={{ mode: 'javascript', lineNumbers: true, tabSize: 2 }}
        />
    );
}

const update = (code, onUpdate) => {
    let errorMsg = '';
    try {
        parseScript(code)
    } catch (error) {
        errorMsg = error
    }
    onUpdate(code, errorMsg);
}

const mapStateToProps = state => {
    const { code } = state.code;
    return { code };
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (code, error) => dispatch(codeUpdate(code, error)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);