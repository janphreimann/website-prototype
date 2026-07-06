import { useRef } from 'react'
import SectionHeading, { BlackButton, ArrowButton } from './SectionHeading.jsx'

const STORIES = [
  {
    brand: 'ANTHROP\\C',
    bg: 'bg-[#e5674a]',
    headline: <>See how <b className="font-semibold text-white">Anthropic</b> accelerates AI adoption with Mintlify</>,
    stats: [
      { value: '2M', label: 'Monthly active developers' },
      { value: '4+', label: 'Products serviced' },
    ],
    photo: 'linear-gradient(135deg,#7a3323 0%,#a5492f 45%,#d97756 100%)',
  },
  {
    brand: 'coinbase',
    bg: 'bg-[#5f79f7]',
    headline: <>How <b className="font-semibold text-white">Coinbase</b> became agent-ready with Mintlify</>,
    stats: [
      { value: '+50x', label: 'Faster deployment time' },
      { value: '12+', label: 'Products serviced' },
    ],
    photo: 'linear-gradient(135deg,#1f3ec2 0%,#2151f5 50%,#7b93ff 100%)',
  },
  {
    brand: 'HubSpot',
    bg: 'bg-[#ff7a59]',
    headline: <>How <b className="font-semibold text-white">HubSpot</b> powers next-gen developer experience with Mintlify</>,
    stats: [
      { value: '+2x', label: 'Faster time to production' },
      { value: '60%', label: 'Reduction in engineering resources' },
    ],
    photo: 'linear-gradient(135deg,#993c26 0%,#cc5c3d 50%,#ff9c7e 100%)',
  },
  {
    brand: 'AT&T',
    bg: 'bg-[#0a9ed9]',
    headline: <>See how <b className="font-semibold text-white">AT&amp;T</b> modernized their knowledge infrastructure with Mintlify</>,
    stats: [
      { value: '50K+', label: 'Monthly active users' },
      { value: '4+', label: 'Products serviced' },
    ],
    photo: 'linear-gradient(135deg,#045d80 0%,#0a7fb0 50%,#4fc3ee 100%)',
  },
]

export default function Enterprise() {
  const trackRef = useRef(null)
  const scrollBy = (dir) => trackRef.current?.scrollBy({ left: dir * 960, behavior: 'smooth' })

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Powering businesses of all sizes."
          line2="Run your business on a reliable platform that adapts to your needs."
        >
          <ArrowButton dir="left" onClick={() => scrollBy(-1)} />
          <ArrowButton dir="right" onClick={() => scrollBy(1)} />
          <BlackButton>For enterprises</BlackButton>
        </SectionHeading>
      </div>

      <div ref={trackRef} className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-[max(1rem,calc((100vw-1193px)/2))]">
        {STORIES.map((s) => (
          <a
            key={s.brand}
            href="#"
            className={`group flex h-[415px] w-[935px] shrink-0 snap-start overflow-hidden rounded-xl ${s.bg}`}
          >
            {/* text half */}
            <div className="flex w-1/2 flex-col p-9 text-white">
              <div className="text-[15px] font-bold tracking-widest">{s.brand}</div>
              <h3 className="mt-9 max-w-xs text-[28px] font-medium leading-9 text-white/85">{s.headline}</h3>
              <div className="mt-8 flex gap-12">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <div className="text-[36px] font-semibold leading-10">{st.value}</div>
                    <div className="mt-1 max-w-[130px] text-[13.5px] leading-5 text-white/75">{st.label}</div>
                  </div>
                ))}
              </div>
              <span className="mt-auto inline-flex w-fit items-center gap-2 rounded bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink transition-transform group-hover:scale-[1.03]">
                Read the story
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </div>
            {/* visual half */}
            <div className="relative w-1/2" style={{ background: s.photo }}>
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
