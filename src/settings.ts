import { Scheme, Settings } from "../types";
import mix from "./utils/mix";

export const scheme: Scheme = {
  name: "Aster",
  black: "#141617",
  blue: "#719DF4",
  cyan: "#48D7C3",
  green: "#8EC061",
  red: "#DA5858",
  purple: "#CA60FB",
  yellow: "#F0C544",
  brightWhite: "#E8E5E3",
  get white() {
    return mix(this.black, this.brightWhite, 0.85);
  },
  get foreground() {
    return this.white;
  },
  get selectionBackground() {
    return this.white;
  },
  get cursorColor() {
    return this.yellow;
  },
  get background() {
    return this.black;
  },
  get brightBlack() {
    return mix(this.black, this.brightWhite, 0.5);
  },
  get brightBlue() {
    return mix(this.blue, this.brightWhite, 0.25);
  },
  get brightCyan() {
    return mix(this.cyan, this.brightWhite, 0.4);
  },
  get brightGreen() {
    return mix(this.green, this.brightWhite, 0.25);
  },
  get brightRed() {
    return mix(this.red, this.brightWhite, 0.25);
  },
  get brightPurple() {
    return mix(this.purple, this.brightWhite, 0.4);
  },
  get brightYellow() {
    return mix(this.yellow, this.brightWhite, 0.25);
  },
};

const settings: Partial<Settings> = {
  useAcrylicInTabRow: true,
  profiles: {
    defaults: {
      get colorScheme() {
        return scheme.name;
      },
      acrylicOpacity: 0.883,
      bellStyle: "audible",
      font: {
        face: "Fira Code",
        features: {
          liga: 1,
        },
      },
      useAcrylic: true,
      tabColor: scheme.background,
    },
  },
  schemes: [scheme],
};

export default settings;
