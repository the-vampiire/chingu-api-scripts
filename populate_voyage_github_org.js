const { chinguAPI, queries: { GetCohortTeams }, mutations: {  } } = require('./cdn-api/');
const axios = require('axios');

const makeTeamsAndRepos = async (cohort_id, org_name, access_token) => {
  const chingu_res = await chinguAPI({ query: GetCohortTeams, variables: { cohort_id } });
  if (chingu_res.errors) {
    console.error(chingu_res.errors);
    throw new Error('Error requesting Cohort Teams');
  }
  const teams = chingu_res.data.cohort.teams;

  const http = axios.create({
    baseURL: "https://api.github.com",
    timeout: 60000,
    headers: {
      Authorization: `token ${access_token}`,
    }
  });
  const new_team_endpoint = `/orgs/${org_name}/teams`;
  const new_repo_endpoint = `/orgs/${org_name}/repos`;

  teams.forEach(async ({
    name,
    project: { id, has_github_url },
    members,
  }) => {
    if (!!has_github_url) {
      console.log(`${title} already has a GitHub repo associated with their project`);
    }

    // extract GitHub usernames of the members
    const maintainers = members.map(({ cohort_user: { user: { github_url } } }) => github_url.slice(19));

    // create GitHub org teams
    const new_team_request = { name };
    const new_team_res = await http.post(
      new_team_endpoint,
      new_team_request,
    ).catch(({response}) => console.error(response.data));
    
    if (new_team_res.data.messages) throw new Error(new_team_res.data.messages);
    const github_team_id = new_team_res.data.id;

    // invite members to their GitHub teams
    await Promise.all(maintainers.map(async(member) => {
      const invite_member_endpoint = `/teams/${github_team_id}/memberships/${member}`;
      const invite_res = await http.put(
        invite_member_endpoint,
      ).catch(({ response }) => console.error(response.data));
      if (invite_res.data.messages) throw new Error('error inviting user');
    }));

    // create repos
    const new_repo_request = {
      name,
      team_id: github_team_id,
      auto_init: true,
    }

    const new_repo_res = await http.post(
      new_repo_endpoint,
      new_repo_request,
    ).catch(({ response }) => console.error(response.data));

    if (new_repo_res.data.messages) throw new Error(new_repo_res.data.messages);
  });
  return 'Dildo';
};

// TODO: REMOVE TOKEN
makeTeamsAndRepos(1, 'chingu-test', '').then(console.log).catch(console.error);
