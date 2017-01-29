export const RIGHT_COLUMN_CHANGE_COLOR = 'RIGHT_COLUMN_CHANGE_COLOR';
export const FOOTER_CHANGE_COLOR = 'FOOTER_CHANGE_COLOR';
export const REQUEST_COLORS = 'REQUEST_COLORS';
export const RECEIVE_COLORS = 'RECEIVE_COLORS';

export function rightColumnChangeColor(color) {
    return {
        type: RIGHT_COLUMN_CHANGE_COLOR,
        payload: {
            color: color
        }
    };
}

export function footerChangeColor(color) {
    return {
        type: FOOTER_CHANGE_COLOR,
        payload: {
            color: color
        }
    };
}

export function requestColors(url) {
    return {
        type: REQUEST_COLORS,
        payload: {
            url: url
        }
    };
}

export function receiveColors(json) {
    return {
        type: RECEIVE_COLORS,
        payload: {
            colors: json
        }
    };
}