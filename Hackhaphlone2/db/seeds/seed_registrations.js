/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('registrations')
  .del()
  .then (function () {
    return knex('registrations').insert([
      {name: 'john', email: 'john@'},
      {name: 'Doe', email: 'doe@'},
    ])
  });
};
