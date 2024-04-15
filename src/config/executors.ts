export enum Platform {
  WINDOWS = "windows",
  ANDROID = "android",
  IOS = "ios",
}
export function PlatformReadable(platform: Platform) {
  switch (platform) {
    case Platform.ANDROID:
      return "Android";
    case Platform.IOS:
      return "iOS";
    case Platform.WINDOWS:
    default:
      return "Windows";
  }
}
export enum Status {
  PATCHED = "patched",
  WORKING = "working",
}
export const StatusReadable = (status: Status) =>
  status === Status.PATCHED ? "❌ Patched" : "✅ Working";

export enum Price {
  FREE = "free",
  PAID = "paid",
  FREEMIUM = "freemium",
}
export function PriceReadable(price: Price) {
  switch (price) {
    case Price.PAID:
      return "💵 Paid";
    case "freemium":
      return "☯️ Freemium";
    case Price.FREE:
    default:
      return "🆓 Free";
  }
}
export enum Key {
  NOKEY = "nokey",
  KEY = "keylocked",
}
export const KeyReadable = (key: Key) =>
  key === Key.NOKEY ? "🔓 No Key" : "🔐 Keylocked";
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
    price: Price.FREE,
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
