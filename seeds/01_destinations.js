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
      photo: 'https://lp-cms-production.imgix.net/2023-07/GettyImages-808144682.jpeg?auto=format&w=1440&h=810&fit=crop&q=75',
      category: '050',
    },
    {
      id: 2,
      name: 'Maui',
      country: 'Hawaii',
      photo: 'https://a.cdn-hotels.com/gdcs/production81/d1269/0cffe15a-7fdf-4e75-9415-92eaf78e2f73.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      category: '050',
    },
    {
      id: 3,
      name: 'Rome',
      country: 'Italy',
      photo: 'https://cdn.audleytravel.com/1050/750/79/1018521-rome-skyline-italy.webp',
      category: '325',
    },
    {
      id: 4,
      name: 'Tokyo',
      country: 'Japan',
      photo: 'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg',
      category: '433',
    },
    {
      id: 5,
      name: 'Dubrovnik',
      country: 'Croatia',
      photo: 'https://lp-cms-production.imgix.net/2021-06/shutterstockRF_662032261.jpg',
      category: '144',
    },
    {
      id: 6,
      name: 'Shenzhen',
      country: 'China',
      photo: 'https://assets.euromoneydigital.com/d6/a9/9dffaf2742409f1ccaa58f1d9bab/shenzhen-alamy-31aug23.jpg',
      category: '522',
    },
  ]);
};
