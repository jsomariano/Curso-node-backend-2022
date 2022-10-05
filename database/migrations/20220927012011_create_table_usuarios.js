/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable("usuarios", (tableBuilder) => {
        tableBuilder.bigIncrements("id")
        tableBuilder.string("nome", 200)
        tableBuilder.string("email", 200)
        tableBuilder.string("senha", 200)
        tableBuilder.dateTime("data_nascimento")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("usuarios")
};
