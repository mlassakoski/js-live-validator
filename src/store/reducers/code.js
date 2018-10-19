import { CODE_UPDATE } from '../actions';

export const initialState = {
    code: '// type your code here_',
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CODE_UPDATE: {
            return {
                ...state,
                code: action.code,
                error: action.error
            }
        }
        default: return state;
    }
}

export default reducer;