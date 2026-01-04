const dateFormatter = require("datehandler");

console.log(`La hora actual es: ${dateFormatter.getTimestamp()}`);
console.log(`La hora actual en español es: ${dateFormatter.getLongTime()}`);
console.log(
  `La hora actual en inglés es: ${dateFormatter.getLongTime("en-US")}`
);
