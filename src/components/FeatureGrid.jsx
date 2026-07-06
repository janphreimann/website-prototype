import { useEffect, useState } from 'react'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import SectionHeading, { BlackButton } from './SectionHeading.jsx'

const STATE_MACHINE = 'State Machine 1'

/* below the sm breakpoint the two wide cards use their dedicated mobile artboards */
function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = matchMedia('(max-width: 639px)')
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return mobile
}

/**
 * Bento card backed by the original mintlify.com Rive animation.
 * The .riv state machines expose a boolean "ishover" input that drives
 * the hover effects; we toggle it from the card's pointer events.
 */
function RiveCard({ src, mobileSrc, label, className = '' }) {
  const isMobile = useIsMobile()
  const activeSrc = isMobile && mobileSrc ? mobileSrc : src
  // key remounts the canvas when switching artboards — useRive doesn't reload on src change
  return <RiveCardInner key={activeSrc} src={activeSrc} label={label} className={className} />
}

function RiveCardInner({ src, label, className }) {
  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: STATE_MACHINE,
    autoplay: true,
    // the hover state lives in a data-bound view model ("ViewModel1"), not in
    // state machine inputs — autoBind attaches its default instance
    autoBind: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  })

  // some artboard instances default to dark mode — force the light variant
  useEffect(() => {
    if (!rive) return
    const darkMode = rive.viewModelInstance?.boolean('darkMode')
    if (darkMode) darkMode.value = false
  }, [rive])

  const setHover = (value) => {
    const ishover = rive?.viewModelInstance?.boolean('ishover')
    if (ishover) ishover.value = value
  }

  return (
    <div className={`group relative isolate aspect-[338/412] w-full lg:aspect-auto lg:min-h-0 ${className}`}>
      <article
        className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-[#f9f6f3] p-8"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <div className="absolute inset-0 size-full">
          <RiveComponent className="size-full" />
        </div>
        <div className="pointer-events-none relative z-10 flex h-full flex-col">
          <h3 className="mt-auto pt-8 text-base/6 font-medium text-ink">{label}</h3>
        </div>
      </article>
    </div>
  )
}

const CARDS = [
  {
    label: 'Agent-native platform',
    src: '/rives/features/agent-native-platform.riv',
    mobileSrc: '/rives/features/mobile/agent-native-platform-mobile.riv',
    className: 'sm:col-span-2 sm:aspect-[2/1]',
  },
  {
    label: 'Self-updating knowledge',
    src: '/rives/features/self-updating-knowledge.riv',
    className: 'sm:col-span-1',
  },
  {
    label: 'Control who has access',
    src: '/rives/features/control-who-has-access.riv',
    className: 'sm:col-span-1',
  },
  {
    label: 'Connect with your systems',
    src: '/rives/features/connect-with-your-systems.riv',
    className: 'sm:col-span-1',
  },
  {
    label: 'Collaborate with your team & agents',
    src: '/rives/features/collaborate-with-your-team-and-agents.riv',
    className: 'sm:col-span-1',
  },
  {
    label: 'Build on top of your existing setup',
    src: '/rives/features/build-on-top-of-your-existing-setup.riv',
    mobileSrc: '/rives/features/mobile/build-on-top-of-your-existing-setup-mobile.riv',
    className: 'sm:col-span-2 sm:aspect-[2/1] lg:col-span-3',
  },
]

export default function FeatureGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="One platform for your entire knowledge stack."
          line2="Agents that keep work moving 24/7."
        >
          <BlackButton>Get started</BlackButton>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:[grid-auto-rows:25.75rem]">
          {CARDS.map((card) => (
            <RiveCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
