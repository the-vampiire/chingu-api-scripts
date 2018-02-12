const CreateAct = `
  mutation CreateActMutation($act_data: ActInput!){
    createAct(act_data: $act_data) {
      id
    }
  }
`;

module.exports = CreateAct;
