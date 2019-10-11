
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'Sprint Challenge', 
          description: 'You have 3 hours to complete the MVP that is provided in the README.md file!',
          completed: false
        },
        {
          id: 2,
          name: 'Build Week', 
          description: 'You have a week to meet you role expectations within your team',
          completed: false
        }
      ]);
    });
};
