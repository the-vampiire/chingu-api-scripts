const { chinguAPI, mutations: { AddUsersToCohort } } = require('./cdn-api');

const cohort_id = 1;

const user_data = [];

const addUserToCohort = (users, index) => {
  if (index === users.length) {
    console.log('done');
    return;
  }
  chinguAPI({
    query: AddUsersToCohort,
    variables: { cohort_id, user_data: JSON.stringify([users[index]]) }
  }).then(() => {
    console.log(`Added user: ${users[index].email}. ${index + 1}/${users.length}`);
    addUserToCohort(users, index + 1);
  });
};

async function upload() {
  addUserToCohort(user_data, 0);
}

upload();