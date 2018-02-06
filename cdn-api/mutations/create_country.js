const CreateCountry = `
  mutation createCountry(
    $name:String!
  ) {
    createCountry(
      name: $name
    ) {
      name
      id
    }
  }
`;

module.exports = CreateCountry;
