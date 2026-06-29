import { Blocks, Copy, Sparkles, Wand2 } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            Everything you need to build beautiful interfaces.
          </h2>

          <p className="text-muted-foreground max-w-sm sm:ml-auto">
            A growing collection of modern components, motion effects, reusable
            blocks, and developer-friendly patterns—built on top of shadcn/ui
            and designed for real-world applications.
          </p>
        </div>

        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <div className="bg-linear-to-t from-background absolute inset-0 z-10 to-transparent" />

            <Image
              src="/feature-dark.png"
              className="hidden dark:block"
              alt="Shover Components Preview"
              width={2797}
              height={1137}
            />

            <Image
              src="/feature-light.png"
              className="dark:hidden"
              alt="Shover Components Preview"
              width={2797}
              height={1137}
            />
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Blocks className="size-4" />
              <h3 className="text-sm font-medium">Beautiful Components</h3>
            </div>

            <p className="text-muted-foreground text-sm">
              Carefully crafted components built for modern apps, dashboards,
              and landing pages.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Motion First</h3>
            </div>

            <p className="text-muted-foreground text-sm">
              Smooth, meaningful animations that enhance every interaction
              without unnecessary complexity.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Copy className="size-4" />
              <h3 className="text-sm font-medium">Copy & Customize</h3>
            </div>

            <p className="text-muted-foreground text-sm">
              Own the code you ship. Copy components, customize freely, and make
              them truly yours.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Wand2 className="size-4" />
              <h3 className="text-sm font-medium">Built for Developers</h3>
            </div>

            <p className="text-muted-foreground text-sm">
              Powered by shadcn/ui with clean code, TypeScript, and a delightful
              developer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}