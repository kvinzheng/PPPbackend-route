/* eslint func-names: ["error", "never"]*/
/* eslint linebreak-style: ["error", "windows"]*/
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable()
    .defaultTo('');
    table.string('last_name').notNullable()
    .defaultTo('');
    table.string('email').unique()
    .notNullable();
    table.string('profile_picture').notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
