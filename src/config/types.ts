export interface Executor {
  /** The name of the executor */
  name: string;
  /** The platforms the executor works on */
  platforms: Platform[];
  /** The status of the executor (patched or working) */
  status: Status;
  /** The type of price (free, premium, or freemium aka mixed) */
  priceType: PriceType;
  /** The detection status of the executor, whether it is detected or undetected */
  detected: Detected;
  /** A link that explains why this executor must be used with caution, if applicable. */
  warning?: string;
  /** Whether the executor is locked with a key which we have to get by watching ads */
  key: Key;
  /** The lowest price in USD in the subscription model of the executor (or its premium version), if applicable.
   * Specify null if price is unknown.
   */
  price?: number | null;
  /** The official website of the executor, if applicable */
  website?: string;
  /** The official Discord server of the executor, if applicable */
  discord?: string;
  /** The relative path (or url) to the executor's icon. Selfhosted pictures preferred to respect bandwidth */
  icon: string;
}

export enum Platform {
  WINDOWS = "windows",
  ANDROID = "android",
  IOS = "ios",
}
export enum Status {
  PATCHED = "patched",
  WORKING = "working",
  PARTIAL = "partial",
}
export enum Detected {
  YES = "yes",
  NO = "no",
  PARTIAL = "partial",
}
export enum PriceType {
  FREE = "free",
  PAID = "paid",
  FREEMIUM = "freemium",
}
export enum Key {
  NOKEY = "nokey",
  KEY = "keylocked",
}

export const StatusReadable = (status: Status) => {
  switch (status) {
    case Status.PATCHED:
      return "✖️ Patched";
    case Status.PARTIAL:
      return "⚠️ Partially Patched";
    case Status.WORKING:
    default:
      return "✅ Working";
  }
};
export const DetectedReadable = (detected: Detected) => {
  switch (detected) {
    case Detected.YES:
      return "⚠️ Detected";
    case Detected.PARTIAL:
      return "☯️ Partially Detected";
    case Detected.NO:
    default:
      return "✅ Undetected";
  }
};
export const KeyReadable = (key: Key) =>
  key === Key.NOKEY ? "🔓 No Key" : "🔐 Keylocked";
export function PriceTypeReadable(price: PriceType) {
  switch (price) {
    case PriceType.PAID:
      return "💵 Paid";
    case "freemium":
      return "☯️ Freemium";
    case PriceType.FREE:
    default:
      return "🆓 Free";
  }
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
export function formatPrice(price?: number | null) {
  return typeof price === "number"
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
    : price === undefined
      ? "🆓 Free"
      : "⚠️ Unknown Price";
}
