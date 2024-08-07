import Fuse from "fuse.js";
import { Detected, Executor, Key, Platform, PriceType, Status } from "./types";

export const executors: Executor[] = [
  {
    name: "Delta",
    platforms: [Platform.ANDROID],
    status: Status.WORKING,
    priceType: PriceType.FREE,
    detected: Detected.NO,
    key: Key.KEY,
    icon: "/executors/delta.png",
    discord: "https://discord.gg/deltaex",
    website: "https://deltaexploits.net",
  },
  {
    name: "Solara",
    platforms: [Platform.WINDOWS],
    status: Status.WORKING,
    priceType: PriceType.FREE,
    detected: Detected.YES,
    key: Key.NOKEY,
    icon: "/executors/solara.png",
    discord: "https://discord.gg/realsolara",
  },
  {
    name: "Valyse",
    platforms: [Platform.ANDROID],
    status: Status.WORKING,
    priceType: PriceType.FREE,
    detected: Detected.NO,
    key: Key.NOKEY,
    icon: "/executors/valyse.png",
    discord: "https://discord.gg/xXJzaCbxUv",
    website: "https://valyse.best",
  },
  {
    name: "MacSploit",
    platforms: [Platform.MACOS],
    status: Status.WORKING,
    priceType: PriceType.PAID,
    detected: Detected.YES,
    key: Key.NOKEY,
    icon: "/executors/macsploit.png",
    discord: "https://discord.gg/macsploit",
    price: 4.99,
    website: "https://abyssdigital.xyz",
  },
  {
    name: "Hydrogen",
    platforms: [Platform.ANDROID, Platform.MACOS],
    status: Status.WORKING,
    priceType: PriceType.FREE,
    detected: Detected.NO,
    key: Key.KEY,
    icon: "/executors/hydrogen.png",
    discord: "https://discord.gg/hydrogen",
    website: "https://hydrogen.sh",
    warning: "Android version works, but the MacOS version doesn't.",
  },
  {
    name: "Wave",
    platforms: [Platform.WINDOWS],
    status: Status.WORKING,
    priceType: PriceType.FREEMIUM,
    price: null,
    detected: Detected.PARTIAL,
    key: Key.NOKEY,
    website: "https://getwave.gg",
    discord: "https://discord.gg/getwave",
    icon: "/executors/wave.png",
  },
  {
    name: "Arceus X",
    platforms: [Platform.ANDROID, Platform.IOS],
    status: Status.WORKING,
    priceType: PriceType.FREEMIUM,
    price: 0.99,
    detected: Detected.NO,
    warning: "iOS version currently does not work.",
    key: Key.KEY,
    website: "https://spdmteam.com",
    discord: "https://discord.gg/arceus",
    icon: "/executors/arceus.png",
  },
  {
    name: "Celery",
    platforms: [Platform.WINDOWS],
    status: Status.WORKING,
    priceType: PriceType.FREE,
    detected: Detected.PARTIAL,
    key: Key.NOKEY,
    discord: "https://discord.gg/celery",
    icon: "/executors/celery.png",
  },
];
export function filterAndSortExecutors(
  executors: Executor[],
  {
    os,
    status,
    detected,
    key,
    price,
    sort,
    search,
  }: {
    os: string;
    status: string;
    detected: string;
    key: string;
    price: string;
    sort: string;
    search: string;
  },
) {
  const filtered = executors
    .filter((executor) =>
      !os || os !== "all" ? executor.platforms.includes(os as Platform) : true,
    )
    .filter((executor) =>
      !status || status !== "all" ? executor.status === status : true,
    )
    .filter((executor) =>
      !detected || detected !== "all" ? executor.detected === detected : true,
    )
    .filter((executor) => (!key || key !== "all" ? executor.key === key : true))
    .filter((executor) =>
      !price || price !== "all" ? executor.priceType === price : true,
    )
    .sort((a, b) => {
      if (sort === "name") return a.name.charCodeAt(0) - b.name.charCodeAt(0);
      if (sort === "price") return (b.price || 0) - (a.price || 0);
      const statusPriority = {
        [Status.WORKING]: 0,
        [Status.PARTIAL]: 1,
        [Status.PATCHED]: 2,
      };
      const detectedPriority = {
        [Detected.NO]: 0,
        [Detected.PARTIAL]: 1,
        [Detected.YES]: 2,
      };
      if (sort === "working") {
        return statusPriority[a.status] - statusPriority[b.status];
      }
      if (sort === "undetected") {
        return detectedPriority[a.detected] - detectedPriority[b.detected];
      }
      if (sort === "working-undetected") {
        const compareStatus =
          statusPriority[a.status] - statusPriority[b.status];
        const compareDetected =
          detectedPriority[a.detected] - detectedPriority[b.detected];

        if (compareStatus !== 0) {
          return compareStatus;
        } else {
          return compareDetected;
        }
      }
      return 0;
    });
  if (search) {
    const fuse = new Fuse(executors, {
      keys: [
        "name",
        "platforms",
        "status",
        "priceType",
        "detected",
        "key",
        "discord",
      ],
    });
    return fuse.search(search).map((v) => v.item);
  }
  return filtered;
}
