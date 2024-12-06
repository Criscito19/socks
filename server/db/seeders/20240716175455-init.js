const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John',
          email: 'john@example.com',
          hashpass: bcrypt.hashSync('123', 10),
        },
        {
          name: 'Jane',
          email: 'jane@example.com',
          hashpass: bcrypt.hashSync('123', 10),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          baseColor: '#990000',
        },
        {
          baseColor: '#FFFF00',
        },
        {
          baseColor: '#009900',
        },
        {
          baseColor: '#FFFFFF',
        },
        {
          baseColor: '#000000',
        },
        {
          baseColor: '#666666',
        },
        {
          baseColor: '#00FFFF',
        },
        {
          baseColor: '#660099',
        },
        {
          baseColor: '#FF66FF',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          imgName: 'https://www.pngegg.com/en/png-bmrqk',
        },
        {
          imgName:
            'https://r2.erweima.ai/imgcompressed/compressed_864c4b229772ff261289eda2c426ed0a.webp',
        },
        {
          imgName:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLtHD6aNtT69T_qpxGTWLP_8CfCHKaXhHBw&s',
        },
      ],
      {}
    );
    // Сиды для Socks
    await queryInterface.bulkInsert(
      'Socks',
      [
        {
          userId: 1,
          colorId: 1,
          imageId: 1,
        },
        {
          userId: 2,
          colorId: 2,
          imageId: 2,
        },
        {
          userId: 1,
          colorId: 3,
          imageId: 3,
        },
      ],
      {}
    );

    // Сиды для Likes
    await queryInterface.bulkInsert(
      'Likes',
      [
        {
          userId: 1,
          sockId: 1,
        },
        {
          userId: 2,
          sockId: 2,
        },
        {
          userId: 1,
          sockId: 2,
        },
      ],
      {}
    );

    // Сиды для Cart
    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 1,
          sockId: 3,
        },
        {
          userId: 2,
          sockId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
