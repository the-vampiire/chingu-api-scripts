module.exports = `
mutation createTeam(
  $cohort_id: ID!
  $cohort_tier_id: ID!
) {
  createCohortTeam(
    cohort_id: $cohort_id
    cohort_tier_id: $cohort_tier_id
  ) {
    id
    title
    channel {
      slack_channel_id
    }
  }
}
`;