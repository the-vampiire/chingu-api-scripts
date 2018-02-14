module.exports = [

// ACT ONE
  {
    title: 'Act I: Project Setup (Toucans)',
    order_index: 0,
    repeatable: false,
    milestones: [
      {
        title: 'Meet the Team',
        order_index: 0,
        description: `
*Goal*: Get acquainted with your teammates.

*Suggested Actions*:
> Read each other''s intro stories.
> Share a project or two you are most proud of in your learning journey.
> Share some prime picks from your gif collection.

*Icebreakers*:
> What time zone are you in?
> What sort of music do you like to code to?
> What is your preferred learning style (videos, docs, dialoge etc)?
> What are your favorite YouTube channels, subreddits or blogs?
> What technologies are you most comfortable using and explaining?
> What technologies are you most interested in learning this Voyage?
        `,
        resource_url: null,
      },
      {
        title: 'Set Goals and Expectations',
        order_index: 1,
        description: `
*Goal*: Determine the team''s learning expectations and availability.

*Commitment*:
> It is critical to make sure that everyone is realistic in their level of commitment and availability.
> Working less than you commit to is disrespectful to your teammates and can stunt the team''s progress and morale.
> Typically team members commit 4-10 hours a week towards the project.
> 

*Life Happens*
> Events sometimes occur in peoples lives that will prevent them from honoring a commitment.
> As a team member, *make sure that you notify your PM as soon as possible* if a situation arises that forces you to leave the project or makes it impossible for you to meet your deadlines.
> *For PM''s* - Notify the Chingu Management Team if a situation arises that makes it difficult or impossible to complete your committments to your team and project
> There is nothing wrong with having to pull back or drop out - communication is the key to being a good Chingu.

*Learning Goals*:
> Evaluate everyone''s current technical abilities.
> Determine at least one primary technical learning goal for each teammate
> Pick something that is 25% outside of the team''s comfort zone / skillset. Any further and you will likely be overwhelmed. Any less and you are limiting your rate of learning.

*Voyages go by faster than you think and you need to focus on learning through building rather than getting caught in research rabbit-holes*.
        `,
        resource_url: null,
      },
      {
        title: 'Brainstorm Project Options (Toucans)',
        order_index: 2,
        description: `
*Goal*: Decide on a project to pursue.

*Tips*:
> Stay focused on what is possible based on the length of the cohort, the team's collective experience, and the commitment level.
> Remember to incorporate as many team learning goals as are feasible.
> *The goal is to learn something new, not to stay stuck only working with what you know. But remember with the 25% rule.*

*The Stack*:
> Front End - consider the libraries / framework you will use in your project
> If you're trying to learn a new library or framework, keep the project idea really simple. Consider even recreating a past project using the new library/framework.
> If less than half of the team has not used any libraries or frameworks before we *highly suggest* using this Voyage to build up your vanilla JS, HTML, and CSS skills. 

*It is better to underpromise and overdeliver _especially if this is your first Voyage_*
        `,
        resource_url: null,
      },
      {
        title: 'Define Your Workflow',
        order_index: 3,
        description: `
*Goal*: Decide on which workflow tools and techniques the team will use.

*Tips*:
> The workflow is the heart of your team''s progress. It''s important for all team members to understand the need for an organized workflow.
> Don''t go overboard! Workflow tools are only useful when they are used. Keep it simple so using the tools feels effortless rather than a chore.
> If you don''t already have a workflow or specific tools in mind, consider the suggestions below.

*Suggested Workflow Tools*
>Besides the obvious Slack and Github, the following are tools that work for many Chingu teams
> <https://www.waffle.io|Waffle> - Trello and Github had a baby that makes project management a breeze
> <https://www.discord.com|Discord> - "Always-on" communication tool. Leave it on mute while you work then unmute as needed to gain access to teammates for problem solving detours. Use it for clear audio while using Google Hangouts (don''t forget to mute the echo from Hangouts!)
> <https://hangouts.google.com|Google Hangouts> - A screensharing / pair-programming must (until VSC Live comes out!!)
> <https://github.com/Chingu-cohorts/pmrok/wiki/Resources-Tools#project-management-organization-tools|Other Workflow Tools> - A more comprehensive list of tools Chingu''s have used and recommended. 

*Suggested Workflow*:
> Hold a meeting on Discord and / or Hangouts to discuss the key steps required to complete the next sprint.
> Use Waffle to compartmentalize the steps of the sprints into grab-and-go tasks.
> Leave Discord on and unmute as needed to discuss and conquer roadblocks.
> Use Slack for short code snippets. Use Hangouts to screenshare for more complex debugging.

*A proper workflow and concise collection of workflow tools is what makes the difference between a team that makes it and one that doesn''t.*
        `,
        resource_url: 'https://github.com/Chingu-cohorts/pmrok/wiki/Voyage-Workflow',
      },
      {
        title: 'Set Up',
        order_index: 4,
        description: `
*Goal*: Set up and explore your team''s workflow tools.

*Tips*:
> Check to see if your pre-made Voyage team repo is functional and the proper permissions and settings are configured.
> Ask for help from the community with setting up tools if you get stuck.
> Don''t get turned off because the setup seems daunting. It''s a one time process - don''t build up technical debt!

*Required*:
> Make sure everyone uses the tools.
> Walk through an example usage of each tool and how they all come together.
> Work out any kinks in everyone''s microphones, internet connections, permissions, etc.

*The first sprint IS NOT the time to learn how to use the tools at hand.*
*Get comfortable so you can focus on coding, rather than your tools*
        `,
        resource_url: null,
      },
      {
        title: 'Define the MVP',
        order_index: 5,
        description: `
*Goal*: Hold a meeting to decide on the minimum viable product (MVP).

*Tips*:
> Deciding on the MVP for the project is the most important step your team must take before embarking on your Voyage.
> Consider the features that can, at minimum, serve as a functioning prototype of the project's vision.
> Defining the MVP is committing to the bare minimum you and the team will accomplish before the cohort''s deadline.

*Focus Points*:
> Front End - consider the views and their associated functionality
> Back End - consider the endpoints, routes and associated logic
> Database - consider the complexity of the database and associated models
> Deployment - consider how / where you will host the project

*Schedule a Meeting*
> Schedule your next meeting to plan your first sprint!

*Don't throw away those features and moonshot ideas that fall outside of the scope of the MVP!*
*Shoot for finishing the MVP ahead of schedule so the extra time can be used to implement those additional features and polish*
        `,
        resource_url: null,
      },
    ],
  },

// ACT TWO

  {
    title: 'Act II: HTML & CSS Phase – Building the Foundation (Toucans)',
    order_index: 1,
    repeatable: false,
    milestones: [
      {
        title: 'Plan Sprint I',
        order_index: 0,
        description: `
*Goal*: Divide the page into areas and assign them evenly between the teammembers.

*Notes*:
> In this act, you will build the the HTML and CSS portion of the landing page. *You shouldn't concern yourself with JavaScript at this point.*
> Splitting up the workload in a landing page can be difficult, but every web page can be divided into sections
> Your goal for the first sprint should be to complete at least one of your assigned areas.
> The tasks for each sprint should require *9 days or less* to complete.
> Do your best, but don''t worry if you underestimate the required time. You can reflect and adjust in the next sprint.
> For Sprint I, about the half of the page should be assigned to team members.

*Tips*:
> Divide and Conquer: Breaking a big task into small chunks will help you focus and give you a sense of accomplishement after completing a section.
> Better time-management: The smaller the task, the better it will fit into your section.
> New developers especially don't have the habit or the time to code daily, so be patient with your colleagues if they take a while longer.
> Even though you may end up writing the same rules more then one time, a Chingu project is about learning, not about shipping the best product.

*Workflow*:
> Now is the time to create cards for each of the tasks.
> Write the cards by adding descriptive titles and core details of the task as bullet points.
> The cards should serve as guidelines to each task with links to key references or specific notes that may be forgotten.
> Finish by reviewing and assigning the cards together as a team, so that everyone is on the same page and knows their responsibilities.

*Don't spend too much time writing the cards or getting caught up with all the fancy buttons!*
        `,
        resource_url: 'https://i.imgur.com/q0Z2SnH.png',
      },
      {
        title: 'Begin Sprint I',
        order_index: 1,
        description: `
*Goal*: Turn all that talk into code!

*Tips*:
> Try to be online regularly to help out your teammates.
> Don't be frustrated. Sometimes, there will be a roadblock or something which you do not know.
> Try to solve it yourself or google the problem, but don't be shy to ask a question in Slack.
> Chingus are very helpful and always willing to share their knowledge.

*Github*:
> We encourage team''s to use a new branch for each task, which can later be reviewed and merged into the development. See the resource URL for more detail.

*Patience*:
> Don''t expect everybody to be finished at the same time as you. Everyone works at a different pace.
> If you get your task done early, work on a side project, learn something new or pick up another project task.
> Here are some links to get you going:
> https://100dayscss.com/
> https://javascript30.com/
> https://github.com/P1xt/p1xt-guides/blob/master/job-ready-javascript-edition-2.0.md
        `,
        resource_url: 'https://github.com/Chingu-cohorts/voyage-wiki/wiki/ProjSetup-Git-Workflow',
      },
      {
        title: 'Midweek Sprint Progress Review',
        order_index: 2,
        description: `
*Goal*: Review the team''s progress after half the sprint''s duration.

*Schedule a Meeting*
> Schedule a time mid-sprint to check in with everyone and make sure progress is being made by the team.
> This is an opportunity, not a chore! Use this opportunity to speak about your problems and roadblocks.
> If there is a scheduling issue and it is impossible to find a time for everyone to meet, don''t fret! Just have an asyncronous meeting.
> In general, it is also necessary to be able to review the code written, so everybody should push their current code to Github.

*Steps*:
> Assess everyone''s status in the sprint.
> Discuss any tasks that are hindering progress.
> Explore solutions together and construct an actionable plan to move forward.
> Celebrate completed tasks and share the lessons learned while working on them.
> Assess the remaining tasks and take note of how close you are to meeting this sprint's deadline.
        `,
        resource_url: 'https://en.wikipedia.org/wiki/Asynchronous_conferencing',
      },
      {
        title: 'Completed Sprint Review, Code Review and Merging',
        order_index: 3,
        description: `
*Goal*: Reflect as a team on your Sprint experience, especially lessons learned

*Review the code and merge*:
> Cross-review eachother''s code and prevent merging without review.
> Ask for clarification and add comments wherever needed.
> Openly explain decisions and implementation details.
> Test completed tasks whenever possible and seek out bugs to catch.
> Work on maintaining a consistent style across the team''s code.

*Tips - Review*:
> Write detailed pull request notes to maintain a clear history of the project and its progress.
> These will also help team members cross-review your PRs.

*Completion of the Sprint*:
> Assess the number of remaining tasks.
> Determine why they were left incomplete.
> Discuss how the next sprint will be improved with the lessons learned.
> Discuss if there are ways the workflow can be improved.
> Discuss any new ideas that stemmed from completing the tasks. Create notes or cards to keep these ideas handy for the future.

*Patience*:
> Be patient with each other and understand that life happens.
> Carry over the remaining tasks and plan better for the next one!
> If you encounter problems or delays, keep your teammates informed.
        `,
        resource_url: null,
      },
      {
        title: 'Plan Sprint I',
        order_index: 4,
        description: `
*Goal*: Divide the page into areas and assign them evenly between the teammembers.

*Notes*:
> In this act, you will build the the HTML and CSS portion of the landing page. *You shouldn't concern yourself with JavaScript at this point.*
> Splitting up the workload in a landing page can be difficult, but every web page can be divided into sections
> Your goal for the first sprint should be to complete at least one of your assigned areas.
> The tasks for each sprint should require *9 days or less* to complete.
> Do your best, but don''t worry if you underestimate the required time. You can reflect and adjust in the next sprint.
> For Sprint I, about the half of the page should be assigned to team members.

*Tips*:
> Divide and Conquer: Breaking a big task into small chunks will help you focus and give you a sense of accomplishement after completing a section.
> Better time-management: The smaller the task, the better it will fit into your section.
> New developers especially don't have the habit or the time to code daily, so be patient with your colleagues if they take a while longer.
> Even though you may end up writing the same rules more then one time, a Chingu project is about learning, not about shipping the best product.

*Workflow*:
> Now is the time to create cards for each of the tasks.
> Write the cards by adding descriptive titles and core details of the task as bullet points.
> The cards should serve as guidelines to each task with links to key references or specific notes that may be forgotten.
> Finish by reviewing and assigning the cards together as a team, so that everyone is on the same page and knows their responsibilities.

*Don't spend too much time writing the cards or getting caught up with all the fancy buttons!*
        `,
        resource_url: 'https://i.imgur.com/q0Z2SnH.png',
      },
      {
        title: 'Begin Sprint I',
        order_index: 5,
        description: `
*Goal*: Turn all that talk into code!

*Tips*:
> Try to be online regularly to help out your teammates.
> Don't be frustrated. Sometimes, there will be a roadblock or something which you do not know.
> Try to solve it yourself or google the problem, but don't be shy to ask a question in Slack.
> Chingus are very helpful and always willing to share their knowledge.

*Github*:
> We encourage team''s to use a new branch for each task, which can later be reviewed and merged into the development. See the resource URL for more detail.

*Patience*:
> Don''t expect everybody to be finished at the same time as you. Everyone works at a different pace.
> If you get your task done early, work on a side project, learn something new or pick up another project task.
> Here are some links to get you going:
> https://100dayscss.com/
> https://javascript30.com/
> https://github.com/P1xt/p1xt-guides/blob/master/job-ready-javascript-edition-2.0.md
        `,
        resource_url: 'https://github.com/Chingu-cohorts/voyage-wiki/wiki/ProjSetup-Git-Workflow',
      },
      {
        title: 'Midweek Sprint Progress Review',
        order_index: 6,
        description: `
*Goal*: Review the team''s progress after half the sprint''s duration.

*Schedule a Meeting*
> Schedule a time mid-sprint to check in with everyone and make sure progress is being made by the team.
> This is an opportunity, not a chore! Use this opportunity to speak about your problems and roadblocks.
> If there is a scheduling issue and it is impossible to find a time for everyone to meet, don''t fret! Just have an asyncronous meeting.
> In general, it is also necessary to be able to review the code written, so everybody should push their current code to Github.

*Steps*:
> Assess everyone''s status in the sprint.
> Discuss any tasks that are hindering progress.
> Explore solutions together and construct an actionable plan to move forward.
> Celebrate completed tasks and share the lessons learned while working on them.
> Assess the remaining tasks and take note of how close you are to meeting this sprint's deadline.
        `,
        resource_url: 'https://en.wikipedia.org/wiki/Asynchronous_conferencing',
      },
      {
        title: 'Completed Sprint Review, Code Review and Merging',
        order_index: 7,
        description: `
*Goal*: Reflect as a team on your Sprint experience, especially lessons learned

*Review the code and merge*:
> Cross-review eachother''s code and prevent merging without review.
> Ask for clarification and add comments wherever needed.
> Openly explain decisions and implementation details.
> Test completed tasks whenever possible and seek out bugs to catch.
> Work on maintaining a consistent style across the team''s code.

*Tips - Review*:
> Write detailed pull request notes to maintain a clear history of the project and its progress.
> These will also help team members cross-review your PRs.

*Completion of the Sprint*:
> Assess the number of remaining tasks.
> Determine why they were left incomplete.
> Discuss how the next sprint will be improved with the lessons learned.
> Discuss if there are ways the workflow can be improved.
> Discuss any new ideas that stemmed from completing the tasks. Create notes or cards to keep these ideas handy for the future.

*Patience*:
> Be patient with each other and understand that life happens.
> Carry over the remaining tasks and plan better for the next one!
> If you encounter problems or delays, keep your teammates informed.
        `,
        resource_url: null,
      },
      {
        title: 'Leaving Act 2',
        order_index: 8,
        description: `
*Goal*: Look out for any bugs or discrepencies in the landing page.

*Acknowledgement*:
> The team did very well and you should give yourself a pat on the back. You are halfway there and will soon be a proud owner of a completed project.
> Please don''t give up if things aren''t on track. We believe in y''all :)

*Tips*:
> Give your page one last check to verify that everything is working before you move on.
> Now is a good time to merge into master and have a live demo.
> Check out Github pages as one hosting option: https://pages.github.com/

*Quote*:
> Have you seen a marathon race? Some runners will be leading right from the first - but after the halfway mark, it is the runners at the back who take over while the early leaders fade out.

- *Sharad Pawar*
        `,
        resource_url: null,
      },
    ],
  },

// ACT THREE

{
  title: 'Act III: Javascript Sprint – Bringing dynamic capabilities (Toucans)',
  order_index: 0,
  repeatable: false,
  milestones: [
    {
      title: 'Plan the Javascript Sprint',
      order_index: 0,
      description: `
*Goal*: Write out all the Javascript functionality your Webpage needs

*Notes*:
> This is surely one of the most exciting parts of you journey in this project.
> Javascript is what brings a webpage to life.

*Steps*:
> Look at the target site.
> Identify functions that should be implemented.
> Don't be intimidated by advanced features.
> Define the features that can be completed within nine days.
> Distribute tasks amongst team members.
> Stuck? Problems? Lost completely?  Reach out in Slack!
      `,
      resource_url: null,
    },
    {
      title: 'Begin Sprint I',
      order_index: 1,
      description: `
*Goal*: Turn all that talk into code!

*Tips*:
> Try to be online regularly to help out your teammates.
> Don't be frustrated. Sometimes, there will be a roadblock or something which you do not know.
> Try to solve it yourself or google the problem, but don't be shy to ask a question in Slack.
> Chingus are very helpful and always willing to share their knowledge.

*Github*:
> We encourage team''s to use a new branch for each task, which can later be reviewed and merged into the development. See the resource URL for more detail.

*Patience*:
> Don''t expect everybody to be finished at the same time as you. Everyone works at a different pace.
> If you get your task done early, work on a side project, learn something new or pick up another project task.
> Here are some links to get you going:
> <https://100dayscss.com/|100 Days of CSS>
> <https://javascript30.com/|Javascript 30>
> <https://github.com/P1xt/p1xt-guides/blob/master/job-ready-javascript-edition-2.0.md|Job Ready Javascript>
      `,
      resource_url: 'https://github.com/Chingu-cohorts/voyage-wiki/wiki/ProjSetup-Git-Workflow',
    },
    {
      title: 'Midweek Sprint Progress Review',
      order_index: 2,
      description: `
*Goal*: Review the team''s progress after half the sprint''s duration.

*Schedule a Meeting*
> Schedule a time mid-sprint to check in with everyone and make sure progress is being made by the team.
> This is an opportunity, not a chore! Use this opportunity to speak about your problems and roadblocks.
> If there is a scheduling issue and it is impossible to find a time for everyone to meet, don''t fret! Just have an asyncronous meeting.
> In general, it is also necessary to be able to review the code written, so everybody should push their current code to Github.

*Steps*:
> Assess everyone''s status in the sprint.
> Discuss any tasks that are hindering progress.
> Explore solutions together and construct an actionable plan to move forward.
> Celebrate completed tasks and share the lessons learned while working on them.
> Assess the remaining tasks and take note of how close you are to meeting this sprint's deadline.
      `,
      resource_url: 'https://en.wikipedia.org/wiki/Asynchronous_conferencing',
    },
    {
      title: 'Completed Sprint Review, Code Review and Merging',
      order_index: 3,
      description: `
*Goal*: Reflect as a team on your Sprint experience, especially lessons learned

*Review the code and merge*:
> Cross-review eachother''s code and prevent merging without review.
> Ask for clarification and add comments wherever needed.
> Openly explain decisions and implementation details.
> Test completed tasks whenever possible and seek out bugs to catch.
> Work on maintaining a consistent style across the team''s code.

*Tips - Review*:
> Write detailed pull request notes to maintain a clear history of the project and its progress.
> These will also help team members cross-review your PRs.

*Completion of the Sprint*:
> Assess the number of remaining tasks.
> Determine why they were left incomplete.
> Discuss how the next sprint will be improved with the lessons learned.
> Discuss if there are ways the workflow can be improved.
> Discuss any new ideas that stemmed from completing the tasks. Create notes or cards to keep these ideas handy for the future.

*Patience*:
> Be patient with each other and understand that life happens.
> Carry over the remaining tasks and plan better for the next one!
> If you encounter problems or delays, keep your teammates informed.
      `,
      resource_url: null,
    },

    {
      title: 'Leaving Act 3',
      order_index: 4,
      description: `
*Goal*: Look out for any bugs or discrepencies in the landing page.

*We are not done yet*:
> Feel free to have a second javascript sprint if there are some advanced features that still need to be implemented.
> Be mindful of the Voyage deadline for an minimum viable product.

*We are done!*:
> Good for you, you did it!! We are celebrating with you and would like to express our sincere congratulations!
> It is always the best when a team finishes a project on time or even early!
> If you think you have a solid minimum viable product, feel free, hit that button to head to the next act!

*Quote*:
> Three Rules of Work: Out of clutter find simplicity; 
> From discord find harmony; 
> In the middle of difficulty lies opportunity.

- *Albert Einstein*

      `,
      resource_url: null,
    },
  ],
},

// ACT FOUR

{
  title: 'Act IV: Project Closure (Toucans)',
  order_index: 0,
  repeatable: false,
  milestones: [
    {
      title: 'Tidy up your CSS Files',
      order_index: 0,
      description: `
*Goal*: Clean up your CSS files.

*Explanation*:
> It''s incedibly easy for stylesheets to get wild and messy.
> Here''s your chance to tackle that task.
> Improve class and id names, consolidate redundant rules and agree on a color palette.

*Optional*: Get ready for Tier 2 and check out Sass!
<https://sass-lang.com/|SASS Website>
> Sass makes CSS fun again. Sass is an extension of CSS and adds nesting rules, variables, mixins, selector inheritance, and more.
> It''s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.
> Sass can help avoid repetition for colors, borders and reduce complexity.

*Where to learn*:
> http://www.sassshop.com/#/

*Where to get*:
> http://sass-lang.com/

*Tips*:
> Take your time, while doing this. It is the perfect time to discover how efficient CSS can be.
    `,
      resource_url: null,
    },
    {
      title: 'Optimize Javascript',
      order_index: 1,
      description: `
*Goal*: Adding descriptions to javascript functions, making sure everything is optimal and without magic numbers

*Rules of Thumb*:
> Be explicit - always keep in mind readability and maintainability. 
> DRY - don''t repeat yourself
> Comments are to explain *_why_* not *_how_*.
> Naming is arguably the hardest thing we do as developers but the one with the biggest payback.

*Term*:
> Magic numbers are numbers that occur multiple time in code without an explicit meaning. They should preferably be replaced by named constants.
> finalPrice = dutyFreePrice + (dutyFreePrice * 0.25); BAD
> var TAX = 0.25; finalPrice = dutyFreePrice + (dutyFreePrice * TAX); GOOD
> The no-magic-numbers rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants to make their meaning explicit.

*Task*:
> Optimize your code and avoid repetition
> Someday, you''ll thank yourself for deleting all those nasty magic numbers.
> Every function needs a description.
> Comments are your best friend!

*Tips*:
> As a general rule, functions should be about 18 lines long. If there are any longer, you can probably make an additional functions somewhere to ensure readablity of your code.
> Maybe you can''t imagine it now, but in just about 6 month, you will surely have written so many lines of code that you will forget everything in this project!
> This happens even to a grand Wizard like me! That is why it is important to write precise and clear descriptions for any function in your javascript code.
> This will ensure that even if you go back to it after a year, you will find everything you need fast.
      `,
      resource_url: 'https://android.jlelse.eu/solid-principles-the-definitive-guide-75e30a284dea#.otqd60byp',
    },
    {
      title: 'Bathe in the Glory',
      order_index: 2,
      description: `
*Goal*: Share your finished page everywhere and make sure you get a lot of fire emojis in Slack.

*Quote*:
> Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.

- *Pele*

*ToDo*:
> You should feel proud, because you did well! Each project deserves to be applauded.
> Show it to everyone, not only out of a feeling of accomplishment, but to also inspire new members and other aspiring developers.
> It shows that with enough dedication and hard work you can be the accomplished developer you want to be.
> Now relax and reflect in the next milestone and take the momentum to your next project/cohort/code-thingy and let the keyboard crack :smiley: :party-wizard:
      `,
      resource_url: null,
    },
    {
      title: 'Write about your experiences',
      order_index: 3,
      description: `
*Goal*: Every team member should write a Medium article about their experiences. Bonus points for a vlog!

*Quote*:
> By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.

- *Confucius*

*Talk*:
> This is the best time to reflect and think about the experience you gained in the last weeks -- all the new techniques and tricks you learned.
> This is best done by writing about your experience.
> By writing, you will hopefully see a distilled, clear image of what you have accomplished this Voyage.
> Write and reflect about your successes and failures to help other aspiring developers.
> There is a reason people still write textbooks in 2018! Through text we can reach everyone who needs to be reached.
      `,
      resource_url: null,
    },
  ],
},

];
