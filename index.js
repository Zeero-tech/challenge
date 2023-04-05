const { readFileSync } = require("fs");

function getDataBase() {
  const content = readFileSync("./data.json");
  return JSON.parse(content);
}

function main() {
  const videos = getDataBase();
}

main();
