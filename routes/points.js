/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('points').del();
  await knex('points').insert([
    {
      id: 1,
      destination_id: 1,
      name: 'Lauterbrunnen',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 2,
      destination_id: 1,
      name: 'Interlaken',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 3,
      destination_id: 1,
      name: 'Saint Moritz',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 4,
      destination_id: 1,
      name: 'Mürren',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 5,
      destination_id: 2,
      name: 'Haleakala National Park',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 6,
      destination_id: 2,
      name: 'Pipiwai Trail',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 7,
      destination_id: 2,
      name: 'Kapalua Coastal Trail',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 8,
      destination_id: 2,
      name: 'Road to Hana',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 9,
      destination_id: 3,
      name: 'Colosseum',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 11,
      destination_id: 3,
      name: 'Sisten Chapel',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 12,
      destination_id: 3,
      name: 'St. Peter\'s Basilica',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 13,
      destination_id: 3,
      name: 'Roman Forum',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 14,
      destination_id: 4,
      name: 'Odaiba',
      photo: 'image.jpg',
      category: 'Urban',
    },
    {
      id: 15,
      destination_id: 4,
      name: 'Meiji Shrine',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 16,
      destination_id: 4,
      name: 'Ginza',
      photo: 'image.jpg',
      category: 'Urban',
    },
    {
      id: 17,
      destination_id: 5,
      name: 'Stradun',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 18,
      destination_id: 5,
      name: 'Walls of Dubrovnik',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 19,
      destination_id: 5,
      name: 'Fort Lovrijenac',
      photo: 'image.jpg',
      category: 'Historical',
    },
    {
      id: 20,
      destination_id: 5,
      name: 'Lokrum Island',
      photo: 'image.jpg',
      category: 'Rustic',
    },
    {
      id: 21,
      destination_id: 6,
      name: 'Window of the World',
      photo: 'image.jpg',
      category: 'Urban',
    },
    {
      id: 22,
      destination_id: 6,
      name: 'Shenzhen Bay Park',
      photo: 'image.jpg',
      category: 'Urban',
    },
    {
      id: 23,
      destination_id: 6,
      name: 'Downtown Shenzhen',
      photo: 'image.jpg',
      category: 'Urban',
    },
  ]);
};
