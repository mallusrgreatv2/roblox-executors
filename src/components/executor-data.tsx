import { Executor, PriceType, formatPrice } from "../config/types";
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
        executor.status === Status.PATCHED ? "bg-red-500" : "bg-green-600",
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
        <div>
          {executor.platforms.map((v) => (
            <PlatformText platform={v} key={v} />
          ))}
        </div>
      </Field>
      <Field name="Status:">{StatusReadable(executor.status)}</Field>
      <Field name="Detected:">{DetectedReadable(executor.detected)}</Field>
      {executor.warning ? (
        <Field name="⚠️ Use with causion!">
          <p>
            More info:{" "}
            <a
              target="_blank"
              href={executor.warning}
              className="text-sky-300 hover:text-sky-400"
            >
              {executor.warning}
            </a>
          </p>
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
