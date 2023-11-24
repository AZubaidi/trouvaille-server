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
      photo: 'https://switzerland-tour.com/storage/media/Lauterbrunnen/Lauterbrunnen-Switzerland.jpg',
      category: 'Rustic',
    },
    {
      id: 2,
      destination_id: 1,
      name: 'Interlaken',
      photo: 'https://cdn.audleytravel.com/3663/2616/79/15986030-interlaken.jpg',
      category: 'Rustic',
    },
    {
      id: 3,
      destination_id: 1,
      name: 'Saint Moritz',
      photo: 'https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-St-Moritz-Switzerland.jpg',
      category: 'Rustic',
    },
    {
      id: 4,
      destination_id: 1,
      name: 'Mürren',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/1_M%C3%BCrren_2022.jpg',
      category: 'Rustic',
    },
    {
      id: 5,
      destination_id: 2,
      name: 'Haleakala National Park',
      photo: 'https://cdn.outsideonline.com/wp-content/uploads/2022/12/haleakala-crater-slidingsands_h.jpg',
      category: 'Rustic',
    },
    {
      id: 6,
      destination_id: 2,
      name: 'Pipiwai Trail',
      photo: 'https://media.cntraveler.com/photos/6024b3fb4d93029314bff2b2/16:9/w_2560,c_limit/1034528500',
      category: 'Rustic',
    },
    {
      id: 7,
      destination_id: 2,
      name: 'Kapalua Coastal Trail',
      photo: 'https://www.parrishmaui.com/wp-content/uploads/2022/05/Kapalua-Coastal-Trail-Parrish-Maui-1.jpg',
      category: 'Rustic',
    },
    {
      id: 8,
      destination_id: 2,
      name: 'Road to Hana',
      photo: 'https://www.lovebigisland.com/wp-content/uploads/road-to-hana-panorama.jpg',
      category: 'Rustic',
    },
    {
      id: 9,
      destination_id: 3,
      name: 'Colosseum',
      photo: 'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg',
      category: 'Historical',
    },
    {
      id: 11,
      destination_id: 3,
      name: 'Sisten Chapel',
      photo: 'https://vcdn-dulich.vnecdn.net/2023/07/26/1-1162-1690342369.jpg',
      category: 'Historical',
    },
    {
      id: 12,
      destination_id: 3,
      name: 'St. Peter\'s Basilica',
      photo: 'https://travel.usnews.com/images/St_Peters_Basilica_Joe_Price_Getty.jpg',
      category: 'Historical',
    },
    {
      id: 13,
      destination_id: 3,
      name: 'Roman Forum',
      photo: 'https://travel.usnews.com/images/Vladislav_ZolotovGetty_Images2_YDl5rGc.jpg',
      category: 'Historical',
    },
    {
      id: 14,
      destination_id: 4,
      name: 'Odaiba',
      photo: 'https://content.fun-japan.jp/renewal-prod/cms/articles/content/01jpg_2023-07-11-09-30-34.jpg',
      category: 'Urban',
    },
    {
      id: 15,
      destination_id: 4,
      name: 'Meiji Shrine',
      photo: 'https://media.cnn.com/api/v1/images/stellar/prod/181025150012-meiji-shrine-3.jpg?q=w_4240,h_2744,x_0,y_0,c_fill',
      category: 'Historical',
    },
    {
      id: 16,
      destination_id: 4,
      name: 'Ginza',
      photo: 'https://www.japan-guide.com/g18/3005_02.jpg',
      category: 'Urban',
    },
    {
      id: 17,
      destination_id: 5,
      name: 'Stradun',
      photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f6/72/4c/photo1jpg.jpg?w=1200&h=1200&s=1',
      category: 'Historical',
    },
    {
      id: 18,
      destination_id: 5,
      name: 'Walls of Dubrovnik',
      photo: 'https://www.abroadwithash.com/wp-content/uploads/2021/08/Dubrovnik-Walls-Pile-Bay.jpg?lossy=1&ssl=1',
      category: 'Historical',
    },
    {
      id: 19,
      destination_id: 5,
      name: 'Fort Lovrijenac',
      photo: 'https://www.historyhit.com/app/uploads/2020/11/Fort-Lovrijenac.jpg',
      category: 'Historical',
    },
    {
      id: 20,
      destination_id: 5,
      name: 'Lokrum Island',
      photo: 'https://images.squarespace-cdn.com/content/v1/5bbcf00a9b8fe874ed2f03d0/f89fcb23-dec6-4674-ae5f-73cb8ae96f46/lokrum-island.jpg',
      category: 'Rustic',
    },
    {
      id: 21,
      destination_id: 6,
      name: 'Window of the World',
      photo: 'https://www.chinaexpeditiontours.com/blog/wp-content/uploads/2019/12/Window-of-the-World-Shenzhen.jpg',
      category: 'Urban',
    },
    {
      id: 22,
      destination_id: 6,
      name: 'Shenzhen Bay Park',
      photo: 'https://youimg1.tripcdn.com/target/0100a1200089ipgorD832.jpg?proc=source%2Ftrip',
      category: 'Urban',
    },
    {
      id: 23,
      destination_id: 6,
      name: 'Downtown Shenzhen',
      photo: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1f/c0/91/exterior-view-daytime.jpg',
      category: 'Urban',
    },
  ]);
};
