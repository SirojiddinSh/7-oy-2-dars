export const initialState = {
    products: [],
    menuProducts: JSON.parse(localStorage.getItem("menuProducts")) || [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_PRODUCTS":
            return {
                ...state,
                loading: true,
            };
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case "ADD_TO_MENU":
            const updatedMenuProductsAdd = [
                ...state.menuProducts,
                action.payload,
            ];
            localStorage.setItem(
                "menuProducts",
                JSON.stringify(updatedMenuProductsAdd)
            );
            return {
                ...state,
                menuProducts: updatedMenuProductsAdd,
            };
        case "REMOVE_FROM_MENU":
            const remove = state.menuProducts.filter(
                (p) => p.id !== action.payload.id
            );
            localStorage.setItem("menuProducts", JSON.stringify(remove));
            return {
                ...state,
                menuProducts: remove,
            };
        default:
            return state;
    }
};

export default reducer;
