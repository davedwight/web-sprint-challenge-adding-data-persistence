const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

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

async function getById(id) {
  let [row] = await db("tasks").where("task_id", id);

  if (row.task_completed === 0) {
    row = {
      ...row,
      task_completed: false,
    };
  } else {
    row = {
      ...row,
      task_completed: false,
    };
  }
  return row;
}

async function insert(task) {
  const [task_id] = await db("tasks").insert(task);
  return getById(task_id);
}

module.exports = {
  get,
  insert,
};
