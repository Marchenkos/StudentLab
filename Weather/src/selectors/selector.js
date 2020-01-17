import { createSelector } from "reselect";

const getCityName = state => state.changeSearchTerms.cityName;
const getSearchMode = state => state.changeSearchTerms.searchMode;

export const selectCityNameSelector = createSelector(
    [getCityName],
    cityName => cityName
);

export const selectSearchModeSelector = createSelector(
    [getSearchMode],
    searchMode => searchMode
);
