import { githubUsernames } from "../shared/Constants.js";

async function fetchservice() {
  const data = [];

  await Promise.all(
    githubUsernames.map((user) => fetch(`https://api.github.com/users/${user}`)))
    .then((resp) => Promise.all(resp.map((r) => r.json())))
    .then((result) => {
      const teamData = result;
      data.push(teamData);
    })
    .catch((err) => {
      throw err;
    });
  return data;
}

export default fetchservice;
