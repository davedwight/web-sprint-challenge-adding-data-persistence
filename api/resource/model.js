const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("resources as r");
  return rows;
}

module.exports = {
  get,
};
