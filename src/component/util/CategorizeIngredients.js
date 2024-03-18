export const categorizeIngredients = (ingredients) => {
    return ingredients.reduce((acc, ingredient) => {
        const { category } = ingredient;
        if (!acc[category.name]) {
            acc[category.name] = [];
        }
        if (!Array.isArray(acc[category.name])) {
            // If it's not an array, initialize it as an array
            acc[category.name] = [acc[category.name]];
        }
        acc[category.name].push(ingredient);
        return acc;
    }, {});
};
