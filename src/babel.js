const testAsync = async () => {
  return await Promise.resolve("asdasd");
};

testAsync(console.log);

console.log("asdasdas");

const unused = 30;

import("lodash").then((_) => {
  console.log("Lodash", _.random(0, 45, true));
});
