import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionType";
import { api } from "../../Config/Api";

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST });
        try {
            const response = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type:FIND_CART_SUCCESS, payload:response.data});
        } catch (error) {
            dispatch({ type:FIND_CART_FAILURE, payload: error });
        }
    };
};
export const getAllCartItems  = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
        try {
            const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({ type:GET_ALL_CART_ITEMS_SUCCESS, payload:response.data});
        } catch (error) {
            dispatch({ type:GET_ALL_CART_ITEMS_FAILURE, payload: error });
        }
    };
};
export const addItemToCart= (reqData) => {
    return async (dispatch) => {
        dispatch({ type:ADD_ITEM_TO_CART_REQUEST});
        try {
            const { data } = await api.put(`/api/cart/add`,reqData.cartItem, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
            console.log("added item:",data);
        } catch (error) {
            dispatch({ type:ADD_ITEM_TO_CART_FAILURE, payload: error });
        }
    };
};
export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_CARTITEM_REQUEST });
        try {
            const {data } = await api.put(`/api/cart-item/update`,reqData.data,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
              dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
            console.log("updated data:",data);
        } catch (error) {
             console.log("updated data error:",error);
            dispatch({ type:UPDATE_CARTITEM_FAILURE, payload: error });
        }
    };
};
export const removeCartItem = ({ cartItemId,jwt}) => {
    return async (dispatch) => {
        dispatch({ type:REMOVE_CARTITEM_REQUEST});
        try {
            const { data} = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("remove data", data);
            dispatch({ type:REMOVE_CARTITEM_SUCCESS, payload:data});
        } catch (error) {
            dispatch({ type:REMOVE_CARTITEM_FAILURE, payload: error });
        }
    };
};
export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type:CLEARE_CART_REQUEST});
        try {
            const { data } = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            dispatch({ type:CLEARE_CART_SUCCESS, payload:data});
        } catch (error) {
            dispatch({ type:CLEARE_CART_FAILURE, payload: error });
        }
    };
};
