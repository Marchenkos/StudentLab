export const GET_RESULT = "GET_RESULT";
export const CLEAR_RESULT = "CLEAR_RESULT";

export const getResult = result => {
    return {
        type: GET_RESULT,
        result
    };
};

export const clearResult = () => {
    return {
        type: CLEAR_RESULT
    };
};
