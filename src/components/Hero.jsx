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
    <section className="relative overflow-hidden pt-14">
      {/* animated woven-lines background */}
      <HeroAnimation />

      <div className="relative mx-auto max-w-[1225px] px-4">
        <div className="pb-64 pt-20">
          {/* badge */}
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 py-1 pl-3 pr-2 text-[13px] text-gray-600 backdrop-blur transition-colors hover:bg-gray-50"
          >
            Agent traffic
            <span className="rounded-full bg-mint-50 px-2 py-0.5 font-mono text-[12px] font-medium text-mint-600">
              62.5198%
            </span>
            <ArrowRight className="size-3 text-gray-400" />
          </a>

          {/* headline */}
          <h1 className="font-display mt-6 max-w-xl text-[50px] leading-[1.04] tracking-[-2px] text-ink">
            The knowledge infrastructure agents build on
          </h1>

          <p className="mt-5 max-w-sm text-[17px] leading-6 text-gray-600">
            Self-updating documentation for <b className="font-semibold text-ink">startups</b>,{' '}
            <b className="font-semibold text-ink">enterprises</b>, and{' '}
            <b className="font-semibold text-ink">agents</b>.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center gap-3">
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
        </div>
      </div>

      {/* docs preview screenshot (hotlinked from the original site) */}
      <div className="pointer-events-none absolute bottom-0 left-[45%] top-[360px] w-[880px] overflow-hidden rounded-tl-xl border border-line bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] max-lg:hidden">
        <img
          src="https://www.mintlify.com/images/docs-preview/preview-light.svg"
          alt="Docs preview"
          className="w-[880px] max-w-none"
        />
      </div>
    </section>
  )
}
