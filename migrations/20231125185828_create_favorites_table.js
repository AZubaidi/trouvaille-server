/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.integer('user_id')
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

    table.primary(['user_id', 'point_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites');
};
