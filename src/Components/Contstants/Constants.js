// categories.js

export const categories = [
    {
        id: '1',
        name: 'Appetizers',
    },
    {
        id: '2',
        name: 'Main Courses',
    },
    {
        id: '3',
        name: 'Desserts',
    },
    {
        id: '4',
        name: 'Salads',
    },
    {
        id: '5',
        name: 'Beverages',
    },
];
// recipes.js

export const recipesList = [
    {
        id: 1,
        name: "Cheese Sandwich",
        image: require("../../images/imageone.png"),
        ingredients: [
            "2 slices of bread",
            "2 slices of cheddar cheese",
            "1 tbsp butter"
        ],
        instructions: [
            "Butter one side of each slice of bread.",
            "Place one slice, butter side down, on a skillet over medium heat.",
            "Add cheese slices on top of the bread in the skillet.",
            "Place the second slice of bread on top, butter side up.",
            "Cook until golden brown and the cheese is melted, flipping once."
        ],
        time: "10 mins",
        rating: 4.2 // Added rating
    },
    {
        id: 2,
        name: "Simple Spaghetti",
        image: require("../../images/imagetwo.png"),
        ingredients: [
            "200g spaghetti",
            "4 cloves garlic, sliced",
            "1/4 cup olive oil",
            "1/4 tsp red pepper flakes",
            "Salt to taste",
            "Parsley for garnish"
        ],
        instructions: [
            "Cook spaghetti according to package instructions.",
            "Heat olive oil in a pan over medium heat and add garlic.",
            "Cook garlic until golden but not burnt.",
            "Add red pepper flakes and cooked spaghetti to the pan.",
            "Toss to coat and season with salt.",
            "Garnish with chopped parsley before serving."
        ],
        time: "20 mins",
        rating: 4.5 // Added rating
    },
    {
        id: 3,
        name: "Chicken Tacos",
        image: require("../../images/imagethree.png"),
        ingredients: [
            "2 cups cooked chicken, shredded",
            "1/2 cup salsa",
            "8 small tortillas",
            "1 cup shredded lettuce",
            "1/2 cup shredded cheese",
            "1/4 cup sour cream"
        ],
        instructions: [
            "Mix shredded chicken with salsa in a bowl.",
            "Warm the tortillas in a skillet or microwave.",
            "Fill each tortilla with the chicken mixture.",
            "Top with lettuce, cheese, and a dollop of sour cream."
        ],
        time: "15 mins",
        rating: 4.0 // Added rating
    },
    {
        id: 4,
        name: "Veggie Stir-Fry",
        image: require("../../images/imagefour.png"),
        ingredients: [
            "1 cup broccoli florets",
            "1 cup sliced bell peppers",
            "1 cup snap peas",
            "2 tbsp soy sauce",
            "1 tbsp vegetable oil",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Add garlic and cook until fragrant.",
            "Add vegetables and stir-fry for 5-7 minutes until tender-crisp.",
            "Add soy sauce and stir to coat the vegetables.",
            "Serve hot with rice or noodles."
        ],
        time: "15 mins",
        rating: 4.3 // Added rating
    },
    {
        id: 5,
        name: "Banana Smoothie",
        image: require("../../images/imagefive.png"),
        ingredients: [
            "2 ripe bananas",
            "1 cup milk (or any plant-based milk)",
            "1/2 cup Greek yogurt",
            "1 tbsp honey",
            "Ice cubes (optional)"
        ],
        instructions: [
            "Combine bananas, milk, Greek yogurt, and honey in a blender.",
            "Blend until smooth and creamy.",
            "Add ice cubes if desired and blend again.",
            "Pour into glasses and serve immediately."
        ],
        time: "5 mins",
        rating: 4.7 // Added rating
    },
    {
        id: 6,
        name: "Basil Soup",
        image: require("../../images/imagesix.png"),
       ingredients : [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 can (400g) crushed tomatoes",
            "2 cups vegetable broth",
            "1/4 cup fresh basil, chopped",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat olive oil in a pot over medium heat.",
            "Add onion and garlic, and cook until softened.",
            "Add crushed tomatoes and vegetable broth.",
            "Simmer for 15 minutes.",
            "Stir in fresh basil and season with salt and pepper.",
            "Blend if desired for a smooth texture, and serve hot."
        ],
        time: "25 mins",
        rating: 4.6 // Added rating
    }
];
