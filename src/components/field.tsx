import { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function Field({
  name,
  children,
  link = false,
  linkClassName = "",
}: {
  name: string;
  children: ReactNode;
  link?: boolean;
  linkClassName?: string;
}) {
  return (
    <div>
      <h4 className="mt-1 text-xl font-semibold">{name}</h4>
      {link && typeof children === "string" ? (
        <a
          href={children}
          className={cn(
            "text-sky-300 transition-colors hover:text-sky-400",
            linkClassName,
          )}
          target="_blank"
        >
          {children}
        </a>
      ) : typeof children === "string" ? (
        <p>{children}</p>
      ) : (
        children
      )}
    </div>
  );
}
