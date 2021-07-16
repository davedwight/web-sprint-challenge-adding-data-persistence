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

module.exports = {
  get,
};
