// To use this script, set the `cohort_id` to an id of the cohort you want and fill the `tier_ids` array with the
// ids of the tiers you want to use. Then fill the `acts_data` array with json objects representing individual acts
// with their milestones (an example below). This script doesnt check for existing data nor does it delete anything.
//
// {
//   title: 'Act I: Project Setup',
//   order_index: 0,
//   repeatable: false,
//   milestones: [
//     {
//       title: 'Brainstorm Project Options',
//       order_index: 2,
//       description: `asdas`,
//       resource_url: null,
//     },
//     {
//       title: 'Define Your Workflow',
//       order_index: 3,
//       description: `asdasd`,
//       resource_url: null,
//     },
//     {
//       title: 'Set Up',
//       order_index: 4,
//       description: "asdsa",
//       resource_url: null,
//     },
//   ],
// },
//
// To use this script first `npm install` then `node ./setup_milestones.js`

const { chinguAPI, mutations: { CreateAct, CreateMilestone, CreateActMilestone } } = require('./cdn-api');

const cohort_id = 1;
const tier_ids = [1, 2, 3];

const acts_data = [
  
];

const createActs = async (acts) => {
  return acts.map(({ title, order_index, repeatable }) => {
    return Promise.all(tier_ids.map((tier_id) => {
      return chinguAPI({
        query: CreateAct,
        variables: { act_data: { cohort_id, title, tier_id, order_index, repeatable } }
      });
    }));
  });
};

const extractMilestones = (acts) => {
  const milestones = [];
  acts.forEach(act => act.milestones.forEach(milestone => milestones.push(milestone)));
  return milestones;
};

const milestones_data = extractMilestones(acts_data);

const createMilestones = async (milestones) => {
  return Promise.all(milestones.map(({ title, description, resource_url }) => {
    return chinguAPI({
      query: CreateMilestone,
      variables: { milestone_data: { title, description, resource_url } }
    });
  }));
};

async function upload() {
  createActs(acts_data).then(acts => {
    createMilestones(milestones_data).then(milestones => {
      acts.forEach((act_tiers, act_index) => {
        let milestone_start_index = 0;
        act_tiers.then(act_tierss => {
          act_tierss.forEach(({ data: { createCohortTierAct: { id: cohort_tier_act_id } } }, tier_index) => {
            milestones.slice(
              milestone_start_index,
              acts_data[act_index].milestones.length
            ).map(({ data: { createMilestone: { id: milestone_id } } }, milestone_index) => {
              return chinguAPI({
                query: CreateActMilestone,
                variables: { 
                  act_milestone_data: { 
                    cohort_tier_act_id, 
                    milestone_id,
                    order_index: milestones_data[milestone_start_index + milestone_index].order_index
                  } 
                }
              });
            });
            milestone_start_index += acts_data[act_index].milestones.length
          });
        });
      });
    });
  });
}

upload();