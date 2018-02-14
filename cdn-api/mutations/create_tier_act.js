const CreateTierAct = `
  mutation CreateTierActMutation(
    $cohort_tier_act_data: CohortTierActInput!
  ){
    createCohortTierAct(
      cohort_tier_act_data: $cohort_tier_act_data
    ) {
      id
    }
  }
`;

module.exports = CreateTierAct;
