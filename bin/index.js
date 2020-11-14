#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const ingredients = {
  'chicken breast': [8, 'ounce', 'Meat, Poulty, Fish, and Eggs'],
  'barbeque sauce': [3, 'ounce', 'Condiments and Spices'],
  'low fat chicken marinade': [4, 'ounce', 'Condiments and Spices'],
  'long grain wild rice': [6, 'ounce', 'Bread and Grains'],
  'chicken broth': [8, 'ounce', 'Condiments and Spices'],
  'frozen mixed stir-fry vegetables': [100, 'gram', 'Fruits and Vegetables'],
  'no soy light sodium soy sauce': [10, 'milliliter', 'Condiments and Spices'],
  'salt': [1, 'gram', 'Condiments and Spices'],
  'pepper': [1, 'gram', 'Condiments and Spices'],
  'minced ginger': [1, 'ounce', 'Condiments and Spices'],
  'minced garlic': [1, 'ounce', 'Condiments and Spices'],
  'chocolate chips': [300, 'gram', 'Sweets'],
  'coffee grinds': [25, 'gram', 'Condiments and Spices'],
  'sugar': [100, 'gram', 'Condiments and Spices'],
  'flour': [400, 'gram', 'Condiments and Spices'],
  'vanilla ice-cream': [1, 'quart', 'Sweets'],
  'unslated butter': [2, 'tablespoon', 'Fats'],
};

const categorizedIngredients = Object.keys(ingredients).reduce(
  (acc, ingredient) => {
    const ingredientCategory = ingredients[ingredient][2];
    acc[ingredientCategory]
      ? acc[ingredientCategory].push(ingredient)
      : (acc[ingredientCategory] = [ingredient]);
    return acc;
  },
  {}
);

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
   };

const intro = chalk.green.bold(`You're going to need:`)

const list = `${intro}\n${Object.keys(categorizedIngredients).reduce((
  fullList, category) => {
    fullList += `${category} \n${categorizedIngredients[category].reduce(
      (subList, ingredient) => {
        subList += `- ${ingredients[ingredient][0]} ${ingredients[ingredient][1]} ${ingredient} \n`;
        return subList;
      },'')}`;
  return fullList;
}, "")}`.trimEnd();

const boxed = boxen(list, boxenOptions);

console.log(boxed);
