exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
                .unique();
            tbl.text('name', 128)
                .notNullable();
            tbl.text('description');
            tbl.boolean('completed')
                .notNullable();
        })
        .createTable('resources', tbl => {
            tbl.increments()
                .unique();
            tbl.integer('project_id');
            tbl.text('name', 128)
                .notNullable();
            tbl.text('description');
        })
        .createTable('tasks', tbl => {
            tbl.increments()
                .unique();
            tbl.integer('project_id');
            tbl.text('description')
                .notNullable();
            tbl.text('notes')
            tbl.boolean('completed')
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
};
