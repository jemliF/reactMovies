const initialState = {
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'HANDLE_ERROR':
            state = { ...state, error: payload }
            break;
        default:
            break;
    }
    return state;
}
