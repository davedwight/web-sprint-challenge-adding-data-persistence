const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("projects as p");
  return rows;
}

module.exports = {
  get,
};
