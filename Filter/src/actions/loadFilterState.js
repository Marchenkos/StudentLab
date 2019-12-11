export const LOAD_CELLS = "LOAD_CELLS";
export const LOAD_TABLES = "LOAD_TABLES";
export const LOAD_ELEMENTS = "LOAD_ELEMENTS";

export const loadCells = cells => {
    return {
        type: LOAD_CELLS,
        cells
    };
};

export const loadTables = tables => {
    return {
        type: LOAD_TABLES,
        tables
    };
};

export const loadElements = elements => {
    return {
        type: LOAD_ELEMENTS,
        elements
    };
};
