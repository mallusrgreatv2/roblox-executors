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
      className="m-5 flex flex-col rounded-lg bg-green-600 px-10 py-5"
    >
      <div className="flex items-center">
        <img
          src={executor.icon}
          width={64}
          height={64}
          className="rounded-full"
        />
        <h1 className={cn("ml-1 text-3xl font-bold", executorColor(executor))}>
          {executor.name}
        </h1>
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
        <Field
          name="Website:"
          link
          linkClassName="text-sky-300 hover:text-sky-400"
        >
          {executor.website}
        </Field>
      ) : (
        ""
      )}
      {executor.discord ? (
        <Field
          name="Discord:"
          link
          linkClassName="text-sky-300 hover:text-sky-400"
        >
          {executor.discord}
        </Field>
      ) : (
        ""
      )}
    </div>
  );
}
function executorColor(executor: Executor) {
  if (executor.status === Status.PATCHED) return "text-red-500";
  if (executor.status === Status.PARTIAL) return "text-red-200";

  if (executor.detected === Detected.YES) return "text-yellow-400";
  if (executor.detected === Detected.PARTIAL) return "text-yellow-200";

  if (executor.warning || executor.warningLink) return "text-[#ffb02e]";

  return "text-white";
}
