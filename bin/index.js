#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const ingredients = {
    'chicken breast': [8, 'oz.', 'meat, poulty, fish, and eggs'],
    'barbeque sauce': [3, 'oz.', 'condiments and spices'],
    'low fat chicken marinade': [4, 'oz.', 'condiments and spices'],
    'long grain wild rice': [6, 'oz.', 'bread and grains'],
    'chicken broth': [8, 'oz.', 'condiments and spices'],
    'frozen mixed stir-fry vegetables': [100, 'grams', 'fruits and vegetables'],
    'no soy, light sodium soy sauce': [1, 'splash', 'condiments and spices'],
    'salt': ['to taste', '', 'condiments and spices'],
    'pepper': ['to taste', '', 'condiments and spices'],
    'minced ginger': [1, 'oz.', 'condiments and spices'],
    'minced garlic': [1, 'oz.', 'Condiments and Spices'],
    'chocolate chips': [300, 'grams', 'Sweets'],
    'coffee grinds': [25, 'grams', 'Condiments and Spices'],
    'sugar': [100, 'grams', 'Condiments and Spices'],
    'flour': [400, 'grams', 'Condiments and Spices'],
    'vanilla ice-cream': [1, 'quart', 'Sweets'],
    'unslated butter': [1, 'stick', 'Fats']
  };
  
  
  const categorizedIngredients = Object.keys(ingredients).reduce((acc, ingredient) => {
      const ingredientCategory = ingredients[ingredient][2];
      acc[ingredientCategory] ? acc[ingredientCategory].push(ingredient) : acc[ingredientCategory] = [ingredient];
      return acc;
    }, {});
  
  const list = `You're going to need:\n${
    Object.keys(categorizedIngredients).reduce((fullList, category) => {
      fullList += `${category} \n ${categorizedIngredients[category].reduce((subList, ingredient) => {
        subList += `- ${ingredient} \n`
        return subList
      }, '')}`
      return fullList;
    }, '')}`.trimEnd();
  
  console.log(list)