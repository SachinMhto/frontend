import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_NOTIFICATION_REQUEST, GET_USERS_OEDERS_FAILURE, GET_USERS_OEDERS_REQUEST, GET_USERS_OEDERS_SUCCESS } from "./ActionType";
import { api } from "../../Config/Api";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });
        try {
            const { data } = await api.post(`/api/order`, reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            // if (data.payment_url) { 
            //     window.location.href = data.payment_url;
            // }
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
        }
    };
};
export const getUserOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_USERS_OEDERS_REQUEST });
        try {
            const { data } = await api.get(`/api/order/user`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: GET_USERS_OEDERS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_USERS_OEDERS_FAILURE, payload: error });
        }
    };
};
// export const getUserNotification = () => { 
//     return async (dispatch) => { 
//         dispatch({ type:GET_USERS_NOTIFICATION_REQUEST});
//         try {
//             const { data } = await api.post(``, reqData, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             dispatch({ type:, payload });
//         } catch (error) {
//             dispatch({ type:, payload:error });
//         }
//     }
// }
// export const a = () => { 
//     return async (dispatch) => { 
//         dispatch({ type:});
//         try {
//             const { data } = await api.post(``, reqData, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             dispatch({ type:, payload });
//         } catch (error) {
//             dispatch({ type:, payload:error });
//         }
//     }
// }
// export const a = () => { 
//     return async (dispatch) => { 
//         dispatch({ type:});
//         try {
//             const { data } = await api.post(``, reqData, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             dispatch({ type:, payload });
//         } catch (error) {
//             dispatch({ type:, payload:error });
//         }
//     }
// }
// export const a = () => { 
//     return async (dispatch) => { 
//         dispatch({ type:});
//         try {
//             const { data } = await api.post(``, reqData, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             dispatch({ type:, payload });
//         } catch (error) {
//             dispatch({ type:, payload:error });
//         }
//     }
// }
// export const a = () => { 
//     return async (dispatch) => { 
//         dispatch({ type:});
//         try {
//             const { data } = await api.post(``, reqData, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             dispatch({ type:, payload });
//         } catch (error) {
//             dispatch({ type:, payload:error });
//         }
//     }
// }
// export const a = () => { 
//     return async (dispatch) => { 
//         dispatch({ type:});
//         try {
//             const { data } = await api.post(``, reqData, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             dispatch({ type:, payload });
//         } catch (error) {
//             dispatch({ type:, payload:error });
//         }
//     }
// }