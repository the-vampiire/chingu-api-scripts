const { chinguAPI, mutations: { AddUsersToCohort } } = require('./cdn-api');
const getUsers = require('./getCohortUserList');

const cohort_id = //

async function go() {
  const user_data = await getUsers();
  addUserToCohort(user_data, 0);
}

const addUserToCohort = (users, index) => {
  if (index === users.length) {
    console.log('done');
    return;
  }
  chinguAPI({
    query: AddUsersToCohort,
    variables: { cohort_id, user_data: JSON.stringify([users[index]]) }
  }).then((response) => {
    console.log(`Added user: ${users[index].email}. ${index + 1}/${users.length}`);
    addUserToCohort(users, index + 1);
  }).catch(error => console.error(error));
};

go();