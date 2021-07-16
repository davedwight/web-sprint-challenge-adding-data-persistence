const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("resources as r");
  return rows;
}

async function getById(id) {
  let [row] = await db("resources").where("resource_id", id);
  return row;
}

async function insert(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getById(resource_id);
}

module.exports = {
  get,
  insert,
};
