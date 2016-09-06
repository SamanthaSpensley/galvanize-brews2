
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', (table) => {
    table.increments();
    table.string('brewery');
    table.string('name');
    table.decimal('abv');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beers')
};
