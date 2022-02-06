export interface Settings {
  $schema: string;
  actions: Partial<Action>[];
  copyFormatting: string;
  copyOnSelect: boolean;
  defaultProfile: string;
  profiles: Partial<Profiles>;
  schemes: Partial<Scheme>[];
  useAcrylicInTabRow: boolean;
}

export interface Scheme {
  name: string;
  white: string;
  black: string;
  blue: string;
  cyan: string;
  green: string;
  red: string;
  purple: string;
  yellow: string;
  foreground: string;
  selectionBackground: string;
  background: string;
  cursorColor: string;
  brightBlack: string;
  brightWhite: string;
  brightBlue: string;
  brightCyan: string;
  brightGreen: string;
  brightPurple: string;
  brightRed: string;
  brightYellow: string;
}

interface Profiles {
  defaults: Partial<Defaults>;
  list: List[];
}

interface List {
  commandline?: string;
  guid: string;
  hidden?: boolean;
  name: string;
  source?: string;
}

interface Defaults {
  acrylicOpacity: number;
  bellStyle: string;
  colorScheme: string;
  font: Font;
  startingDirectory: string;
  useAcrylic: boolean;
  tabColor: string;
}

interface Font {
  face: string;
  features: Features;
}

interface Features {
  liga: number;
}

interface Action {
  command: Command | Command2 | string;
  keys: string;
}

interface Command2 {
  action: string;
  split: string;
  splitMode: string;
}

interface Command {
  action: string;
  singleLine: boolean;
}
