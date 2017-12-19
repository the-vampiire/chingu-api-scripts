const CreateActMilestone = `
  mutation CreateActMilestoneMutation($act_milestone_data: CohortTierActMilestoneInput!){
    createCohortTierActMilestone(act_milestone_data: $act_milestone_data) {
      id
    }
  }
`;

module.exports = CreateActMilestone;
