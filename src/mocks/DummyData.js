
import recipe1 from './../assets/recipe1.jpg';

const myRecipelist = [
    {id: 1,
    name: 'Casserole',
    source: 'Grandma Betty',
    serves: '3-4 people',
    prepTime: 20,
    cookTime: 30,
    ingredients: ['1lb Penne Noodles', '1lb ground beef', '1 onion', '1 can of diced tomatoes', '2 garlic cloves, minced', '1 jar spaghetti sauce', '1/2 lb fresh mushrooms', '1 tsp italian seasoning', '3/4 cups of shredded mozzarella'  ],
    instructions: ['In a large skillet, cook beef and onion over medium heat until no longer pink. Add garlic; cook 1 minute longer. Drain. Stir in spaghetti sauce, diced tomatoes, mushrooms and Italian seasoning. Bring to a boil. Reduce heat; simmer, uncovered, 20 minutes.', 'Meanwhile, preheat oven to 350°. Cook pasta according to package directions; drain. Add to beef mixture and gently stir in sliced plum tomatoes.', 'Transfer to an ungreased 13x9-in. baking dish. Sprinkle with cheeses. Bake 25-30 minutes or until bubbly and heated through.'],
    image: 'https://images.unsplash.com/photo-1586032340364-03f75289e661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhc3Nlcm9sZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
},

        {id: 2,
        name: 'Grilled Cheese',
        source: 'Aunt Tina',
        serves: '3-4 people',
        prepTime: 5,
        cookTime: 8,
        ingredients: ['2 slices of bread', '1/2 tablespoon of butter', '3 slices of cheddar cheese'  ],
        instructions: ['Spread 1/2 Tbsp butter on one side of each slice of bread', 'Place a skillet over low to medium/low heat. A griddle should be at 275˚F. Immediately add 2 slices of bread with the butter-side-down.', 'Stack cheeses on one of the pieces of bread, cover with the other piece of toast and flip the sandwich over.', 'Continue sauteeing, flipping once, until both sides are golden brown and cheese is melted.', 'Cut the sandwich in half on the diagonal to serve.'],
        image: 'https://images.unsplash.com/photo-1608039858788-667850f129f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },

        {id: 3,
        name: 'Shrimp Scampi',
        source: 'Uncle Tony',
        serves: '3-4 people',
        prepTime: 20,
        cookTime: 20,
        ingredients: ['salt', '10 oz linguine', '1 1/4 pounds large, peeled shrimp', '1/3 cup olive oil', '5 cloves garlic, minced', '1/4 teaspoon red pepper flakes', '1/3 cup dry white wine', '1/4 cup lemon juice', '4 tablespoons butter', '1/4 cup chopped parsley' ],
        instructions: ['Bring a large pot of salted water to a boil. Add the linguine and cook as the label directs. Reserve 1 cup cooking water, then drain.', 'Meanwhile, season the shrimp with salt. Heat the olive oil in a large skillet over medium-high heat. Add the garlic and red pepper flakes and cook until the garlic is just golden, 30 seconds to 1 minute. Add the shrimp and cook, stirring occasionally, until pink and just cooked through, 1 to 2 minutes per side. Remove the shrimp to a plate. Add the wine and lemon juice to the skillet and simmer until slightly reduced, 2 minutes.', 'Return the shrimp and any juices from the plate to the skillet along with the linguine, butter and 1/2 cup of the reserved cooking water. Continue to cook, tossing, until the butter is melted and the shrimp is hot, about 2 minutes, adding more of the reserved cooking water as needed. Season with salt; stir in the parsley. Serve with lemon wedges. '],
        image: 'https://images.unsplash.com/photo-1623345541450-9bf0cbb6faab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }
];

export default myRecipelist;


// recipe card has the following features: 
// Id: int
// recipeName: string
// Source: string
// Serves: string (could be a range like 3-4 ppl; how many people can the recipe serve)
// Prep Time: int (minutes)
// Cook Time: int (minutes)
// Ingredients: array (of strings)
// Instructions: array (of strings)
// Image: img (this is optional but preferred)
