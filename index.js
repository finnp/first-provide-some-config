import { Pref } from "dotpref";
import prompts from "prompts";

export default async function config(key, message) {
  const value = Pref.get(key);

  if (value !== undefined) return value;

  const result = await prompts([
    {
      type: "text",
      name: key,
      message,
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
