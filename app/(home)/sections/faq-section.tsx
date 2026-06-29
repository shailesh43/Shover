import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQSection() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is Shover?',
      answer:
        'Shover is an open-source UI library built on top of shadcn/ui, offering beautifully crafted components, motion effects, reusable blocks, and templates to help you build modern interfaces faster.',
    },
    {
      id: 'item-2',
      question: 'Can I customize the components?',
      answer:
        'Absolutely. Every component is designed to be copied into your project and customized however you like. You own the code, making it easy to adapt Shover to your own design system and workflow.',
    },
    {
      id: 'item-3',
      question: 'Does Shover work with shadcn/ui?',
      answer:
        'Yes. Shover is built around the shadcn/ui ecosystem, so it integrates naturally into existing projects while following the same copy-and-customize philosophy.',
    },
    {
      id: 'item-4',
      question: 'Is Shover free and open source?',
      answer:
        'Yes! Shover is completely free and open source. You can use it in personal and commercial projects, and contributions from the community are always welcome.',
    },
    {
      id: 'item-5',
      question: 'How can I contribute?',
      answer:
        'You can contribute by improving existing components, fixing bugs, enhancing the documentation, or proposing new ideas. Check out the Contribution Guide to get started.',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground mt-4 text-balance">
            Everything you need to know before building with Shover.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
            {faqItems.map((item) => (
              <div
                className="group"
                key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>

                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Still have questions? Visit our{' '}
            <Link
              href="/docs"
              className="text-primary font-medium hover:underline">
              documentation
            </Link>{' '}
            or open an{' '}
            <Link
              href="https://github.com/shailesh43/Shover/issues"
              className="text-primary font-medium hover:underline">
              issue on GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}