const file = require("fs");

const data = file.readFileSync("src/file.txt", "utf8");
console.log("file data: ", data);
