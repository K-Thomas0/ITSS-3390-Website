// Recipe data
const recipes = [
    {
        id: 1,
        title: "Microwave Scrambled Eggs in a Mug",
        description : "Quick and easy scrambled eggs made in a mug using a microwave.",
        category: "breakfast",
        time: "2 min",
        cost: "$",
        image: "https://images.unsplash.com/photo-1630440042651-aa87c75a8c0e?w=400&h=300&fit=crop",
        ingredients: [
            "2 eggs",
            "2 tbsp milk",
            "Salt & pepper",
            "Shredded cheese (optional)"
        ],
        instructions: [
            "1. Crack eggs into a microwave-safe mug",
            "2. Add milk, salt, and pepper.",
            "3. Whisk with a fork until combined.",
            "4. Microwave for 45 seconds, stir, then microwave another 30–45 seconds until cooked.",
            "5. Top with cheese if desired."
        ]
    },
    {
        id: 2,
        title: "Peanut Butter Overnight Oats",
        description : "Meal-prep friendly, cheap, and filling — grab and go on busy mornings.",
        category: "breakfast",
        time: "10 min prep, 6 hours to soak",
        cost: "$",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4cbc5f0a?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup rolled oats",
            "1/2 cup of milk of choice ",
            "1/2 cup of greek yogurt ",
            "1 tbsp of peanut butter",
            "1 tbsp of honey (optional)",
            "1/2 of banana or berries (optional)"
        ],
        instructions: [
            "1. Add oats and milk to a sealable container or jar.",
            "2. Stir in peanut butter and honey until mixed.",
            "3. Close lid tightly and refrigerate overnight (at least 6 hours).",   
            "4. In the morning, stir and top with fruit if available.",
            "5. Enjoy cold — or microwave 45 sec to warm up."  
        ]
    },
    {
        id: 3,
        title: "Microwave French Toast in a Mug",
        description : "A soft, custardy French toast without a pan, perfect for a sweet start to the day.",
        category: "breakfast",
        time: "2 min",
        cost: "$",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
        ingredients: [
            "1 slice of bread",
            "1 egg",
            "2 tbsp of milk of choice",
            "1 tsp of sugar",
            "1 tsp of cinnamon"
        ],
        instructions: [
            "1. Tear bread into pieces and add to a mug.",
            "2. Add egg, milk, sugar, and cinnamon to the mug and stir.",
            "3. Microwave for 2 minutes until cooked through.",
            "4. Serve and enjoy.",
        ]
    },{
        id: 4,
        title: "Breakfast Burrito ",
        description : "A warm, cheesy breakfast wrap you can customize with eggs, salsa, and cheese",
        category: "breakfast",
        time: "5 min",
        cost: "$",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
        ingredients: [
            "1 tortilla",
            "2 scrambled eggs",
            "1/2 cup of shredded cheese",
            "1/2 cup of salsa",
            
        ],
        instructions: [
            "1. Scramble eggs in a pan and add cheese and salsa.",
            "2. Add the eggs to the tortilla and fold.",
            "3. Microwave for 1-2 minutes until heated through.",
            "4. Serve and enjoy.",
        ]
    },{
        id: 5,
        title: "Sweet Potato Breakfast Bowl",
        description : "A hearty and naturally sweet breakfast bowl topped with egg and cinnamon.",
        category: "breakfast",
        time: "10 min ",
        cost: "$",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
        ingredients: [
            "1 sweet potato",
            "1 egg",
            "1 tbsp of butter",
            "1 tsp of cinnamon"
        ],
        instructions: [
            "1. Pierce the sweet potato with a fork and add to a microwave-safe bowl.",
            "2. microwave 5-8 minutes until soft.",
            "3. Cook the egg in a microwave-safe bowl.",
            "4. Top with the sweet potato and cinnamon.",
            "5. Serve and enjoy.",
        ]
    },{
        id: 6,
        title: "Vanilla Overnight Oats",
        description : "Meal-prep friendly, cheap, and filling — grab and go on busy mornings.",
        category: "breakfast",
        time: "10 min prep, 4-6 hours to soak",
        cost: "$",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4cbc5f0a?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup rolled oats",
            "1/2 cup of milk of choice",
            "2/3 cup of greek yogurt",
            "1 tsp of vanilla extract",
            "1 tbsp of honey or maple syrup (optional)",
            "1/2 of banana or berries (optional)"
        ],
        instructions: [
            "1. Add oats, yogurt, and milk to a sealable container or jar.",
            "2. Stir in vanilla extract and maplesyrup or honey until mixed.",
            "3. Close lid tightly and refrigerate overnight (at least 6 hours).",   
            "4. In the morning, stir and top with fruit if available.",
            "5. Enjoy cold — or microwave 45 sec to warm up."  
        ]
    },{
        id: 7,
        title: "Tiramisu Overnight Oats",
        description : "Meal-prep friendly, cheap, and filling — grab and go on busy mornings.",
        category: "breakfast",
        time: "10 min prep, 4-6 hours to soak",
        cost: "$",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4cbc5f0a?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of rolled oats",
            "3/4 cup of milk of choice",
            "1/2 cup of greek yogurt",
            "1/4 cup of cold brew coffee",
            "2 tbsp of cream cheese, softened",
            "1 tsp of vanilla extract",
            "1/2 tsp of cinnamon"
        ],
        instructions: [
            "1. Add oats, yogurt, and milk to a sealable container or jar.",
            "2. Stir in vanilla extract, softened cream cheese,brewed coffee and maplesyrup or honey until mixed.",
            "3. Close lid tightly and refrigerate overnight (at least 6 hours).",   
            "4. In the morning, stir and top with fruit if available.",
            "5. Enjoy cold — or microwave 45 sec to warm up."  
        ]
    },
    //Lunch Recipes
    {
        id: 8,
        title: "Microwave Quesadilla",
        description : "Cheesy, tender chicken folded into a tortilla—ready in minutes for a satisfying lunch.",
        category: "lunch",
        time: "4 min",
        cost: "$",
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop",
        ingredients: [
            "1 tortilla",
            "1/2 cup of shredded cheese",
            "1/2 cup of shredded rotisserie chicken",
        ],
        instructions: [
            "1. Place chicken and cheese on the tortilla.",
            "2. Fold and Microwave for 1-2 minutes.",
            "3. Cut into 4 pieces and serve.",
        ]
    },{
        id: 9,
        title: "Microwave Mac and Cheese",
        description : "Creamy, gooey macaroni and cheese you can make in a mug with just a few ingredients.",
        category: "lunch",
        time: "10 min ",
        cost: "$",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of pasta of choice",
            "1/2 cup of water",
            "1/4 cup of shredded cheese",
            "2 tbsp of milk of choice",
            "1 tsp of butter"
        ],
        instructions: [
            "1. Microwave the water and pasta for 3-4 minutes.",
            "2. Add the cheese and milk to the pasta and stir.",
            "3. Add the butter and stir.",
            "4. Serve and enjoy.",
        ]
    },
    {
        id: 10,
        title: "Microwave Baked Potato",
        description : "A fluffy baked potato you can top with cheese, sour cream, or any favorite toppings.",
        category: "lunch",
        time: "10 min ",
        cost: "$",
        image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&h=300&fit=crop",
        ingredients: [
            "1 potato",
            "1/2 cup of shredded cheese",
            "1/2 cup of sour cream",
            "1/2 cup of butter",
        ],
        instructions: [
            "1. Pierce the potato with a fork.",
            "2. Microwave the potato for 4-5 minutes until soft.",
            "3. Top with the cheese, sour cream, and butter.",
            "4. Serve and enjoy.",
        ]
    },
    {
        id: 11,
        title: "Microwave Pizza Bagel",
        description : "Quick pizza on a bagel with gooey cheese and toppings.",
        category: "lunch",
        time: "2 min ",
        cost: "$",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
        ingredients: [
            "1 bagel",
            "1/4 cup of shredded cheese",
            "1/4 cup of tomato sauce",
            "1/4 cup of pepperoni",
        ],
        instructions: [
            "1. Cut the bagel in half and spread tomato sauce on both sides.",
            "2. Add the cheese and pepperoni to the bagel.",
            "3. Microwave for 2 minutes.",
            "4. Serve and enjoy.",
        ]
    },
    {
        id: 12,
        title: "Microwave Spaghetti in a Mug",
        description : "Quick spaghetti without a pot, perfect for dorm cooking.",
        category: "lunch",
        time: "6-8 minutes ",
        cost: "$",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of spaghetti",
            "1/2 cup of water",
            "1/4 cup of shredded cheese",
            "1/4 cup of tomato sauce",
            "1 tsp of butter"
        ],
        instructions: [
            "1. Add the spaghetti, butterwater to a mug.",
            "2. Microwave for 6-8 minutes until soft.",
            "3. Add the cheese and tomato sauce to the spaghetti.",
            "4. Stir and enjoy.",
        ]
    },{
        id: 12,
        title: "Microwave Chicken and Rice",
        description : "Quick spaghetti without a pot, perfect for dorm cooking.",
        category: "lunch",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of chicken",
            "1/2 cup of rice",
            "1 tbsp of soy sauce",
            "1 tsp of butter"
        ],
        instructions: [
            "1. Mix chicken and cooked rice to a mug.",
            "2. Microwave for 3 minutes until soft.",
            "3. Add the soy sauce and stir.",
            "4. Serve and enjoy.",
        ]
    },{
        id: 13,
        title: "Microwave Veggie Fried Rice",
        description : "Quick fried rice with veggies and egg, ready in a single bowl.",
        category: "lunch",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        ingredients: [
            "1 cup of cooked rice",
            " a bag of frozen veggies",
            "1 egg",
            "1 tbsp of soy sauce"
        ],
        instructions: [
            "1. Microwave the rice and veggies for 3 minutes until soft.",
            "2. Add the egg and soy sauce to the rice and veggies and stir.",
            "3. Microwave for 2 minutes until the egg is cooked.",
            "3. Serve and enjoy.",
        ]
    },{
        id: 14,
        title: "Microwave Broccoli and Cheese Bowl",
        description : "Steamed broccoli with melted cheese for a simple, nutritious lunch.",
        category: "lunch",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        ingredients: [
            "1 cup of broccoli",
            "1/4 cup of shredded cheese",
            "2 tbspof milk of choice",
        ],
        instructions: [
            "1. Microwave the broccoli for 3 minutes until soft.",
            "2. Add the cheese and milk to the broccoli and stir.",
            "3. Microwave for 2 minutes until the cheese is melted.",
            "4. Serve and enjoy.",
        ]
    },
    // Dinner Recipes
    {
        id: 15,
        title: "Microwave Chicken alfredo pasta",
        description : "Creamy pasta with chicken and sauce, ready in under 10 minutes.",
        category: "dinner",
        time: "10 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", 
        ingredients: [
            "1/2 cup of pasta",
            "1/2 cup of cooked chicken",
            "1/4 cup of alfredo sauce",
            "1/4 cup of water",
        ],
        instructions: [
            "1. Place the pasta and water in a microwave-safe bowl and microwave for 5 minutes until the pasta is cooked.",
            "2. Add the chicken and sauce to the pasta and stir.",
            "3. Microwave for 3 minutes until the chicken is cooked.",,
            "4. Stir the pasta and chicken and sauce and enjoy.",
        ]
    },
    {
        id: 16,
        title: "Microwave Salmo with lemon herbs",
        description : "Flaky salmon fillet with fresh flavors, cooked in minutes.",
        category: "dinner",
        time: "6 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        ingredients: [
            "1 salmon fillet",
            "1/4 cup of lemon juice",
            "1/4 cup of herbs",
            "1 tsp of olive oil",
            "1 tsp of salt",
            "1 tsp of pepper"
        ],
        instructions: [
            "1. Place the salmon in a microwave-safe bowl and drizzle olive oil on top with lemon juice, salt, and pepper.",
            "2. Cover loosely and microwave for 5 minutes until the salmon is cooked.",
            "3. Serve and enjoy.",
        ]
        
    },
    {
        id: 17,
        title: "Microwave meatball Marinara",
        description : "Juicy meatballs in marinara sauce, served over pasta or alone.",
        category: "dinner",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of cooked meatballs",
            "1/2 cup of marinara sauce",
            "1/4 cup of pasta (optional)",
        ],
        instructions: [
            "1. Place the meatballs and marinara sauce in a microwave-safe bowl and stir.",
            "2. Microwave for 3 minutes until the meatballs are cooked.",
            "2. Add the pasta to the meatballs and sauce and stir.(optional)",
            "3. Microwave for 3 minutes until the pasta is cooked.(optional)",
            "4. Serve and enjoy.",
        ]   
    },
    {
        id: 18,
        title: "Microwave Stuffed Peppers",
        description : "Bell peppers filled with rice, beans, and cheese for a simple dinner.",
        category: "dinner",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
        ingredients: [  
            "1 bell pepper",
            "1/2 cup of rice",
            "1/2 cup of beans",
            "1/4 cup of cheese",
        ],
        instructions: [
            "1. Cut the bell pepper in half and remove the seeds.",
            "2. Add the rice, beans, and cheese to the bell pepper and stir.",
            "3. Microwave for 5 minutes until the rice, beans, and cheese are cooked.",
            "4. Serve and enjoy.",
        ]   
    },
    {
        id: 19,
        title: "Microwave Chicken Curry",
        description: "A simple, flavorful curry with chicken and a creamy sauce.",
        category: "dinner",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of cooked chicken",
            " 3 tbsp of curry sauce (or store bought)",
            "1/2 cup of frozen veggies",
        ],
        instructions: [
            "1. Place the chicken and curry sauce in a microwave-safe bowl.",
            "2. Microwave for 5 minutes until the chicken is cooked.",
            "3. Serve and enjoy.",
        ]   
    },
    {
        id: 20,
        title: "Microwave Veggie Lasagna in a Mug",
        description : "Layers of pasta, sauce, and veggies in a single-serving mug.",
        category: "dinner",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        ingredients: [
            " 2-3 small lasagna noodles",
            "1/2 cup of marinara sauce",
            "1/2 cup of frozen chopped veggies",
            "1/4 cup of shredded cheese",
        ],
        instructions: [
            "1. Break the noodles into smaller pieces and add to a microwave-safe bowl.",
            "2. Layer noodles, sauce, veggies, and cheese in the bowl.",
            "3. Microwave for 5 minutes until the noodles are cooked.",
            "4. Serve and enjoy.",
        ]   
    },
    {
        id: 21,
        title: "Microwave Veggie Chili",
        description : "Hearty, spicy chili with beans and veggies, perfect for a cozy dinner.",
        category: "dinner",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of beans of choice",
            "1/2 cup of caned diced tomatoes",
            "1/4 cup of corn",
            "1 tbsp of chili powder",
            "1 tsp of salt",
            "1 tsp of pepper",
            "1 tsp of garlic powder",
            "1 tsp of onion powder",
        ],
        instructions: [
            "1. Place the beans and veggies in a microwave-safe bowl and stir.",
            "2. Microwave for 5 minutes until the beans are cooked.",
            "3. Stir and microwave for 1 minute",
            "4. Serve and enjoy.",
        ]   
    },

    // Snack Recipes
    {
        id: 22,
        title: "Microwave Mug Brownie",
        description : "A single-serving chocolate brownie ready in under 2 minutes.",
        category: "snack" || "dessert",
        time: "3 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
        ingredients: [
            "1/4 cuup of flour",
            "2 tbsp of cocoa powder",
            "2 tbsp of sugar",
            "1 tbsp of oil"

            
        ],
        instructions: [
            "1. Add the flour, cocoa powder, sugar, and oil to a microwave-safe mug and stir.",
            "2. Microwave for 90 seconds until the brownie is cooked.",
            "3. Serve and enjoy.",
        ]
    },
    {
        id: 23,
        title: "Microwave Queso Dip",
        description : "A simple carrot cake bites with a side of fruit and a cup of soup.",
        category: "snack",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
        Ingredients: [
        "1/4 cup shredded cheese",
        "1 tbsp milk",
        "1/2 cup of salsa",
        ],
        instructions: [
            "1. Combine cheese and milk in microwave-safe bowl.",
            "2. Microwave 30–60 sec, stir, add salsa.",
        ]
    },
    {
        id: 24,
        title: "Microwave Apple Chips",
        description : "A simple apple chips with a side of fruit and a cup of soup.",
        category: "snack",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop",
        ingredients: [
            "1 apple",
            "1 tbsp of cinnamon",
        
        ],
        instructions: [
            "1. Peel the apple and slice it into thin chips.",
            "2. Add the cinnamon and sugar to the apple chips and stir.",
            "3. Microwave for 5 minutes until the apple chips are cooked.",
            "4. Serve and enjoy.",
        ]
    },  

    {
        id: 25,
        title: "Microwave Mug Cookie",
        description : "Single-serving chocolate chip cookie for instant dessert.",
        category: "snack" || "dessert",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
        ingredients: [
            "2 tbsp of flour",
            "1 tbsp of sugar",
            "1 tbsp of brown sugar",
            "1 tbspof butter",
            "3 tbsp of chocolate chips",
            "1 tsp of milk of choice"

        ],
        instructions: [
            "1. Add the flour, sugar, brown sugar, butter, chocolate chips, and milk to a microwave-safe mug and mix.",
            "2. Microwave for 1 minute-1:30 minutes until the cookie is cooked.",
            "3. Serve and enjoy.",
        ]
    },
    {
        id: 26,
        title: "Microwave Energy Bites",
        description : "No-bake bites with oats, peanut butter, and honey.",
        category: "snack",
        time: "30 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4cbc5f0a?w=400&h=300&fit=crop",
        ingredients: [
            "1/2 cup of oats",
            "1/2 cup of peanut butter",
            "2 tbsp of honey",
            "2 tbsp of chocolate chip (optional)",
        ],
        instructions: [
            "1. Add the oats, peanut butter, and honey to a bowl and mix.",
            "2. Mold into small bites and refrigerate for 30 minutes.",
            "3. Serve and enjoy.",
        ]
    },
    {
        id: 27,
        title: "Microwave Nachos",
        description : "Cheesy tortilla chips with quick toppings for an easy snack.",
        category: "snack",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1512163143273-bde1e11f4729?w=400&h=300&fit=crop",
        ingredients: [
            "1 tortilla chips",
            "1/4 cup of shredded cheese",
            "1/4 cup of salsa",
            "1/4 cup of sour cream",   
            
        ],
        instructions: [
            "1. Place the tortilla chips in a microwave-safe bowl and microwave for 1 minute.",
            "2. Add the cheese, salsa, and sour cream to the tortilla chips and stir.",
            "3. Microwave for 1 minute until the chips are cooked.",
            "4. Serve and enjoy.",
        ]
    }, 
    {
        id: 28,
        title: "Microwave Garlic Bread",
        description : "Quick and crispy garlic bread in minutes.",
        category: "snack",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",  
        ingredients: [
            "1 slice of bread",
            "1 tbsp of garlic",
            "1 tbsp of butter",
        ],
        instructions: [
            "1. Place the bread in a microwave-safe plate",
            "2. Add the garlic and butter to the bread and spread.",
            "3. Microwave for 30 seconds - 1 minute until the bread is cooked.",
            "4. Serve and enjoy.",
        ]
    },
    // Dessert Recipes
    {
        id: 29,
        title: "Microwave Chocolate lava cake",
        description :"Warm, gooey chocolate cake with molten center.",
        category: "dessert",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
        ingredients: [
            "3 tbsp  of flour",
            "3 tbsp of sugar",
            "2 tbsp of cocoa powder",
            "2 tbsp of butter",
            "2 tbsp of milk",
            "1 tbsp of oil"
        ],
        instructions: [
            "1. Add the flour, sugar, cocoa powder, butter, milk, and oil to a microwave-safe mug and stir.",
            "2. Microwave for 1 minute-1:15 minutes until the cake is cooked.",
            "3. Serve and enjoy.",
        ]
    },
    {
        id: 30,
        title: "Microwave Rice krispie treats",
        description : "Quick, sweet cereal treats without baking.",
        category: "dessert",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
        ingredients: [
            "2 cup of rice krispies",
            "1 cup of minimarshmallows",
            "2 tbsp of butter",
        ],
        instructions: [
            "1. Microwave butter and marshmallows for 1 minute.",
            "2. Add the rice krispies to the microwave-safe bowl and stir.",
            "3. Serve and enjoy.",
        ]
    },
    {
        id: 31,
        title: "Microwave S'more Mug",
        description : "Classic s’mores flavors in a mug.",
        category: "dessert",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
        ingredients: [
            "2 graham crackers squares",
            "1 tbsp of mini marshmallows",
            "1 tbsp of chocolate chips",
        ],
        instructions: [
            "1. Layer graham crackers, marshmallows, and chocolate chips in a microwave-safe mug.",
            "2. Microwave for 30-45 seconds until the marshmallows are melted.",
            "3. Serve and enjoy.",
        ]
    },
    {
        id: 33,
        title: "Microwave Cinnamon Roll Mug",
        description : "Sweet, gooey cinnamon roll ready in minutes.",
        category: "dessert",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
        ingredients: [
            "2 tbsp of flour",
            "1 tsp of sugar",
            "1/4 tsp of baking powder",
            "1/2 tsp cinnamon",
            "1 tbsp of milk"
            
        ],
        instructions: [
            "1. Add the flour, sugar, baking powder, cinnamon, and milk to a microwave-safe mug and stir.",
            "2. Microwave for 1 minute-1:15 minutes until the cake is cooked.",
            "3. Serve and enjoy.",
        ]
    },
    
    {
        id: 35,
        title: "Microwave Cheesecake Mug",
        description : "Mini cheesecake in minutes.",
        category: "dessert",
        time: "5 minutes ",
        cost: "$$",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
        ingredients: [
            "2 tbsp of cream cheese",
            "1 tbsp of sugar",
            "1 tbsp of crushed graham crackers",
            "1/2 tsp cinnamon",
            "1 tbsp of milk",
            "1 tsp of baking powder",
        ],
  
    instructions: [
        "1. Add the cream cheese, sugar, baking powder, cinnamon, and milk to a microwave-safe mug and stir.",
        "2. Microwave for 1 minute-1:30 minutes until the cake is cooked.",
        "3. Serve and enjoy.",  
    ] 
 }
];  
// DOM elements
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('headerSearchInput');
const heroSearchInput = document.getElementById('heroSearchInput');
const navLinks = document.querySelectorAll('.nav-link');
const noResults = document.getElementById('noResults');
const featuredRecipes = document.getElementById('featuredRecipes');
const trendingRecipes = document.getElementById('trendingRecipes');
const classicRecipes = document.getElementById('classicRecipes');
const categorySections = document.getElementById('categorySections');
const featuredSection = document.getElementById('featuredSection');
const allRecipesSection = document.getElementById('allRecipesSection');

// Check if we're on the index page
const isIndexPage = window.location.pathname.endsWith('index.html') || 
                   window.location.pathname.endsWith('/') ||
                   (!window.location.pathname.includes('.html') && window.location.pathname === '/');

let currentCategory = 'all';
let searchTerm = '';

// Category display names
const categoryNames = {
    breakfast: "Breakfast Recipes",
    lunch: "Lunch Recipes",
    dinner: "Dinner Recipes",
    snacks: "Snack Recipes",
    desserts: "Dessert Recipes"
};

// Recipe click tracking using localStorage
function getRecipeClickCounts() {
    const stored = localStorage.getItem('recipeClickCounts');
    return stored ? JSON.parse(stored) : {};
}

function incrementRecipeClick(recipeId) {
    const counts = getRecipeClickCounts();
    counts[recipeId] = (counts[recipeId] || 0) + 1;
    localStorage.setItem('recipeClickCounts', JSON.stringify(counts));
    return counts[recipeId];
}

function getRecipeClickCount(recipeId) {
    const counts = getRecipeClickCounts();
    return counts[recipeId] || 0;
}

// Make functions globally available for category pages
window.getRecipeClickCounts = getRecipeClickCounts;
window.incrementRecipeClick = incrementRecipeClick;
window.getRecipeClickCount = getRecipeClickCount;
window.createRecipeCard = createRecipeCard;
window.displayRecipes = displayRecipes;
window.displayTrendingRecipes = displayTrendingRecipes;
window.displayClassicRecipes = displayClassicRecipes;
window.showRecipeDetails = showRecipeDetails;

// Display featured recipes - optimized with document fragment
function displayFeaturedRecipes() {
    const featured = recipes.filter(r => r.featured).slice(0, 6);
    featuredRecipes.innerHTML = '';
    
    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    featured.forEach(recipe => {
        const card = createRecipeCard(recipe, true);
        fragment.appendChild(card);
    });
    featuredRecipes.appendChild(fragment);
}

// Display trending recipes in sidebar based on click counts
function displayTrendingRecipes() {
    const clickCounts = getRecipeClickCounts();
    
    // Get all recipes with their click counts
    const recipesWithCounts = recipes.map(recipe => ({
        ...recipe,
        clickCount: getRecipeClickCount(recipe.id)
    }));
    
    // Sort by click count (descending), then randomly select from top recipes
    recipesWithCounts.sort((a, b) => b.clickCount - a.clickCount);
    
    // Get top clicked recipes (top 15, or all if less than 15)
    const topRecipes = recipesWithCounts.slice(0, Math.min(15, recipesWithCounts.length));
    
    // Filter to only recipes with at least 1 click
    const clickedRecipes = topRecipes.filter(r => r.clickCount > 0);
    
    // If no recipes have been clicked, show random recipes
    let trending;
    if (clickedRecipes.length === 0) {
        // Shuffle all recipes and take 5
        const shuffled = [...recipes].sort(() => Math.random() - 0.5);
        trending = shuffled.slice(0, 5);
    } else if (clickedRecipes.length <= 5) {
        // If 5 or fewer clicked recipes, show all of them
        trending = clickedRecipes;
    } else {
        // Randomly select 5 from the top clicked recipes
        const shuffled = [...clickedRecipes].sort(() => Math.random() - 0.5);
        trending = shuffled.slice(0, 5);
    }
    
    trendingRecipes.innerHTML = '';
    
    if (trending.length === 0) {
        trendingRecipes.innerHTML = '<p style="color: #999; font-size: 0.9rem;">No trending recipes at the moment.</p>';
        return;
    }
    
    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    trending.forEach(recipe => {
        const item = document.createElement('a');
        item.className = 'trending-item';
        item.href = '#';
        item.onclick = (e) => {
            e.preventDefault();
            showRecipeDetails(recipe);
        };
        item.innerHTML = `
            <span class="title">${recipe.title}</span>
        `;
        fragment.appendChild(item);
    });
    trendingRecipes.appendChild(fragment);
}

// Display classic recipes in sidebar - optimized with document fragment
function displayClassicRecipes() {
    const classics = recipes.filter(r => r.classic).slice(0, 5);
    classicRecipes.innerHTML = '';
    
    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    classics.forEach(recipe => {
        const item = document.createElement('a');
        item.className = 'classic-item';
        item.href = '#';
        item.onclick = (e) => {
            e.preventDefault();
            showRecipeDetails(recipe);
        };
        item.innerHTML = `
            <span class="title">${recipe.title}</span>
        `;
        fragment.appendChild(item);
    });
    classicRecipes.appendChild(fragment);
}

// Display category sections - optimized with document fragments
function displayCategorySections() {
    categorySections.innerHTML = '';
    
    const categories = ['breakfast', 'lunch', 'dinner', 'snacks', 'desserts'];
    const fragment = document.createDocumentFragment();
    
    categories.forEach(category => {
        const categoryRecipes = recipes.filter(r => r.category === category).slice(0, 4);
        
        if (categoryRecipes.length === 0) return;
        
        const section = document.createElement('div');
        section.className = 'category-section';
        
        const title = document.createElement('h3');
        title.textContent = categoryNames[category];
        section.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'category-recipes-grid';
        
        // Use document fragment for cards
        const cardFragment = document.createDocumentFragment();
        categoryRecipes.forEach(recipe => {
            const card = createRecipeCard(recipe, false);
            cardFragment.appendChild(card);
        });
        grid.appendChild(cardFragment);
        section.appendChild(grid);
        fragment.appendChild(section);
    });
    
    categorySections.appendChild(fragment);
}

// Display recipes - optimized with document fragment
function displayRecipes(recipesToShow) {
    if (recipesToShow.length === 0) {
        recipesContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    recipesContainer.style.display = 'grid';
    noResults.style.display = 'none';
    recipesContainer.innerHTML = '';

    // Use document fragment for better DOM performance
    const fragment = document.createDocumentFragment();
    recipesToShow.forEach(recipe => {
        const card = createRecipeCard(recipe, false);
        fragment.appendChild(card);
    });
    recipesContainer.appendChild(fragment);
}

// Create recipe card
function createRecipeCard(recipe, isCompact = false) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Ensure title is always available
    const titleText = recipe.title || 'Untitled Recipe';
    
    // Use description if available, otherwise use a truncated version of instructions
    let descriptionText = recipe.description || '';
    if (!descriptionText && recipe.instructions) {
        const instructionsString = Array.isArray(recipe.instructions) 
            ? recipe.instructions.join(' ') 
            : recipe.instructions;
        descriptionText = instructionsString.length > 120
            ? instructionsString.substring(0, 120) + '...'
            : instructionsString;
    }
    
    // Ensure description always has content
    if (!descriptionText || descriptionText.trim() === '') {
        descriptionText = 'A delicious recipe you\'ll love!';
    }
    
    // Truncate description if too long
    if (descriptionText.length > 120) {
        descriptionText = descriptionText.substring(0, 120) + '...';
    }

    // Use image if available, otherwise show placeholder
    // Add lazy loading for better performance
    const imageHTML = recipe.image 
        ? `<img src="${recipe.image}" alt="${titleText}" class="recipe-card-image-img" loading="lazy">`
        : `<div class="recipe-card-image-placeholder">Recipe Idea</div>`;

    card.innerHTML = `
        <div class="recipe-card-image">${imageHTML}</div>
        <div class="recipe-card-content">
            <h3 class="recipe-card-title">${titleText}</h3>
            <p class="recipe-card-description">${descriptionText}</p>
            <div class="recipe-card-meta">
                <span>⏱ ${recipe.time || 'N/A'}</span>
                <span>💰 ${recipe.cost || 'N/A'}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        // Track recipe click
        if (recipe && recipe.id) {
            incrementRecipeClick(recipe.id);
        }
        showRecipeDetails(recipe);
    });
    return card;
}

// Show recipe details in a modal
function showRecipeDetails(recipe) {
    // Track recipe click
    if (recipe && recipe.id) {
        incrementRecipeClick(recipe.id);
    }
    
    // Remove existing modal if any
    const existingModal = document.getElementById('recipeModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'recipe-modal-overlay';
    modalOverlay.id = 'recipeModal';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    
    // Create ingredients list HTML
    const ingredientsList = recipe.ingredients.map(ing => 
        `<li>${ing}</li>`
    ).join('');
    
    modal.innerHTML = `
        <div class="recipe-modal-header">
            <div class="recipe-modal-title-section">
                <h2 class="recipe-modal-title">${recipe.title}</h2>
                <span class="recipe-modal-category">${recipe.category}</span>
                <div class="recipe-modal-meta">
                    <span>Time: ${recipe.time}</span>
                    <span>Cost: ${recipe.cost}</span>
                </div>
            </div>
            <button class="recipe-modal-close" aria-label="Close modal">&times;</button>
        </div>
        <div class="recipe-modal-content">
            <div class="recipe-modal-section">
                <h3 class="recipe-modal-section-title">Ingredients</h3>
                <ul class="recipe-modal-ingredients">
                    ${ingredientsList}
                </ul>
            </div>
            <div class="recipe-modal-section">
                <h3 class="recipe-modal-section-title">Instructions</h3>
                <div class="recipe-modal-instructions">
                    ${Array.isArray(recipe.instructions) 
                        ? recipe.instructions.map(step => `<p>${step}</p>`).join('')
                        : `<p>${recipe.instructions}</p>`}
                </div>
            </div>
        </div>
    `;
    
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    // Show modal with animation
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
    
    // Close modal handlers
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
    };
    
    // Close on button click
    modal.querySelector('.recipe-modal-close').addEventListener('click', closeModal);
    
    // Close on overlay click (but not on modal content)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable body scroll when modal closes
    const originalOverflow = document.body.style.overflow;
    const observer = new MutationObserver(() => {
        if (!document.getElementById('recipeModal')) {
            document.body.style.overflow = originalOverflow;
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true });
}

// Filter recipes
function filterRecipes() {
    let filtered = recipes;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(recipe => recipe.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm && searchTerm.trim()) {
        const term = searchTerm.toLowerCase().trim();
        filtered = filtered.filter(recipe => {
            // Search in title
            const titleMatch = recipe.title.toLowerCase().includes(term);
            
            // Search in description
            const descriptionMatch = recipe.description 
                ? recipe.description.toLowerCase().includes(term)
                : false;
            
            // Search in ingredients
            const ingredientsMatch = recipe.ingredients && Array.isArray(recipe.ingredients)
                ? recipe.ingredients.some(ing => ing.toLowerCase().includes(term))
                : false;
            
            // Search in instructions
            const instructionsText = Array.isArray(recipe.instructions) 
                ? recipe.instructions.join(' ').toLowerCase()
                : (recipe.instructions ? recipe.instructions.toLowerCase() : '');
            const instructionsMatch = instructionsText.includes(term);
            
            // Search in category
            const categoryMatch = recipe.category ? recipe.category.toLowerCase().includes(term) : false;
            
            return titleMatch || descriptionMatch || ingredientsMatch || instructionsMatch || categoryMatch;
        });
    }

    // Show/hide sections based on filters
    const hasActiveFilters = (currentCategory !== 'all') || (searchTerm && searchTerm.trim());
    
    if (hasActiveFilters && featuredSection && categorySections && allRecipesSection) {
        featuredSection.style.display = 'none';
        categorySections.style.display = 'none';
        allRecipesSection.style.display = 'block';
        displayRecipes(filtered);
    } else if (featuredSection && categorySections && allRecipesSection) {
        featuredSection.style.display = 'block';
        categorySections.style.display = 'block';
        allRecipesSection.style.display = 'none';
    } else if (recipesContainer) {
        // For category pages
        displayRecipes(filtered);
    }
}

// Navigation click handler - only set up if navLinks exist
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default if it's a filter link (has data-category) and we're on index.html
            const hasCategory = link.getAttribute('data-category');
            
            if (hasCategory && isIndexPage) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                currentCategory = link.getAttribute('data-category');
                filterRecipes();
            }
            // Otherwise, let the link navigate normally
        });
    });
}

// Footer category links
document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        const navLink = document.querySelector(`.nav-link[data-category="${category}"]`);
        if (navLink) {
            navLink.click();
        }
    });
});

// Debounce function for search optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to perform search
function performSearch(term) {
    searchTerm = term;
    // Sync both search inputs
    if (searchInput) searchInput.value = term;
    if (heroSearchInput) heroSearchInput.value = term;
    filterRecipes();
}

// Debounced search function
const debouncedSearch = debounce((term) => {
    performSearch(term);
}, 300);

// Search input handlers with debouncing
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value;
        searchTerm = term;
        if (heroSearchInput) heroSearchInput.value = term;
        debouncedSearch(term);
    });
    
    // Allow Enter key to search immediately (no debounce)
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(e.target.value);
        }
    });
}

if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => {
        const term = e.target.value;
        searchTerm = term;
        if (searchInput) searchInput.value = term;
        debouncedSearch(term);
    });
    
    // Allow Enter key to search immediately (no debounce)
    heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(e.target.value);
        }
    });
}

// Search button handlers
const searchButtons = document.querySelectorAll('.search-btn');
searchButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Get value from the closest search input
        const searchContainer = button.closest('.nav-search') || button.closest('.hero-search');
        if (searchContainer) {
            const input = searchContainer.querySelector('input[type="text"]');
            if (input) {
                performSearch(input.value);
            }
        }
    });
});

// Subscribe form handler
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.querySelector('input[type="email"]').value;
        alert(`Thanks for subscribing! We'll send recipes to ${email}`);
        subscribeForm.reset();
    });
}

// Initialize - only run on index page
if (isIndexPage && featuredRecipes && categorySections) {
    displayFeaturedRecipes();
    displayTrendingRecipes();
    displayClassicRecipes();
    displayCategorySections();
} else if (trendingRecipes && classicRecipes) {
    // On category pages, just show sidebar content
    displayTrendingRecipes();
    displayClassicRecipes();
}
