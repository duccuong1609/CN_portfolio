import Image from "next/image";

export const Illustration = ({ group, className }: { group: any, className?: string }) => {
  return (
    <div className={`${className || 'col-span-7 relative group'}`}>
      <Image
        fill
        alt="Work Illustration"
        className="rounded-md hover:border-primary border lg:border-primary/20 object-cover !transition-all !duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:brightness-100 group-hover:shadow-[3px_3px_0_0_hsl(var(--heroui-primary))] brightness-75 grayscale group-hover:grayscale-0"
        src={group.image}
      />
      <div
        className="absolute inset-0 rounded-md pointer-events-none transition-all duration-300 mix-blend-multiply opacity-50 group-hover:opacity-0"
        style={{ background: "hsl(var(--heroui-primary))" }}
      />
    </div>
  );
};
