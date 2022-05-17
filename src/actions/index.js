export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEM_SET = "MEM_SET";
export const MEM_READ = "MEM_READ";
export const MEM_RESET = "MEM_RESET";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memSet = () => {
    return({type:MEM_SET});
}

export const memRead = () => {
    return({type:MEM_READ});
}

export const memReset = () => {
    return({type:MEM_RESET});
}