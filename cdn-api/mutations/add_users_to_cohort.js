const addUsersToCohort = `
  mutation addUsersToCohortMutation($cohort_id: Int!, $user_data: String!){
    addUsersToCohort(cohort_id: $cohort_id, user_data: $user_data) {
      id
    }
  }
`;

module.exports = addUsersToCohort;
