const { exec } = require("node:child_process");

console.log(JSON.stringify(process.env, null, 2));

exec("docker ps", function (err, stdout) {
  console.log(`docker ps: ${err}`);
  console.log(stdout);
});
