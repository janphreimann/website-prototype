import SectionHeading, { BlackButton } from './SectionHeading.jsx'

function AutomationMock() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-2 bg-[#0b2618]">
      <div className="flex w-56 items-center gap-3 rounded-full bg-[#123722] px-4 py-3">
        <svg viewBox="0 0 24 24" fill="none" stroke="#7be8ad" strokeWidth="2" className="size-4"><path d="M4 4h6v6H4zM14 14h6v6h-6zM10 7h4M17 10v4" /></svg>
        <span className="h-2.5 w-24 rounded-full bg-[#1d4a30]" />
        <span className="ml-auto flex h-6 w-11 items-center rounded-full bg-mint-400 px-1"><span className="size-4 rounded-full bg-white" /></span>
      </div>
      <span className="h-6 w-px bg-[#1d4a30]" />
      <div className="w-56 space-y-2 rounded-xl bg-[#08160e] p-4">
        <span className="block h-3 w-24 rounded-full bg-[#a3e635]" />
        <span className="block h-2.5 w-32 rounded-full bg-[#1d4a30]" />
        <span className="block h-2.5 w-20 rounded-full bg-[#1d4a30]" />
      </div>
    </div>
  )
}

function EditorMock() {
  return (
    <div className="relative flex h-full items-center justify-center bg-[#0d0f0d]">
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
      />
      <div className="relative flex w-64 items-center gap-2 rounded-lg bg-white p-2.5 shadow-lg">
        <span className="flex size-6 items-center justify-center rounded bg-mint-50 text-[10px] text-mint-600">✎</span>
        <span className="h-2 w-16 rounded-full bg-gray-200" />
        <span className="flex -space-x-1">
          {['#ef4444', '#f59e0b', '#3b82f6', '#a855f7'].map((c) => (
            <span key={c} className="size-4 rounded-full border border-white" style={{ background: c }} />
          ))}
        </span>
        <span className="text-[9px] text-gray-400">+14</span>
        <span className="ml-auto h-5 w-12 rounded bg-mint-400" />
      </div>
      <span className="absolute left-10 top-10 rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-mono text-amber-800">AGENT 130</span>
      <span className="absolute bottom-10 left-16 rounded bg-sky-200 px-1.5 py-0.5 text-[10px] font-mono text-sky-800">AGENT 007</span>
      <span className="absolute right-10 top-16 rounded bg-purple-200 px-1.5 py-0.5 text-[10px] font-mono text-purple-800">DENZELL</span>
    </div>
  )
}

function ScoreMock() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-3 bg-[#101210]">
      {[
        { n: 99, c: '#4ade80' },
        { n: 82, c: '#facc15' },
        { n: 65, c: '#fb923c' },
      ].map((r) => (
        <div key={r.n} className="flex w-60 items-center gap-3">
          <span className="w-8 font-mono text-xl" style={{ color: r.c }}>{r.n}</span>
          <span className="h-px w-4 bg-gray-600" />
          <span className="h-3 flex-1 rounded-sm bg-gray-500/60" />
        </div>
      ))}
    </div>
  )
}

const POSTS = [
  {
    tag: 'Virtual Event',
    date: 'Jul 9, 2026',
    title: "In this live session, we'll show you how teams use Mintlify Automations to put that work on autopilot.",
    mock: <AutomationMock />,
  },
  {
    tag: 'Announcements',
    date: 'Apr 29, 2026',
    title: 'Introducing the collaborative editor built for teams and agents',
    mock: <EditorMock />,
  },
  {
    tag: 'Agent Score',
    date: 'Apr 27, 2026',
    title: 'Can agents read your docs?',
    mock: <ScoreMock />,
  },
]

export default function Blog() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading line1="Latest updates" line2="">
          <BlackButton>All posts</BlackButton>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <a key={p.tag} href="#" className="group">
              <div className="h-[280px] overflow-hidden rounded-xl border border-line">
                {p.mock}
              </div>
              <div className="mt-4 flex items-center gap-2 text-[13px]">
                <span className="rounded border border-line bg-white px-2 py-0.5 font-medium text-ink">{p.tag}</span>
                <span className="text-gray-400">{p.date}</span>
              </div>
              <h3 className="mt-2.5 text-[16px] font-medium leading-6 text-ink transition-colors group-hover:text-gray-600">
                {p.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
