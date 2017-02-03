export const CHANGE_RIGHT_COLUMN_COLOR = 'CHANGE_RIGHT_COLUMN_COLOR';
export const CHANGE_FOOTER_COLOR = 'CHANGE_FOOTER_COLOR';
export const REQUEST_COLORS = 'REQUEST_COLORS';
export const SUCCESS_COLORS = 'SUCCESS_COLORS';
export const FAILURE_COLORS = 'FAILURE_COLORS';

export function changeRightColumnColor(color) {
    return {
        type: CHANGE_RIGHT_COLUMN_COLOR,
        payload: {
            color: color
        }
    };
}

export function changeFooterColor(color) {
    return {
        type: CHANGE_FOOTER_COLOR,
        payload: {
            color: color
        }
    };
}

function requestColors() {
    return {
        type: REQUEST_COLORS
    }
}

function successColors(json) {
    return {
        type: SUCCESS_COLORS,
        payload: {
            data: json
        }
    }
}

function failureColors(error) {
    return {
        type: FAILURE_COLORS,
        error
    }
}

export function updateColors(url) {
    return (dispatch) => {
        dispatch(requestColors());
        return fetch(url)
            .then(result => result.json(),
                    error => dispatch(failureColors(error)))
            .then(json => dispatch(successColors(json)))
    };
}