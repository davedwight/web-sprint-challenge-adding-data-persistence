const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("tasks as t");

  const result = [];

  rows.forEach((row) => {
    if (row.task_completed === 0) {
      result.push({
        ...row,
        task_completed: false,
      });
    } else {
      result.push({
        ...row,
        task_completed: true,
      });
    }
  });
  return result;
}

module.exports = {
  get,
};
