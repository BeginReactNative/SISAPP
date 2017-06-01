const kyhocReducer = (state, action) => {
    switch (action.type) {
        case FETCH_SCORE:
            return Object.assign({}, state, {
                kyhoc: state.kyhoc.map(
                    score => score.diem !== action.payload.kyhocID
                        ? score
                        : recipesReducer(score, action)
                )
            });
    }
};

const chitietReducer = (score, action) => {
    switch (action.type) {
        case ADD_CHITETMONHOC:
            return Object.assign({}, book, {
                recipes: book.recipes.map(
                    recipe => recipe.id !== action.payload.recipeId
                        ? recipe
                        : ingredientsReducer(recipe, action)
                )
            });
    }
};
