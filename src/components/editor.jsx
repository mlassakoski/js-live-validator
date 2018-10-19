import React from 'react';
import CodeMirror from 'react-codemirror';
import { codeUpdate } from '../store/actions';
import { parseScript } from 'esprima';
import { connect } from 'react-redux';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/theme/darcula.css';

const Editor = ({ code, onUpdate }) => {
    const options = { 
        mode: 'javascript', 
        lineNumbers: true, 
        lineWrapping: true,
        tabSize: 2,
        indentUnit: 2,
        smartIndent: true,
        theme: 'darcula',
        autofocus: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        gutters: ['CodeMirror-lint-markers'],
        lint: true,
        extraKeys: {
          'Ctrl-Space': 'autocomplete',
        }
    };

    return (
        <CodeMirror
            value={code}
            onChange={(value) => update(value, onUpdate)}
            autoFocus={true}
            options={options}
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