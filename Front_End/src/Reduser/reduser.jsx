export const initialState = null;

export const reduser = (state, action) => {
    console.log("ohoohohooho");
    if(action.type === "USER"){
        return action.paylode;
    }
    return state;
}