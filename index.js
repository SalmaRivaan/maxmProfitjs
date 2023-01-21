const testCase1 = {
  time: 7,
  earning: 3000,
};
const testCase2 = {
  time: 8,
  earning: 4500,
};
const testCase3 = {
  time: 13,
  earning: 16500,
};
const timeToBuild = [5, 4, 10];
const earningPerUnit = [1500, 1000, 3000];

function recommendDevelopment(requirement) {
  let result = [];
  const works = [
    { name: "T", earning: 1500, developmentTime: 5 },
    { name: "P", earning: 1000, developmentTime: 4 },
    { name: "C", earning: 3000, developmentTime: 10 },
  ];
  for (let i = 0; i < works.length; i++) {
    let bussiness = works[i];
    if (requirement.time < bussiness.developmentTime) {
      continue;
    } else {
      let noOfWorks = parseInt(requirement.time / bussiness.developmentTime);
      let totalWorksRunningTime = 0;
      let totalTimeSpentInDevelopment = 0;
      for (let i = 1; i <= noOfWorks; i++) {
        let workRunningTime =
          requirement.time -
          totalTimeSpentInDevelopment -
          bussiness.developmentTime;
        totalWorksRunningTime += workRunningTime;
        totalTimeSpentInDevelopment += bussiness.developmentTime;
      }
      let totalEarningFromBussiness = totalWorksRunningTime * bussiness.earning;
      if (totalEarningFromBussiness == requirement.earning) {
        let solution = { T: 0, P: 0, C: 0 };
        solution[bussiness.name] = noOfWorks;
        result.push(solution);
      }
    }
  }
  console.log(result);
  return result;
}

recommendDevelopment(testCase1);
recommendDevelopment(testCase2);
recommendDevelopment(testCase3);
