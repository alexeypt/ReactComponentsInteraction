import { RIGHT_COLUMN_CHANGE_COLOR, FOOTER_CHANGE_COLOR } from '../actions/index'

const initialState = {
    headerColor: 'red',
    containerColor: 'green',
    footerColor: 'yellow',
    leftColumnColor: 'blue',
    rightColumnColor: 'purple'
}


export default function colors(state = initialState, action) {
    switch (action.type) {
        case RIGHT_COLUMN_CHANGE_COLOR:
            return Object.assign({}, state, {
                rightColumnColor: action.payload.color
            })
        case FOOTER_CHANGE_COLOR:
            return Object.assign({}, state, {
                footerColor: action.payload.color
            })
        default:
            return state
    }
}