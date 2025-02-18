// recipe.js

'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    // Update your initial recipes
    const recipes = [
      {
        name: 'Chicken Stir Fry',
        steps: '1. Slice chicken breast into thin strips...',
        userId: '1',
        prepTime: 30,
        cookTime: 45,
        totalTime: 75,
        cuisineType: 'Chinese',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spaghetti Carbonara',
        steps: '1. Bring a large pot of salted water to boil. 2. While water heats, dice guanciale and beat eggs with grated pecorino cheese in a bowl. 3. Cook pasta until al dente, about 8-10 minutes. 4. In a separate pan, crisp guanciale until golden brown. 5. Drain pasta, reserving 1/2 cup pasta water. 6. Quickly toss hot pasta with egg mixture and guanciale, adding pasta water as needed. 7. Season generously with freshly ground black pepper and serve immediately',
        userId: '2',
        prepTime: 15,
        cookTime: 20,
        totalTime: 35,
        cuisineType: 'Italian',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Replace Beef Bulgogi with:
      {
        name: 'Korean BBQ Short Ribs (Galbi)',
        steps: '1. Blend Asian pear, garlic, and ginger until smooth. 2. Mix with soy sauce, brown sugar, and sesame oil. 3. Score the meat in a diamond pattern. 4. Marinate ribs for 4 hours or overnight. 5. Grill on high heat for 3-4 minutes per side. 6. Rest for 5 minutes. 7. Garnish with sliced green onions',
        userId: '3',
        prepTime: 30,
        cookTime: 10,
        totalTime: 40,
        cuisineType: 'Korean',
        image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vietnamese Pho',
        steps: '1. Simmer bones and spices for broth. 2. Cook rice noodles. 3. Slice beef very thin. 4. Assemble bowls with noodles and beef. 5. Pour hot broth over. 6. Serve with herbs and condiments',
        userId: '1',
        prepTime: 30,
        cookTime: 180,
        totalTime: 210,
        cuisineType: 'Vietnamese',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spanish Paella',
        steps: '1. Toast rice with sofrito. 2. Add saffron-infused broth. 3. Add chicken and cook. 4. Add seafood. 5. Create socarrat. 6. Rest and serve',
        userId: '3',
        prepTime: 35,
        cookTime: 45,
        totalTime: 80,
        cuisineType: 'Spanish',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'French Coq au Vin',
        steps: '1. Brown chicken pieces. 2. Cook bacon and vegetables. 3. Add wine and herbs. 4. Simmer until tender. 5. Thicken sauce. 6. Garnish and serve',
        userId: '1',
        prepTime: 30,
        cookTime: 90,
        totalTime: 120,
        cuisineType: 'French',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thai Green Curry',
        steps: '1. Heat coconut cream until oil separates. 2. Fry green curry paste until fragrant. 3. Add chicken and cook until sealed. 4. Add remaining coconut milk and simmer. 5. Add vegetables and cook until tender. 6. Season with fish sauce and palm sugar. 7. Garnish with Thai basil',
        userId: '1',
        prepTime: 20,
        cookTime: 30,
        totalTime: 50,
        cuisineType: 'Thai',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mediterranean Grilled Salmon',
        steps: '1. Mix olive oil, lemon juice, herbs, and garlic. 2. Marinate salmon for 30 minutes. 3. Preheat grill to medium-high. 4. Grill salmon for 4-5 minutes per side. 5. Top with capers and serve with lemon wedges',
        userId: '2',
        prepTime: 35,
        cookTime: 10,
        totalTime: 45,
        cuisineType: 'Mediterranean',
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vegetarian Pad Thai',
        steps: '1. Soak noodles in warm water. 2. Press and cube tofu. 3. Make sauce with tamarind, palm sugar, and soy sauce. 4. Stir-fry tofu until golden. 5. Add noodles and sauce. 6. Toss with bean sprouts and peanuts. 7. Serve with lime wedges',
        userId: '3',
        prepTime: 25,
        cookTime: 15,
        totalTime: 40,
        cuisineType: 'Thai',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classic Margherita Pizza',
        steps: '1. Preheat oven to 500°F with pizza stone. 2. Stretch dough into circle. 3. Top with crushed tomatoes. 4. Add torn mozzarella pieces. 5. Bake until crust is golden. 6. Garnish with fresh basil and olive oil',
        userId: '1',
        prepTime: 20,
        cookTime: 12,
        totalTime: 32,
        cuisineType: 'Italian',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Japanese Ramen',
        steps: '2. Prepare broth with dashi and seasonings. 2. Cook pork belly until tender. 3. Boil noodles according to package. 4. Soft-boil eggs. 5. Assemble bowls with broth, noodles, and toppings. 6. Garnish with green onions and nori',
        userId: '8',
        prepTime: 30,
        cookTime: 60,
        totalTime: 90,
        cuisineType: 'Japanese',
        image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indian Butter Chicken',
        steps: '1. Marinate chicken in yogurt and spices. 2. Grill or bake chicken pieces. 3. Prepare sauce with butter, tomatoes, and cream. 4. Add cooked chicken to sauce. 5. Simmer until thick. 6. Finish with cream and fenugreek',
        userId: '3',
        prepTime: 40,
        cookTime: 30,
        totalTime: 70,
        cuisineType: 'Indian',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mexican Street Tacos',
        steps: '1. Marinate and grill steak. 2. Warm tortillas on griddle. 3. Chop meat, onions, and cilantro. 4. Assemble tacos. 5. Serve with lime wedges and salsa',
        userId: '1',
        prepTime: 25,
        cookTime: 15,
        totalTime: 40,
        cuisineType: 'Mexican',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moroccan Tagine',
        steps: '1. Brown lamb in a tagine. 2. Add onions and garlic. 3. Stir in spices and saffron. 4. Add apricots and almonds. 5. Simmer until tender. 6. Serve with couscous',
        userId: '4',
        prepTime: 20,
        cookTime: 120,
        totalTime: 140,
        cuisineType: 'Moroccan',
        image: 'https://images.unsplash.com/photo-1604908177525-1d5b4f8b9f8e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brazilian Feijoada',
        steps: '1. Soak beans overnight. 2. Cook meats until browned. 3. Add beans and bay leaves. 4. Simmer until beans are tender. 5. Serve with orange slices and rice',
        userId: '5',
        prepTime: 30,
        cookTime: 180,
        totalTime: 210,
        cuisineType: 'Brazilian',
        image: 'https://images.unsplash.com/photo-1604908177525-1d5b4f8b9f8e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Russian Borscht',
        steps: '1. Boil beets until tender. 2. Sauté onions and carrots. 3. Add cabbage and potatoes. 4. Stir in beets and broth. 5. Simmer until vegetables are tender. 6. Serve with dill and sour cream',
        userId: '6',
        prepTime: 20,
        cookTime: 60,
        totalTime: 80,
        cuisineType: 'Russian',
        image: 'https://images.unsplash.com/photo-1604908177525-1d5b4f8b9f8e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ethiopian Doro Wat',
        steps: '1. Sauté onions until caramelized. 2. Add garlic, ginger, and berbere. 3. Stir in chicken and butter. 4. Simmer until chicken is cooked. 5. Add boiled eggs. 6. Serve with injera',
        userId: '7',
        prepTime: 30,
        cookTime: 90,
        totalTime: 120,
        cuisineType: 'Ethiopian',
        image: 'https://images.unsplash.com/photo-1604908177525-1d5b4f8b9f8e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Turkish Baklava',
        steps: '1. Layer phyllo with butter and walnuts. 2. Bake until golden. 3. Boil honey and cinnamon. 4. Pour syrup over baked layers. 5. Cool before serving',
        userId: '8',
        prepTime: 45,
        cookTime: 30,
        totalTime: 75,
        cuisineType: 'Turkish',
        image: 'https://images.unsplash.com/photo-1604908177525-1d5b4f8b9f8e',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('recipes', recipes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};