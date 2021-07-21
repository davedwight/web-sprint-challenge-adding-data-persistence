exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_name: "Write master plan",
      project_description: "Traverse the idea maze",
    },
    {
      project_name: "Raise money",
      project_description: "Get millions from Elon",
    },
    { project_name: "Build product", project_description: "Code all day" },
    { project_name: "Sell sell sell", project_description: "Close deals" },
    {
      project_name: "Raise more money",
      project_description: "Get more millions from Elon and also maybe Jeff",
    },
    { project_name: "IPO", project_description: "Cash in" },
  ]);
};
