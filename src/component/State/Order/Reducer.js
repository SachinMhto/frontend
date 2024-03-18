import { GET_USERS_OEDERS_FAILURE, GET_USERS_OEDERS_REQUEST, GET_USERS_OEDERS_SUCCESS } from "./ActionType";


const initialValues = {
    loading: false,
    orders: [],
    error: null,
};
export const orderReducer = (state = initialValues, { type, payload }) => {
    switch (type) {
        case GET_USERS_OEDERS_REQUEST:
            return {
                ...state, error: null, loading: true
            };
        case GET_USERS_OEDERS_SUCCESS:
            return { ...state, error: null, loading: false, orders: payload };
        case GET_USERS_OEDERS_FAILURE:
            return {
                ...state, error: payload, loading: false
            };
        default:
            return state;
    }
};