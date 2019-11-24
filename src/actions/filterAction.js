import * as actionTypes from './actionTypes';

const {
    PRICES_RANGE,
    FLIGHT_TIME_THERE,
    FLIGHT_TIME_RETURN,
    FLIGHT_HOURS_THERE,
    FLIGHT_HOURS_RETURN
} = actionTypes;
export const sendPricesRangeChanges = (pricesRange) => {
    return {
        type: PRICES_RANGE,
        payload: {pricesRange}
    }
};
export const sendFlightTimeThereChanges = (flightTimeThere) => {
    return {
        type: FLIGHT_TIME_THERE,
        payload: {flightTimeThere}
    }
};
export const sendFlightTimeReturnChanges = (flightTimeReturn) => {
    return {
        type: FLIGHT_TIME_RETURN,
        payload: {flightTimeReturn}
    }
};
export const sendFlightHoursThereChanges = (flightHoursThere) => {
    return {
        type: FLIGHT_HOURS_THERE,
        payload: {flightHoursThere}
    }
};
export const sendFlightHoursReturnChanges = (flightHoursReturn) => {
    return {
        type: FLIGHT_HOURS_RETURN,
        payload: {flightHoursReturn}
    }
};