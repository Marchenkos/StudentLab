export const CHECKED_FILTERS = "CHECKED_ELEMENT";
export const UNCHECKED_FILTERS = "CHECKED_CELL";

export const checkedFilter = name => {
    return {
        type: CHECKED_FILTERS,
        filterNames: name
    };
};

export const uncheckedFilter = name => {
    return {
        type: UNCHECKED_FILTERS,
        filterNames: name
    };
};
