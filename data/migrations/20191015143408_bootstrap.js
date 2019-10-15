
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments();
      tbl.string("name", 150).notNullable().unique();
      tbl.string("password", 250).notNullable();
  }).createTable("mountains", tbl => {
      tbl.increments();
      tbl.string("mountain", 150).notNullable();
      tbl.string("nearest_town", 150).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("mountains").dropTableIfExists("users");
};
