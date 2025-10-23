import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
          width={128}
            height={36}
            src="/Shover-full.svg"
            alt="alt"
          />
        </>
      ),
    },
  };
}