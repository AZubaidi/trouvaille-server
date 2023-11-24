/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('destinations').del();
  await knex('destinations').insert([
    {
      id: 1,
      name: 'Swiss Alps',
      country: 'Switzerland',
      photo: 'image.jpg',
      category: '050',
    },
    {
      id: 2,
      name: 'Maui',
      country: 'Hawaii',
      photo: 'image.jpg',
      category: '050',
    },
    {
      id: 3,
      name: 'Rome',
      country: 'Italy',
      photo: 'image.jpg',
      category: '325',
    },
    {
      id: 4,
      name: 'Tokyo',
      country: 'Japan',
      photo: 'image.jpg',
      category: '433',
    },
    {
      id: 5,
      name: 'Dubrovnik',
      country: 'Croatia',
      photo: 'image.jpg',
      category: '144',
    },
    {
      id: 6,
      name: 'Shenzhen',
      country: 'China',
      photo: 'image.jpg',
      category: '522',
    },
  ]);
};
