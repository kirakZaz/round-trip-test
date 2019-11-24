import * as actionTypes from '../actions/actionTypes';

const {
    PRICES_RANGE,
    FLIGHT_TIME_THERE,
    FLIGHT_TIME_RETURN,
    FLIGHT_HOURS_THERE,
    FLIGHT_HOURS_RETURN
} = actionTypes;

const initialState = {
    pricesRange: [],
    flightTimeThere: [],
    flightTimeReturn: [],
    flightHoursThere: [],
    flightHoursReturn: [],
};

export default (state = initialState, action) => {

    switch(action.type) {
        case PRICES_RANGE:
            const { pricesRange } = action.payload;
            return {
                ...state,
                pricesRange
            };
        case FLIGHT_TIME_THERE:
            const { flightTimeThere } = action.payload;
            return {
                ...state,
                flightTimeThere
            };
        case FLIGHT_TIME_RETURN:
            const { flightTimeReturn } = action.payload;
            return {
                ...state,
                flightTimeReturn
           };
        case FLIGHT_HOURS_THERE:
            const { flightHoursThere } = action.payload;
            return {
                ...state,
                flightHoursThere
            };
        case FLIGHT_HOURS_RETURN:
            const { flightHoursReturn } = action.payload;
            return {
                ...state,
                flightHoursReturn
            };

        default:
            return state;
    }
}
