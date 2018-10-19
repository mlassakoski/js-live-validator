export const CODE_UPDATE = '[CODE] Code Update';

export const codeUpdate = (code, error) => {
    return {
        type: CODE_UPDATE,
        code,
        error
    }
}
