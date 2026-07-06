import SectionHeading, { BlackButton } from './SectionHeading.jsx'

/* Testimonial copy is paraphrased placeholder text in the original layout */
const QUOTES = [
  {
    name: 'Abe Duran',
    role: 'Developer Support, Zapier',
    mark: <span className="block h-2 w-6 rounded-sm bg-orange-600" />,
    quote:
      'We have found it incredibly helpful. Moving to this platform has been one of the best decisions our team has made in a long time.',
  },
  {
    name: 'Dominic Macias',
    role: 'Legal Counsel, Axiom',
    mark: (
      <svg viewBox="0 0 24 24" className="size-5" fill="#0a0a0a"><path d="M12 3 2 21h20L12 3zm0 5 6 11H6l6-11z" /></svg>
    ),
    quote:
      'Since adopting Mintlify last year, we have been more and more delighted with that decision — our customers get real value from the AI chat responses.',
  },
  {
    name: 'Guillermo Rauch',
    role: 'CEO, Vercel',
    mark: (
      <svg viewBox="0 0 24 24" className="size-5" fill="#0a0a0a"><path d="M12 4l10 17H2L12 4z" /></svg>
    ),
    quote:
      'Was wondering how these docs were built because they were so fast and delightful — turns out it was Mintlify.',
  },
  {
    name: 'Sarah Deaton',
    role: 'Member of Technical Staff, Anthropic',
    mark: <span className="text-lg font-bold">A\\</span>,
    quote:
      "I can't run a doc site on my own in addition to writing the content. This lets me focus on the writing — not the building and owning of everything else.",
  },
  {
    name: 'Matt Palmer',
    role: 'Developer Relations, Replit',
    mark: (
      <svg viewBox="0 0 24 24" className="size-5" fill="#f26207"><path d="M5 3h7v6H5zM12 9h7v6h-7zM5 15h7v6H5z" /></svg>
    ),
    quote:
      'Our docs got a makeover. We moved to Mintlify for better navigation and a better user experience.',
  },
  {
    name: 'Agam Jain',
    role: 'Founder, TensorFuse',
    mark: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="#0a0a0a" strokeWidth="2"><path d="M4 4l16 16M20 4L4 20" /></svg>
    ),
    quote:
      'Love the story and even more so the product. It has been amazing and is a core part of how we ship. Happy user here!',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading line1="Trusted by teams building for agents." line2="">
          <BlackButton>Read more</BlackButton>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <div key={q.name} className="rounded-xl border border-line bg-cream p-6">
              <div className="flex items-center gap-3.5">
                <span className="flex size-11 items-center justify-center rounded-lg border border-line bg-white">
                  {q.mark}
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-ink">{q.name}</span>
                  <span className="block text-[13px] text-gray-500">{q.role}</span>
                </span>
              </div>
              <p className="mt-5 text-[14px] leading-[22px] text-gray-700">{q.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
