const productreduser = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "MY_API_DATA":
            const featureProduct = action.payload.filter((curElem) => {
                return curElem.featured == true;
            });
            return {
                ...state,
                isLoading: false,
                product: action.plyload,
                featureProduct: featureProduct,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
}

export default productreduser;