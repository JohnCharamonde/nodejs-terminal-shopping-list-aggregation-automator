const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipes', { useNewUrlParser: true });

const recipeSchema = mongoose.Schema({
    name: String,
    serves: Number,
    time: Number,
    ingredients: Object,
    directions: String
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db')
});

const Recipe = db.model('Recipe', recipeSchema);

module.exports = Recipe;
