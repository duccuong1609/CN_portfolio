import Image from "next/image";

export const Illustration = ({
  group,
  className,
}: {
  group: { image: string; title: string };
  className?: string;
}) => {
  return (
    <div
      className={`${className || "col-span-7 relative group overflow-hidden rounded-lg"}`}
    >
      <Image
        fill
        alt={group.title}
        className="rounded-md object-cover transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:brightness-100 brightness-50 grayscale group-hover:grayscale-0 hover:shadow-[3px_3px_0_0_var(--color-primary)]"
        sizes="100%"
        src={group.image}
      />
      <div
        className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300 opacity-40 group-hover:opacity-0"
        style={{ background: "var(--color-primary)" }}
      />
    </div>
  );
};
