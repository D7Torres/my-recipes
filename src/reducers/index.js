import { combineReducers } from 'redux';
import RecipeListReducer from './recipeList';

const rootReducer = combineReducers({
    recipeList: RecipeListReducer,
});

export default rootReducer;
