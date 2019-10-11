
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1, 
          description: 'install resources',
          notes: 'run the terminal command \'npm i express knex knex-cleaner sqlite3 helmet\'',
          completed: false
        },
        {
          project_id: 1, 
          description: 'create files',
          notes: 'create all required files for the sprint challenge',
          completed: false
        },
        {
          project_id: 2, 
          description: 'set up all trillo tasks',
          notes: 'create a detailed list of tasks for your specific role',
          completed: false
        },
        {
          project_id: 2, 
          description: 'submit your team project plan',
          notes: 'fill out the document with your team',
          completed: false
        },
      ]);
    });
};
