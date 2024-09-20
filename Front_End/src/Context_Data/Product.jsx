import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from './reduser';

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// const API = "http://localhost:5111/AllProducts";

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProduct: [],
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const geathering = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(url);
            const product = res.data;
           // console.log(product)
            dispatch({ type: "MY_API_DATA", payload: product });
           // console.log("ooooooyehhhhhh");
        }catch(err){
            dispatch({type: "API_ERROR"});
        }
        }

    useEffect(() => {
        geathering(API);
    }, []);

    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
};

const useGlobleProducts = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobleProducts }
