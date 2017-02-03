import { CHANGE_RIGHT_COLUMN_COLOR, CHANGE_FOOTER_COLOR, REQUEST_COLORS, SUCCESS_COLORS, FAILURE_COLORS } from '../actions/index'

const initialState = {
    headerColor: 'red',
    containerColor: 'green',
    footerColor: 'yellow',
    leftColumnColor: 'blue',
    rightColumnColor: 'purple',

    isFetching: false,
    didInvalidate: false
}


export default function colors(state = initialState, action) {
    switch (action.type) {
        case CHANGE_RIGHT_COLUMN_COLOR:
            return Object.assign({}, state, {
                rightColumnColor: action.payload.color
            })
        case CHANGE_FOOTER_COLOR:
            return Object.assign({}, state, {
                footerColor: action.payload.color
            })

        case REQUEST_COLORS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case SUCCESS_COLORS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                ...action.payload.data
            })
        case FAILURE_COLORS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true
            })
        default:
            return state
    }
}