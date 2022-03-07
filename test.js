import config, { resetConfig, getConfigPath } from "./index.js";

const favoriteNumber = await config(
  "favoriteNumber",
  "Please let us know your favorite number"
);
console.log("Your favorite number is", favoriteNumber);

const favoriteNumber2 = await config(
  "favoriteNumber",
  "Please let us know your favorite number again"
);
console.log("Your favorite number is", favoriteNumber2);

resetConfig("favoriteNumber");

const favoriteNumber3 = await config(
  "favoriteNumber",
  "Please let us know your favorite number once more"
);
console.log("Your favorite number is", favoriteNumber3);

resetConfig("favoriteNumber");
