const User = require('./User');
const Category = require('./Post');
const BudgetItem = require('./BudgetItem');
const Income = require('./Income');

//create associations
User.hasMany(Category, {
    foreignKey: 'user_id'
});
User.belongsToMany(Income, {
    foreignKey: 'user_id'
});

User.hasMany(BudgetItem, {
  foreignKey: 'user_id'
});

Category.belongsToMany(BudgetItem, {
  foreignKey: 'category_id'
});

BudgetItem.hasOne(Category, {
  foreignKey: 'category_id'
});

Income.belongsTo(User, {
  foreignKey: 'user_id'
});

Income.hasOne(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Category, BudgetItem, Income };



