//user data seed.

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        userName: 'johndoe',
        email: 'johndoe@gmail.com',
        dateOfBirth: '1990-01-01',
        bio: 'I am a software engineer',
        yearsOfCookingExp: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sally',
        lastName: 'James',
        userName: 'sallyjames',
        email: 'sallyjames@gmail.com',
        dateOfBirth: '1988-05-06',
        bio: 'I am a retired chef',
        yearsOfCookingExp: 25,
        createdAt: new Date(),
        updatedAt: new Date()
  },{
    firstName: 'Karen',
        lastName: 'Kim',
        email: 'karenkim@gmail.com',
        userName: 'karenkim',
        dateOfBirth: '2000-05-06',
        bio: 'I am a gen Z who loves cooking',
        yearsOfCookingExp: 1,
        createdAt: new Date(),
        updatedAt: new Date()
  }])},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};