const createActsAndMilestones = require('./create_acts_milestones');

// IMPORT THE DESIRED ACTS AND MILESTONES PER TIER BELOW
  const tier_one = require('./acts_milestones_data/tier_one');
  const tier_two_and_three = require('./acts_milestones_data/tier_two_and_three');

// ENTER THE COHORT_TIER_ID FOR THE RESPECTIVE TIERS BELOW
  // TIER 1 [insert acts array and cohort_tier_id ]
  createActsAndMilestones(tier_one, 2);
  createActsAndMilestones(tier_two_and_three, [3, 4]);

  // TIER 2 [insert acts array and cohort_tier_id]
  // createActsAndMilestones(tier_two_and_three, 1);

  // // TIER 3 [insert acts array and cohort_tier_id ]
  // createActsAndMilestones(tier_two_and_three, 2);

  // COMBINED TIER 2 AND 3
  // createActsAndMilestones(tier_two_and_three, [1, 2]);