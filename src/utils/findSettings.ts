import fs, { statSync } from "fs";

export default function findSettings() {
  const localAppData = process.env["LocalAppData"];
  const packages = `${localAppData}\\Packages`;

  let winTermDir;
  for (const dir of fs.readdirSync(packages)) {
    if (!dir.match(/Microsoft\.WindowsTerminal.*/)) {
      continue;
    }

    try {
      const stat = statSync(`${packages}\\${dir}`);
      if (!stat.isDirectory()) {
        continue;
      }
    } catch (_error) {
      continue;
    }

    winTermDir = dir;
    break;
  }

  if (!winTermDir) {
    throw new Error("Unable to locate Windows Terminal's settings.json");
  }

  const settingsPath = `${packages}\\${winTermDir}\\LocalState\\settings.json`;

  try {
    const stat = statSync(settingsPath);
    if (stat.isFile()) {
      return settingsPath;
    }
  } catch (_error) {
    // ignore errors
  }

  throw new Error("settings.json doesn't exist or isn't a file");
}
