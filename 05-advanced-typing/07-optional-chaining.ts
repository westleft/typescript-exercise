const fetchData = {
  name: "Peter",
  age: 20,
  // job: { position: "Part timer" },
};

// 噴錯，不確定是否有 job
// console.log(fetchData.job.position);
// 改成
console.log(fetchData?.job?.position);
