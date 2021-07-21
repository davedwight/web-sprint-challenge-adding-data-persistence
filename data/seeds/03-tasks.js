exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_description: "Open notion and roam and start backlinking",
      task_notes: "Real entrepreneurs take notes",
      project_id: 1,
    },
    {
      task_description: "Call Elon",
      task_notes: "Work your network",
      project_id: 2,
    },
    {
      task_description: "Tell Elon congrats on space",
      task_notes: "Don't mention Jeff",
      project_id: 2,
    },
    {
      task_description: "Learn to code",
      task_notes: "Do Lambda school",
      project_id: 3,
    },
    {
      task_description: "Call friends who can code",
      task_notes: "Learning to code might take longer than you want",
      project_id: 3,
    },
    {
      task_description: "Start a substack",
      task_notes: "Write about NFTs and watch the deals come in",
      project_id: 4,
    },
    {
      task_description: "Call Jeff",
      task_notes: "Work your network once again",
      project_id: 5,
    },
    {
      task_description: "Play Jeff and Elon off one another",
      task_notes: "Could backfire but would be HUGE if works",
      project_id: 5,
    },
    {
      task_description: "Call Chamath",
      task_notes: "It's time to SPAC",
      project_id: 6,
    },
  ]);
};
