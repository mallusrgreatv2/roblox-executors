import { Detected, Executor, PriceType, formatPrice } from "../config/types";
import {
  DetectedReadable,
  KeyReadable,
  PriceTypeReadable,
  Status,
  StatusReadable,
} from "../config/types";
import { cn } from "../lib/utils";
import Field from "./field";
import PlatformText from "./platform";

export default function ExecutorData({ executor }: { executor: Executor }) {
  return (
    <div
      key={executor.name}
      className={cn(
        "m-5 flex flex-col rounded-lg px-10 py-5",
        executorColor(executor),
      )}
    >
      <div className="flex items-center">
        <img
          src={executor.icon}
          width={64}
          height={64}
          className="rounded-full"
        />
        <h1 className="ml-1 text-3xl font-bold">{executor.name}</h1>
      </div>
      <Field name="Platforms:">
        {executor.platforms.map((v) => (
          <PlatformText platform={v} key={v} />
        ))}
      </Field>
      <Field name="Status:">{StatusReadable(executor.status)}</Field>
      <Field name="Detected:">{DetectedReadable(executor.detected)}</Field>
      {executor.warning || executor.warningLink ? (
        <Field name="⚠️ Use with caution!">
          {executor.warning ? <p>{executor.warning}</p> : ""}
          {executor.warningLink ? (
            <p>
              More info:{" "}
              <a
                target="_blank"
                href={executor.warningLink}
                className="text-sky-300 hover:text-sky-400"
              >
                {executor.warningLink}
              </a>
            </p>
          ) : (
            ""
          )}
        </Field>
      ) : (
        ""
      )}
      <Field name="Key:">{KeyReadable(executor.key)}</Field>
      <Field name="Price:">
        <p>
          {PriceTypeReadable(executor.priceType)}
          {executor.priceType !== PriceType.FREE
            ? ` (${formatPrice(executor.price)})`
            : ""}
        </p>
      </Field>
      {executor.website ? (
        <Field name="Website:" link>
          {executor.website}
        </Field>
      ) : (
        ""
      )}
      {executor.discord ? (
        <Field name="Discord:" link>
          {executor.discord}
        </Field>
      ) : (
        ""
      )}
    </div>
  );
}
function executorColor(executor: Executor) {
  if (executor.status === Status.PATCHED) return "bg-red-500";
  if (executor.status === Status.PARTIAL) return "bg-red-200";

  if (executor.detected === Detected.YES) return "bg-yellow-400";
  if (executor.detected === Detected.PARTIAL) return "bg-yellow-200";

  if (executor.warning || executor.warningLink) return "bg-orange-300";

  return "bg-green-600";
}
