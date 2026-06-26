import Image from "next/image";

export function ShoverBrand() {
  return (
    <div className="flex items-center gap-2 dark:text-neutral-200 text-neutral-700">
      <Image
        src="/shover-logo.png"
        alt="Shover"
        width={22}
        height={22}
        className="rounded-md object-contain"
        loading="eager"
      />
      <span className="text-md font-semibold tracking-tighter">Shover</span>
    </div>
  );
}