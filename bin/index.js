#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const ingredients = {
    'chicken breast': [8, 'oz.', 'meat/fish'],
    'barbeque sauce': [3, 'oz.', 'sauce'],
    'low fat chicken marinade': [4, 'oz.', 'sauce'],
    'long grain wild rice': [6, 'oz.', 'carb'],
    'chicken broth': [8, 'oz.', 'sauce'],
    'frozen mixed stir-fry vegetables': [100, 'grams', 'vegetables'],
    'no soy, light sodium soy sauce': [1, 'splash', 'sauce'],
    'salt': ['to taste', '', 'seasoning'],
    'pepper': ['to taste', '', 'seasoning'],
    'minced ginger': [1, 'oz.', 'seasoning'],
    'minced garlic': [1, 'oz.', 'seasoning'],
    'yogurt': [6, 'oz', 'snack']
}

const list = `You're going to need:\n${
  Object.keys(ingredients).reduce((acc, ingredient) => {
      acc += `- ${ingredients[ingredient][0]} ${ingredients[ingredient][1]} ${ingredient}\n`
      return acc;
      }, '')}
`.trimEnd();

console.log(list)