
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          project_id: 1, 
          name: 'express library',
          description: 'install this library in the root directory of the project'
        },
        {
          project_id: 1, 
          name: 'knex library',
          description: 'install this library in the root directory of the project'
        },
        {
          project_id: 1, 
          name: 'knex-cleaner',
          description: 'install this library in the root directory of the project'
        },
        {
          project_id: 2, 
          name: 'notion',
          description: 'location and read your project notion documents'
        },
        {
          project_id: 2, 
          name: 'project plan',
          description: 'create a detailed plan'
        },
        {
          project_id: 2, 
          name: 'trillo',
          description: 'create a trillo organization with your team'
        },
      ]);
    });
};
