exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_name: "Rich friend",
      resource_description: "Good prospect for friends and family round",
    },
    {
      resource_name: "Blood, sweat, and tears",
      resource_description: "Required for success in American Business",
    },
    {
      resource_name: "Stanford CS degree",
      resource_description: "This is a secret fundraising hack!",
    },
  ]);
};
