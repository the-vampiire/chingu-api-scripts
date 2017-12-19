const CreateMilestone = `
  mutation createMilestoneMutation($milestone_data: MilestoneInput!){
    createMilestone(milestone_data: $milestone_data) {
      id
    }
  }
`;

module.exports = CreateMilestone;
