export enum Platform {
  WINDOWS = "Windows",
  ANDROID = "Android",
  IOS = "iOS",
}
export enum Status {
  PATCHED = "❌ Patched",
  WORKING = "✅ Working",
}
export enum Price {
  FREE = "🆓 Free",
  PAID = "💵 Paid",
  FREEMIUM = "☯️ Freemium",
}
export enum Key {
  NOKEY = "🔓 No Key",
  KEY = "🔐 Keylocked",
}
export const executors: {
  name: string;
  platforms: Platform[];
  status: Status;
  price: Price;
  key: Key;
  website?: string;
  discord?: string;
  icon: string;
}[] = [
  {
    name: "Wave",
    platforms: [Platform.WINDOWS],
    status: Status.PATCHED,
    price: Price.FREE,
    key: Key.NOKEY,
    website: "https://getwave.gg/",
    discord: "https://discord.gg/getwave",
    icon: "/executors/wave.png",
  },
  {
    name: "Krampus",
    platforms: [Platform.WINDOWS],
    status: Status.WORKING,
    price: Price.PAID,
    key: Key.NOKEY,
    website: "https://krampus.gg/",
    discord: "https://discord.gg/krampus",
    icon: "/executors/krampus.png",
  },
  {
    name: "Codex",
    platforms: [Platform.ANDROID, Platform.IOS],
    status: Status.WORKING,
    price: Price.FREEMIUM,
    key: Key.KEY,
    website: "https://codex.lol/",
    discord: "https://discord.gg/robloxexploits",
    icon: "/executors/codex.png",
  },
  {
    name: "Arceus X",
    platforms: [Platform.ANDROID, Platform.IOS],
    status: Status.WORKING,
    price: Price.FREE,
    key: Key.KEY,
    website: "https://spdmteam.com/",
    discord: "https://discord.gg/arceus",
    icon: "/executors/arceus.png",
  },
];
