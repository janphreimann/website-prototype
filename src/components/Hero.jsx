import HeroAnimation from './HeroAnimation.jsx'

function ArrowRight({ className = 'size-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-white pt-14">
      {/* animated woven-lines background — spans nearly the full viewport (max 1920px), like the original */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-full max-w-[1920px] -translate-x-1/2"
        style={{
          // the woven lines run past the right canvas edge; mask them out softly like the left side
          WebkitMaskImage: 'linear-gradient(to right, black 78%, transparent 99%)',
          maskImage: 'linear-gradient(to right, black 78%, transparent 99%)',
        }}
      >
        <HeroAnimation />
      </div>

      {/* 24-col grid mirroring mintlify.com: text in cols 1-9, preview in cols 10-25 bleeding to the right edge */}
      <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1225px] grid-cols-1 items-start pt-6 lg:w-[calc(100%-64px)] lg:grid-cols-[repeat(24,minmax(0,1fr))] lg:gap-x-4 lg:pt-20">
        {/* text block */}
        <div className="flex flex-col gap-4 lg:col-start-1 lg:col-end-9 lg:row-start-1">
          {/* badge */}
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/80 py-1 pl-3 pr-2 text-[13px] text-gray-600 backdrop-blur transition-colors hover:bg-gray-50"
          >
            Agent traffic
            <span className="rounded-full bg-mint-50 px-2 py-0.5 font-mono text-[12px] font-medium text-mint-600">
              62.5198%
            </span>
            <ArrowRight className="size-3 text-gray-400" />
          </a>

          {/* headline */}
          <h1 className="font-display text-[40px] leading-[44px] tracking-[-0.8px] text-ink lg:text-[50px] lg:leading-[52px] lg:tracking-[-2px]">
            The knowledge infrastructure agents build on
          </h1>

          <p className="text-[17px] leading-6 text-gray-600">
            Self-updating documentation for <b className="font-semibold text-ink">startups</b>,{' '}
            <b className="font-semibold text-ink">enterprises</b>, and{' '}
            <b className="font-semibold text-ink">agents</b>.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-start gap-2 lg:col-start-1 lg:col-end-9 lg:row-start-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get started
            <ArrowRight />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded border border-line bg-white px-5 py-2.5 text-[14px] font-medium transition-colors hover:bg-gray-50"
          >
            {/* Google G */}
            <svg viewBox="0 0 24 24" className="size-4">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Sign up with Google
          </a>
        </div>

        {/* docs preview — in flow, 1057px wide, extending almost to the right viewport edge */}
        <div className="relative isolate col-span-full mt-16 w-[587px] max-w-none sm:mt-12 sm:w-[120%] lg:col-start-10 lg:col-end-[25] lg:row-start-2 lg:mt-0 lg:w-[1057px] lg:self-start">
          <div className="@container relative isolate aspect-[1080/656] w-full">
            {/* colorful glow behind the screenshot */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[15px] bottom-[72px] -z-10 rounded-t-xl blur-[24px]"
              style={{
                background:
                  'linear-gradient(106deg, rgba(68,174,255,0.5) 0%, rgba(24,226,153,0.5) 35%, rgba(186,255,36,0.5) 65%, rgba(24,226,153,0.5) 100%)',
              }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t border-[rgba(31,167,122,0.08)] bg-white">
              <img
                src="https://www.mintlify.com/images/docs-preview/preview-light.svg"
                alt="Docs preview"
                className="pointer-events-none absolute inset-0 h-full w-full object-contain object-top"
              />
            </div>
          </div>
          {/* fade the bottom of the screenshot into the page background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: 'linear-gradient(to bottom, transparent 55%, #fff 96%)' }}
          />
        </div>
      </div>
    </section>
  )
}
