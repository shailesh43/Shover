'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, TerminalIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.5,
        duration: 1.8,
      },
    },
  },
}

// Components cycled through in the terminal command.
const FLIP_COMPONENTS = ['apple-hello', 'desktop-dock', 'card-carousel']

function FlippingComponentName() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FLIP_COMPONENTS.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ minWidth: '9ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={FLIP_COMPONENTS[index]}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="inline-block">
          {FLIP_COMPONENTS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section className="relative overflow-hidden lg:h-[calc(100svh-4rem)]">
          <div className="relative flex h-full items-center">            
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div
              className="relative order-last mt-10 aspect-15/8 w-full overflow-hidden
                lg:absolute lg:inset-y-0 lg:right-0 lg:top-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:h-svh lg:w-[58%]
                xl:w-[60%]">
              <div className="relative h-full w-full">
                {/* Radial gradient overlay: transparent over the right/sharp part of the image, fading to solid background color toward the left edge where the text sits */}
                <div className="bg-radial-[at_75%_35%] to-background z-1 -inset-17 absolute from-transparent to-40% hidden lg:block" />

                <Image
                  className="hidden object-cover object-top-right dark:block"
                  src="/feature-dark.png"
                  alt="app screen"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
                <Image
                  className="object-cover object-top-right dark:hidden"
                  src="/feature-light.png"
                  alt="app screen"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="relative z-10 mx-auto grid grid-cols-1 items-center gap-10 lg:block">
              {/* Text column */}
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mx-0 lg:w-1/2 lg:text-left lg:pr-6 xl:pr-10">
                <Link
                  href="/docs/layouts/hero-section"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:mx-0">
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                  <span className="text-sm">Responsive Layouts</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance font-sans text-4xl tracking-tighter md:text-6xl lg:mt-16">
                  Build modern, sleek & animated interfaces with Shover
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-5xl text-neutral-500 dark:text-neutral-400 text-lg lg:mx-0">
                  A modern UI library built on top of shadcn/ui, featuring beautifully crafted components, smooth animations, reusable blocks, and everything you need to build polished interfaces faster.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <div
                    key={1}
                    className="border-blue-100 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      asChild
                      size="lg"
                      className="bg-neutral-200 *:hover:bg-neutral-200 dark:bg-neutral-800 dark:*:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-100 px-4">
                      <Link href="/docs">
                        <TerminalIcon className="h-5 w-5 shrink-0 font-bold text-neutral-800 dark:text-neutral-100" />
                        <span className="flex items-center font-mono text-sm tracking-tight sm:text-base">
                          <span className="text-green-500 dark:text-green-300">npx&nbsp;</span>
                          shadcn add @shover/
                          <FlippingComponentName />
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <div
                    key={2}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base">
                      <Link href="/docs/getting-started">
                        <span className="flex items-center gap-2">
                          Get Started <ArrowRight />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
        <br />
      </main>
    </>
  )
}