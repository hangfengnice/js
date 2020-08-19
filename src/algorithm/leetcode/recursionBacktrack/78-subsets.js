var subsets = function (nums) {
  let res = [];
  dfs(0, []);
  return res;
  function dfs(begin, subset) {
    res.push(subset.slice());
    for (let i = begin; i < nums.length; i++) {
      subset.push(nums[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  }
};

function subset(nums) {
  return nums.reduce(
    (total, num) => total.concat(total.map((item) => item.concat(num))),
    [[]]
  );
}
