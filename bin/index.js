#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const emoji = require('node-emoji')
const yargs = require('yargs')

const ingredients = {
  'chicken breast': [8, 'ounce', 'Meat, Poultry, Fish, & Eggs'],
  'barbeque sauce': [3, 'ounce', 'Condiments & Spices'],
  'low fat chicken marinade': [4, 'ounce', 'Condiments & Spices'],
  'long grain wild rice': [6, 'ounce', 'Bread & Grains'],
  'chicken broth': [8, 'ounce', 'Condiments & Spices'],
  'frozen mixed stir-fry vegetables': [100, 'gram', 'Fruits & Vegetables'],
  'no soy light sodium soy sauce': [10, 'milliliter', 'Condiments & Spices'],
  'salt': [1, 'gram', 'Condiments & Spices'],
  'pepper': [1, 'gram', 'Condiments & Spices'],
  'minced ginger': [1, 'ounce', 'Condiments & Spices'],
  'minced garlic': [1, 'ounce', 'Condiments & Spices'],
  'chocolate chips': [300, 'gram', 'Sweets'],
  'coffee grinds': [25, 'gram', 'Condiments & Spices'],
  'sugar': [100, 'gram', 'Condiments & Spices'],
  'flour': [400, 'gram', 'Condiments & Spices'],
  'vanilla ice-cream': [1, 'quart', 'Sweets'],
  'unsalted butter': [2, 'tablespoon', 'Fats'],
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
    borderColor: "cyan",
    backgroundColor: "#555555"
   };

const emojis = {
  'Meat, Poultry, Fish, & Eggs':[
    emoji.get(':cow:'),
    emoji.get(':chicken:'),
    emoji.get(':fish:'),
    emoji.get(':egg:'),
    emoji.get(':pig:'),
    emoji.get(':octopus:')
  ],
  'Bread & Grains': [
    emoji.get(':bread:'),
    emoji.get(':rice:'),
    emoji.get(':bread:'),
    emoji.get(':rice:'),
    emoji.get(':bread:'),
    emoji.get(':rice:')
  ],
  'Fats': [
    emoji.get(':fork_and_knife:'),
    emoji.get(':yum:'),
    emoji.get(':fork_and_knife:'),
    emoji.get(':fork_and_knife:'),
    emoji.get(':yum:'),
    emoji.get(':fork_and_knife:')
  ],
  'Fruits & Vegetables': [
    emoji.get(':corn:'),
    emoji.get(':lemon:'),
    emoji.get(':pineapple:'),
    emoji.get(':apple:'),
    emoji.get(':sweet_potato:'),
    emoji.get(':tomato:')
  ],
  'Drinks': [
    emoji.get(':tropical_drink:'),
    emoji.get(':coffee:'),
    emoji.get(':beers:'),
    emoji.get(':tea:'),
    emoji.get(':sake:'),
    emoji.get(':cocktail:')
  ],
  'Condiments & Spices': [
    emoji.get(':fork_and_knife:'),
    emoji.get(':honey_pot:'),
    emoji.get(':fork_and_knife:'),
    emoji.get(':fork_and_knife:'),
    emoji.get(':herb:'),
    emoji.get(':fork_and_knife:')
  ],
  'Sweets': [
    emoji.get(':ice_cream:'),
    emoji.get(':doughnut:'),
    emoji.get(':candy:'),
    emoji.get(':cake:'),
    emoji.get(':chocolate_bar:'),
    emoji.get(':cookie:')
  ]
}

const header = chalk.magenta.bold.bgCyanBright(`${emoji.get(':fork_and_knife:')} ${emoji.get(':yum:')} ${emoji.get(':fork_and_knife:')} SHOPPING LIST ${emoji.get(':fork_and_knife:')} ${emoji.get(':yum:')} ${emoji.get(':fork_and_knife:')}`)

emoji.get(':fork_and_knife:')

const list = `${header}\n${Object.keys(categorizedIngredients).reduce((
  fullList, category) => {
    const formattedCategory = chalk.cyanBright.bold.underline.bgMagenta(`${emojis[category][0]} ${emojis[category][1]} ${emojis[category][2]} ${category} ${emojis[category][3]} ${emojis[category][4]} ${emojis[category][5]}`) 
    fullList += `${formattedCategory} \n${categorizedIngredients[category].reduce(
      (subList, ingredient) => {
        subList += `- ${ingredients[ingredient][0]} ${ingredients[ingredient][1]} ${ingredient} \n`;
        return subList;
      },'')}`;
  return fullList;
}, "")}`.trimEnd();

const boxed = boxen(list, boxenOptions);

console.log(boxed);
