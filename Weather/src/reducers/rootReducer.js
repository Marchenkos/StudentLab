import { combineReducers } from "redux";
import metadataReducer from "./metadataReducer";
import loadingStateReducer from "./loadingStateReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    metadata: metadataReducer,
    error: errorReducer,
    loadingState: loadingStateReducer
});
