export const RIGHT_COLUMN_CHANGE_COLOR = 'RIGHT_COLUMN_CHANGE_COLOR';
export const FOOTER_CHANGE_COLOR = 'FOOTER_CHANGE_COLOR';

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