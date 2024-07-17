import { legacy_createStore } from "redux";
import reducer from "../reducer/reducer";
// import thunk from "redux-thunk";

const store = legacy_createStore(reducer);

export default store;
