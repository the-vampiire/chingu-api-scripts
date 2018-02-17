module.exports = `
query GetCohortTeams(
  $cohort_id: ID!
) {
  cohort(
    cohort_id: $cohort_id
  ) {
    teams {
      name: title
      members {
        cohort_user {
          user {
            github_url
          }
        }
      }
      project {
        id
        has_github_url: github_url
      }
    }
  }
}
`;