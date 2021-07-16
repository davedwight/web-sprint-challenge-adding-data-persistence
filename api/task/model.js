const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("tasks as t")
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description',
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

module.exports = {
  get,
};
