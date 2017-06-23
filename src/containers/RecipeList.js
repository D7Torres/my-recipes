import React, { Component } from 'react';
import { fetchRecipes } from '../actions/index';

class RecipeList extends Component {
    render() {
        return (
            <h1>List of recipes</h1>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRecipes }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeList);
