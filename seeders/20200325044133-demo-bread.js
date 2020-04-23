'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Breads', [
        {
          name : "Mille Feuille",
          chef: "Gordon Ramsey",
          price: 95000,
          category: "Dessert",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Pain au chocolat",
          chef: "Gordon",
          price: 95000,
          category: "Dessert",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "La guerre",
          chef: "Napoleon",
          price: 95000,
          category:"Cake",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Soleil",
          chef: "Pierre",
          price: 95000,
          category: "Cake",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Pain au frais",
          chef: "Lilian Bougenville",
          price: 95000,
          category: "Dessert",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : "Croissant",
          chef: "Benoit Julien",
          price: 95000,
          category:"Dessert",
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Breads', null, {});

  }
};
