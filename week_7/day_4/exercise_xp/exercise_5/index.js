const makeJuice = (size) => {
 let  ingredients = [];
    const addIngredient = (ingredient1,ingredient2,ingredient3) => {
        ingredients.push(ingredient1, ingredient2, ingredient3);
       document.querySelector('#sentence').innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}".`
    }
    const juice = () => {
        ingredients.forEach(ingredient => {
            document.querySelector('#sentence2').innerHTML =`The client wants a ${size} juice, containing ${ingredient}.`;
            }
        )
    }
    addIngredient('lichi','watermelon','coffee');
    addIngredient('mango', 'lemon', 'banana');
    juice();
}


makeJuice('Large');