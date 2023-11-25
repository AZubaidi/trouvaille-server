/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('destinations'), (table) => {
    table.integer('user_id, point_id').primary();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('point_id')
      .unsigned()
      .references('points.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('points');
};
