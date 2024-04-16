export default function Field({
  name,
  children,
  link = false,
}: {
  name: string;
  children: JSX.Element | string;
  link?: boolean;
}) {
  return (
    <div>
      <h4 className="mt-1 text-xl font-semibold">{name}</h4>
      {link && typeof children === "string" ? (
        <a
          href={children}
          className="text-sky-300 transition-colors hover:text-sky-400"
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
