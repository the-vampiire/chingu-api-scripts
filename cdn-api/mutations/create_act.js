const CreateAct = `
  mutation CreateActMutation($act_data: CohortTierActInput!){
    createCohortTierAct(act_data: $act_data) {
      id
    }
  }
`;

module.exports = CreateAct;
