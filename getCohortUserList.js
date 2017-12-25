// const { chinguAPI, queries: { getOAuthToken } } = require('../../../cdn-api/index');
const axios = require('axios');
const querystring = require('querystring');

// fails because auth header is passing admin (can this be alternated?)
// async function getTeamToken(variables) {
//   const response = await chinguAPI(
//     { query: getOAuthToken, variables },
//   );
//   if (response.errors) {
//     console.error(JSON.stringify(response.errors));
//     throw new Error(response.errors[0].message);
//   }
//   return response.data.wizard.slack_team_token;
// }

function parseUserList(userList) {
  return userList.map(({
      id,
      real_name,
      profile: { email, display_name, image_512 },
  }) => ({
    slack_user_id: id,
    email,
    // full_name: real_name,
    // username: display_name,
    // photo: image_512,
  }));
}

async function getSlackUserList() {
// failed see note above. use raw token input
  // const token = await getTeamToken({ slack_team_id: teamID });
  const slack_team_token = '';
  const { data } = await axios.post(
    'https://slack.com/api/users.list',
    querystring.stringify({ token: slack_team_token, include_local: true }),
  );
  if (!data.ok) {
    throw new Error(data.error);
  }
  return parseUserList(data.members);
}

module.exports = getSlackUserList;
