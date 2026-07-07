const LOGOS = [
  { name: 'Microsoft', src: 'https://www.mintlify.com/images/customer-stories/microsoft-light.svg' },
  { name: 'Anthropic', src: 'https://www.mintlify.com/images/customer-stories/anthropic-light.svg' },
  { name: 'Amazon', src: 'https://www.mintlify.com/images/customer-stories/amazon-light.svg' },
  { name: 'Coinbase', src: 'https://www.mintlify.com/images/customer-stories/coinbase-light.svg' },
  { name: 'Cognition', src: 'https://www.mintlify.com/images/customer-stories/cognition-light.svg' },
  { name: 'Solana', src: 'https://www.mintlify.com/images/customer-stories/solana-light.svg' },
  { name: 'AT&T', src: 'https://www.mintlify.com/images/customer-stories/att-light.svg' },
  { name: 'Rivian', src: 'https://www.mintlify.com/images/customer-stories/rivian-light.svg' },
]

export default function LogoWall() {
  return (
    <section className="relative border-y border-line bg-white">
      <div className="mx-auto grid max-w-[1225px] grid-cols-1 gap-10 px-4 py-14 lg:grid-cols-[1fr_2.1fr]">
        {/* left copy */}
        <div className="flex flex-col justify-between py-2">
          <h2 className="max-w-xs text-[22px] font-normal leading-8 text-gray-500">
            Join <b className="font-semibold text-ink">20,000+</b> of the world's most ambitious
            companies building for agents.
          </h2>
          <a
            href="/customers"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Read customer stories
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>

        {/* logo grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LOGOS.map((logo) => (
            <a
              key={logo.name}
              href="#"
              className="flex h-[135px] items-center justify-center rounded-lg border border-line bg-cream transition-colors hover:bg-cream-dark"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-7 w-auto max-w-[70%] opacity-80"
                onError={(e) => {
                  e.currentTarget.outerHTML = `<span class="text-[15px] font-semibold tracking-wide text-gray-700">${logo.name}</span>`
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
