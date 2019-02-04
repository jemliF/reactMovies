const initialState = {
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'HANDLE_ERROR':
            state = { ...state, error: payload, loading: false }
            break;
        default:
            break;
    }
    return state;
}
