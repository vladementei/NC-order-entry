const{getRequest} = require('./http-request.js');

function printAppropriateElements(repos, substring) {
  repos.filter(elem => elem.name.indexOf(substring) >= 0).forEach(elem => console.log(elem.name));
}

function reposNamesCallback(userId, substring){
  getRequest(`https://api.github.com/user/${userId}`, (response) =>
    getRequest(`https://api.github.com/users/${response.login}/repos`, (response) =>
      printAppropriateElements(response, substring))
  ).catch(reason => console.log(reason));
}

function reposNamesPromise(userId, substring){
  getRequest(`https://api.github.com/user/${userId}`)
    .then(response => getRequest(`https://api.github.com/users/${response.login}/repos`))
    .then(response => printAppropriateElements(response, substring))
    .catch(reason => console.log(reason));
}

async function reposNamesAsync(userId, substring){
  const userIdResponse = await getRequest(`https://api.github.com/user/${userId}`);
  const reposInfo = await getRequest(`https://api.github.com/users/${userIdResponse.login}/repos`);
  printAppropriateElements(reposInfo, substring)
}

reposNamesCallback(8286942, 'JS');
reposNamesPromise(8286942, 'JS');
reposNamesAsync(8286942, 'JS').catch(reason => console.log(reason));
