import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, BatteryChargingIcon, TimerIcon } from 'lucide-react';
import ContributorCounter from '@/components/contributor-count';
import { gitConfig } from '@/lib/shared';

const owner = gitConfig.owner;
const repo = gitConfig.repo;

const headingVariants = cva('font-medium tracking-tight', {
  variants: {
    variant: {
      h2: 'text-3xl lg:text-4xl',
      h3: 'text-xl lg:text-2xl',
    },
  },
});

const buttonVariants = cva(
  'inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-brand-foreground hover:bg-brand-200',
        secondary: 'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const cardVariants = cva('rounded-2xl text-sm p-6 bg-origin-border shadow-lg', {
  variants: {
    variant: {
      secondary: 'bg-brand-secondary text-brand-secondary-foreground',
      default: 'border bg-fd-card',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function ContributeSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <h2
        className={cn(
          headingVariants({
            variant: 'h2',
            className: 'mt-8 text-primary text-center mb-4 col-span-full',
          }),
        )}
      >
        Open Source Forever.
      </h2>

      <div className={cn(cardVariants({ className: 'flex flex-col' }))}>
        <Heart fill="currentColor" className="text-pink-500 mb-4" />
        <h3
          className={cn(
            headingVariants({
              variant: 'h3',
              className: 'mb-6',
            }),
          )}
        >
          Made Possible by You.
        </h3>
        <p className="mb-8">Shover is 100% powered by passion and open source community.</p>
        <div className="mb-8 flex flex-row items-center gap-2">
          <Link href="/sponsors" className="bg-primary text-primary-foreground hover:bg-primary-200 inline-flex justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-colors">
            Sponsors
          </Link>
          <a
            href="https://github.com/shailesh43/Shover/graphs/contributors"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            Contributors
          </a>
        </div>
        <ContributorCounter repoOwner={owner} repoName={repo} />
      </div>
      <div
        className={cn(
          cardVariants({
            className: 'flex flex-col p-0 pt-8',
          }),
        )}
      >
        <h2 className="text-3xl text-center font-extrabold font-mono uppercase mb-4 lg:text-4xl">
          Build Your Docs
        </h2>
        <p className="text-center font-mono text-xs opacity-50 mb-8">
          light and gorgeous, just like the moon.
        </p>
        <div className="h-[200px] mt-auto overflow-hidden p-8 bg-gradient-to-b from-brand-secondary/10">
          <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-brand-secondary size-[500px] rounded-full" />
        </div>
      </div>

      <ul
        className={cn(
          cardVariants({
            className: 'flex flex-col gap-6 col-span-full',
          }),
        )}
      >
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <BatteryChargingIcon className="size-5" />
            Battery guaranteed.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Actively maintained, open for contributions.
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Fully open-source.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Open source, available on Github.
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <TimerIcon className="size-5" />
            Within seconds.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Initialize a new project instantly with CLI.
          </span>
        </li>
        <li className="flex flex-row flex-wrap gap-2 mt-auto">
          <Link href="/docs" className="bg-primary text-primary-foreground hover:bg-primary-200 inline-flex justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-colors">
            Read docs
          </Link>
          <a
            href="https://github.com/fuma-nama/fumadocs"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({
                variant: 'secondary',
              }),
            )}
          >
            Open GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

function ContributeSection2() {
  return (
  <div className={cn(cardVariants(), 'flex flex-col p-0 overflow-hidden')}>
        <div className="p-6 mb-2">
          <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-6' }))}>
            The shadcn/ui for docs
          </h3>
          <p className="mb-6">
            Fumadocs CLI creates interactive components for your docs, offering a rich experience to
            your users.
          </p>
          <Link href="/docs/cli" className={cn(buttonVariants({ className: 'w-fit' }))}>
            Commands
          </Link>
        </div>
        <Image src="/registry-light.png" width={800} height={400} alt="shadcn" className="mt-auto flex-1 w-full object-cover" />
  </div>
  );
}

export default ContributeSection2
