import { Pref } from "dotpref";
import prompts from "prompts";
import minimist from "minimist";

export default async function config(key, message) {
  const options = getCommandLineOptions();

  if (options.reset) {
    resetConfig(key);
  }

  const editExistingValues = options.edit;

  const value = Pref.get(key);

  if (!editExistingValues && value !== undefined) return value;

  const result = await prompts([
    {
      type: "text",
      name: key,
      message,
      initial: value,
    },
  ]);

  const newValue = result[key];
  Pref.set(key, newValue);
  return newValue;
}

export function resetConfig(key) {
  Pref.reset(key);
}

export function getConfigPath() {
  return Pref.filePath;
}

function getCommandLineOptions() {
  return minimist(process.argv.slice(2));
}
