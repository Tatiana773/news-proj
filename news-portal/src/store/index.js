import { createStore, combineReducers } from "redux";
import { newsReducer } from "./news/reducer";
import { categoriesReducer } from "./categories/reducer";


export const store = createStore(combineReducers({
    news: newsReducer,
    categories: categoriesReducer,
    
  }))