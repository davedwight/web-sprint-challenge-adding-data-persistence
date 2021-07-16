const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("projects as p");

  const result = [];

  rows.forEach((row) => {
    if (row.project_completed === 0) {
      result.push({
        ...row,
        project_completed: false,
      });
    } else {
      result.push({
        ...row,
        project_completed: true,
      });
    }
  });
  return result;
}

async function getById(id) {
  let [row] = await db("projects").where("project_id", id);

  if (row.project_completed === 0) {
    row = {
      ...row,
      project_completed: false,
    };
  } else {
    row = {
      ...row,
      project_completed: true,
    };
  }

  return row;
}

async function insert(project) {
  const [project_id] = await db("projects").insert(project);
  return getById(project_id);
}

module.exports = {
  get,
  insert,
};
