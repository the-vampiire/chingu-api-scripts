const { chinguAPI, mutations: { CreateCohortTeam } } = require('./cdn-api/');

const createTeams = async (cohort_id, cohort_tier_id, count) => {
  for(let i = 0; i < count; i++) {
    const res = await chinguAPI({
      query: CreateCohortTeam,
      variables: {
        cohort_id,
        cohort_tier_id
      },
    });
    if (res.errors) {
      console.log(res.errors);
      throw new Error('Error creating team');
    }
  }
  return 'Dildo';
};

// (cohort_id, cohort_tier_id, number of teams to create)
// createTeams(2, 3, 5).then(console.log);