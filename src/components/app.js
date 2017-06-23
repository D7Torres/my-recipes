import React, { Component } from 'react';

import RecipeList from '../containers/RecipeList';

export default class App extends Component {
    render() {
        return (
            <div>
                <RecipeList />
            </div>
        );
    }
}
