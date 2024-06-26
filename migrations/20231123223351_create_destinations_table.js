/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return knex.schema.createTable('destinations', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('country');
    table.string('photo').notNullable();
    table.string('category').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('destinations');
};
