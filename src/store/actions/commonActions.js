export const handleError = (payload) => ({
    type: 'HANDLE_ERROR',
    payload
});

export const startLoading = (payload) => ({
    type: 'START_LOADING',
    payload
});

export const stopLoading = (payload) => ({
    type: 'STOP_LOADING',
    payload
});
