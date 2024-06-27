function acmTeam(topic) {
  let n = topic.length;
  let m = topic[0].length;
  let max = 0;
  let countTeams = 0;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        if (topic[i][k] === '1' || topic[j][k] === '1') {
          count++;
        }
      }
      if (max < count) {
        max = count;
        countTeams = 1;
      } else if (max === count) {
        countTeams++;
      }
    }
  }
  let teamsTopics = [max, countTeams];
  return teamsTopics;
}