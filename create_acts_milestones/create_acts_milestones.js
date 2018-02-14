const {
  chinguAPI,
  mutations: {
    CreateAct,
    CreateTierAct,
    CreateMilestone,
    CreateActMilestone,
  },
} = require('../cdn-api/');

const linkTierAct = async (act_id, order_index, cohort_tier_id) => {
  const new_tier_act_res = await chinguAPI(
    {
      query: CreateTierAct,
      variables: {
        cohort_tier_act_data: {
          cohort_tier_id,
          act_id,
          order_index,
        },
      },
    },
  );
  if (new_tier_act_res.errors) {
    console.error(new_tier_act_res.errors);
    throw new Error('Tier Act creation failed');
  }
};

const linkActMilestone = async (act_id, milestone_id, order_index) => {
  const new_act_milestone_res = await chinguAPI(
    {
      query: CreateActMilestone,
      variables: {
        act_milestone_data: {
          act_id: act_id,
          milestone_id,
          order_index,
        },
      }
    },
  );
  if (new_act_milestone_res.errors) {
    console.error(new_act_milestone_res.errors);
    throw new Error('Act Milestone creation failed');
  }
};

const uploadMilestones = (act_id, milestones) => {
  milestones.forEach((milestone) => {
    chinguAPI(
      {
        query: CreateMilestone,
        variables: {
          milestone_data: {
            title: milestone.title,
            description: milestone.description,
            resource_url: milestone.resource_url,
          },
        },
      },
    ).then(async (new_milestone_res) => {
      if (new_milestone_res.errors) {
        console.error(new_milestone_res.errors);
        throw new Error('Milestone creation failed');
      }
      const new_milestone = new_milestone_res.data.createMilestone;
  
      // create (link) Act Milestone
      linkActMilestone(act_id, new_milestone.id, milestone.order_index);
    });
  });
};

module.exports = (acts_array, cohort_tier_id) => acts_array.forEach((
    { title, repeatable, order_index, milestones },
  ) => {
    // create Act -> Milestones -> link Act-Milestones -> link Tier-Acts
    chinguAPI(
      { query: CreateAct, variables: { act_data: { title, repeatable } } },
    ).then(async (new_act_res) => {
      if (new_act_res.errors) {
        console.error(new_act_res.errors);
        throw new Error('Act creation failed');
      }
      
      const act_id = new_act_res.data.createAct.id;

      // create Milestones
      uploadMilestones(act_id, milestones);

      // create (link) Cohort Tier Act
      if (Array.isArray(cohort_tier_id)) { // for combined tier 2 and 3 case
        cohort_tier_id.forEach(async (tier_id) => linkTierAct(act_id, order_index, tier_id));
      } else {
        await linkTierAct(act_id, order_index, cohort_tier_id);
      }
    });
  });