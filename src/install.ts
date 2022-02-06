import settings, { scheme } from "./settings";
import type { Settings } from "../types";
import { platform } from "os";
import findSettings from "./utils/findSettings";
import fs, { copyFileSync, writeFileSync } from "fs";
import merge from "lodash/merge";
import { createSpinner } from "nanospinner";
import chalk from "chalk";

const spinner = createSpinner("Installing, please wait...").start();

try {
  if (platform() !== "win32") {
    throw new Error("This script only works on Windows");
  }

  const settingsPath = findSettings();
  let settingsJson = JSON.parse(
    fs.readFileSync(settingsPath, "utf-8")
  ) as Settings;

  // replace old version if found
  settingsJson.schemes = settingsJson.schemes.filter(
    (schema) => schema?.name !== scheme.name
  );

  settingsJson = merge(settingsJson, settings);
  copyFileSync(settingsPath, `${settingsPath}.${Date.now()}`);
  writeFileSync(settingsPath, JSON.stringify(settingsJson, null, 2), "utf-8");

  spinner.success({
    mark: "🚀",
    text: "Installed! You may want to reboot to enable Acrylic",
  });
} catch (error: any) {
  spinner.error({
    mark: "❌",
    text: error?.message || error,
  });
}
