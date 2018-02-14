const createActsAndMilestones = require('./create_acts_milestones');

// IMPORT THE DESIRED ACTS AND MILESTONES PER TIER BELOW
  const tier_one = require('./acts_milestones_data/tier_one');
  const tier_two = require('./acts_milestones_data/tier_two');
  const tier_three = require('./acts_milestones_data/tier_three');

// ENTER THE COHORT_TIER_ID FOR THE RESPECTIVE TIERS BELOW
  // TIER 1 [insert acts array and cohort_tier_id ]
  createActsAndMilestones(tier_one, 2);

  // TIER 2 [insert acts array and cohort_tier_id]
  createActsAndMilestones(tier_two, 3);

  // // TIER 3 [insert acts array and cohort_tier_id ]
  createActsAndMilestones(tier_three, 1);