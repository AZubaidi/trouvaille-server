/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return knex.schema.createTable('points', (table) => {
    table.increments('id').primary();
    table
      .integer('destination_id')
      .unsigned()
      .references('destinations.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name').notNullable();
    table.string('category').notNullable();
    table.string('photo').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('points');
};
