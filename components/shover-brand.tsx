import Image from "next/image";

export function ShoverBrand() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/shover-logo.png"
        alt="Shover"
        width={22}
        height={22}
        className="rounded-md object-contain"
      />
      <span className="text-md font-black tracking-tighter">Shover</span>
    </div>
  );
}