import { LOGOUT } from "../Authentication/ActionType";
import * as actionType from "./ActionType";

const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: []
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FIND_CART_REQUEST:
        case actionType.GET_ALL_CART_ITEMS_REQUEST:
        case actionType.UPDATE_CARTITEM_REQUEST:
        case actionType.REMOVE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionType.FIND_CART_SUCCESS:
        case actionType.CLEARE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.item,
            };
        case actionType.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [action.payload, ...state.cartItems],
            };
       case actionType.UPDATE_CARTITEM_SUCCESS:
    const updatedItem = action.payload; // Assuming the payload contains the updated item data

    // Find the index of the item to be updated in the cartItems array
    const index = state.cartItems.findIndex(item => item.id === updatedItem.id);

    if (index !== -1) {
        // If the item is found, update it in the array
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[index] = updatedItem;

        return {
            ...state,
            loading: false,
            cartItems: updatedCartItems,
        };
    } else {
        // If the item is not found, return the current state
        return state;
    }

    

        case actionType.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) => item.id == action.payload),
            };
        case actionType.FIND_CART_FAILURE:
        case actionType.UPDATE_CARTITEM_FAILURE:
        case actionType.REMOVE_CARTITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state, cartItems: [], cart: null, success: "Logout successfully"
            };
        default:
            return state;
    }
};
export default cartReducer;
