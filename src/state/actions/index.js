export const addUser = (userId)=>{
    return (dispatch)=>{
            dispatch({
                type: "add",
                payload : userId
            });
    };
};