import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType";
import { api } from "../../Config/Api";

export const getIngredientsOfRestaurant = ({ id,jwt}) => {
    return async (dispatch) => {
        try {
            const response= await api.get(`/api/admin/ingredients/restaurant/${id}`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type:GET_INGREDIENTS, payload:response.data });
        } catch (error) {
            console.log("error is:", error);
        }
    };
};
export const createIngredient = ({ data,jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients`,data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type:CREATE_INGREDIENT_SUCCESS, payload:response.data });
        } catch (error) {
             console.log("error is:", error);
        }
    };
};
export const createIngredietsCategory = ({ data,jwt}) => {
    return async (dispatch) => {
        try {
            const response= await api.post(`/api/admin/ingredients/category`,data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type:CREATE_INGREDIENT_CATEGORY_SUCCESS, payload:response.data});
        } catch (error) {
           console.log("error is:", error);
        }
    };
};
export const getIngredientCategory = ({id,jwt }) => {
    return async (dispatch) => {
        try {
            const response= await api.get(`/api/admin/ingredients/restaurant/${id}/category`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type:GET_INGREDIENT_CATEGORY_SUCCESS, payload:response.data });
        } catch (error) {
            console.log("error is:", error);
        }
    };
};
export const updateStockIngredient = ({id,jwt }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.put(`/api/admin/ingredients/${id}/stoke`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type:UPDATE_STOCK, payload:data });
        } catch (error) {
           console.log("error is:", error);
        }
    };
};
