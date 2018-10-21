import { CODE_UPDATE } from '../actions';

export const initialState = {
    code: '',
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