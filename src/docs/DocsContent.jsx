import { Callout, CodeBlock, CodeGroup, Code, DocCard, CardGrid, Steps, ParamField, DocIcon, MethodBadge } from './DocsUI.jsx'
import { NAV } from './docsData.js'

/* ---------- section with anchor heading (feeds the right-hand ToC) ---------- */
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="mb-3 mt-12 text-[20px] font-semibold tracking-[-0.3px] text-ink first:mt-0">
        <a href={`#${id}`} className="group relative">
          {title}
          <span className="ml-2 hidden text-mint-500 group-hover:inline">#</span>
        </a>
      </h2>
      {children}
    </section>
  )
}

function P({ children }) {
  return <p className="my-4 text-[15px] leading-7 text-gray-600">{children}</p>
}

function Ul({ items }) {
  return (
    <ul className="my-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] leading-7 text-gray-600">
          <span className="mt-[13px] size-1 shrink-0 rounded-full bg-gray-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const kebab = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const slugOf = (page) => page.path.split('/').filter(Boolean).pop()

/* ---------- page descriptions (header subtitle) ---------- */
const DESCRIPTIONS = {
  '/docs': 'Meet the next generation of documentation. AI-native, beautiful out of the box, and built for developers.',
  '/docs/quickstart': 'Deploy your documentation in minutes.',
  '/docs/what-is-mintlify': 'Mintlify is the documentation platform where humans and AI agents create, maintain, and consume knowledge.',
  '/docs/credits': 'Understand how credits are consumed by the agent, assistant, and automations.',
  '/docs/migration': 'Move your existing documentation to Mintlify from any platform.',
  '/docs/editor': 'A visual editor for creating and publishing documentation, directly in your browser.',
  '/docs/cli': 'Preview and develop your docs locally with the Mintlify CLI.',
  '/docs/components': 'Build rich, interactive documentation with ready-to-use MDX components.',
  '/docs/ai-native': 'Documentation designed to be read, searched, and acted on by AI agents.',
  '/docs/agent': 'An autonomous technical writer that keeps your documentation up to date.',
  '/docs/assistant': 'Instant, accurate answers for your users, powered by your documentation.',
  '/docs/automations': 'Automate documentation workflows across your tools and systems.',
  '/docs/guides': 'Best practices, workflows, and templates for building great documentation.',
  '/docs/api/introduction': 'Programmatically interact with your documentation via the Mintlify REST API.',
}

const GROUP_DESC = {
  'Editor': (t) => `Learn how ${t.toLowerCase()} works in the web editor.`,
  'CLI': (t) => `Use the Mintlify CLI: ${t.toLowerCase()}.`,
  'Organize': (t) => `Configure ${t.toLowerCase()} for your documentation site.`,
  'Create content': (t) => `Author beautiful pages: ${t.toLowerCase()}.`,
  'Components': (t) => `Use the ${t} component to build rich, interactive documentation.`,
  'API playground': (t) => `Interactive API documentation: ${t.toLowerCase()}.`,
  'Customize': (t) => `Make your docs your own: ${t.toLowerCase()}.`,
  'AI-native features': (t) => `Make your documentation agent-ready with ${t}.`,
  'Agent': (t) => `${t} — put your documentation on autopilot.`,
  'Assistant': (t) => `${t} — AI answers grounded in your documentation.`,
  'Automations': (t) => `${t} across your documentation workflows.`,
  'Deploy': (t) => `Deployment guide: ${t}.`,
  'Integrations': (t) => `Connect ${t} to your documentation in one line of configuration.`,
  'Dashboard': (t) => `Manage your team and organization: ${t.toLowerCase()}.`,
  'Optimize': (t) => `Measure and improve your documentation with ${t.toLowerCase()}.`,
}

export function descriptionFor(page) {
  if (DESCRIPTIONS[page.path]) return DESCRIPTIONS[page.path]
  if (page.method) return `${page.method} ${page.endpoint}`
  const fn = GROUP_DESC[page.group]
  return fn ? fn(page.title) : `Everything you need to know about ${page.title.toLowerCase()}.`
}

/* ================================================================
   Custom pages
   ================================================================ */

function LandingPage({ link }) {
  return (
    <div>
      {/* hero */}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-mint-50 via-white to-cream px-8 py-14 text-center sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ backgroundImage: 'radial-gradient(rgba(13,147,115,0.16) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        />
        <h1 className="font-display relative text-[40px] leading-[44px] tracking-[-1px] text-ink sm:text-[52px] sm:leading-[54px]">
          Documentation
        </h1>
        <p className="relative mx-auto mt-4 max-w-xl text-[16px] leading-6 text-gray-600">
          Meet the next generation of documentation. AI-native, beautiful out-of-the-box,
          and built for developers and teams.
        </p>
      </div>

      <CardGrid>
        <DocCard icon="rocket" title="Quickstart" {...link('/docs/quickstart')}>
          Deploy your first docs site in minutes with our step-by-step guide.
        </DocCard>
        <DocCard icon="terminal" title="CLI installation" {...link('/docs/cli/install')}>
          Install the CLI to preview and develop your docs locally.
        </DocCard>
        <DocCard icon="pen" title="Web editor" {...link('/docs/editor')}>
          Make quick updates and manage content with our browser-based editor.
        </DocCard>
        <DocCard icon="blocks" title="Components" {...link('/docs/components')}>
          Build rich, interactive documentation with our ready-to-use components.
        </DocCard>
      </CardGrid>

      <Section id="explore" title="Explore">
        <CardGrid cols={3}>
          <DocCard icon="sparkle" title="AI-native" {...link('/docs/ai-native')}>
            llms.txt, MCP servers, and markdown export built in.
          </DocCard>
          <DocCard icon="bot" title="Agent" {...link('/docs/agent')}>
            An autonomous technical writer for your docs.
          </DocCard>
          <DocCard icon="search" title="Assistant" {...link('/docs/assistant')}>
            Instant answers for your users, grounded in your docs.
          </DocCard>
          <DocCard icon="globe" title="Deploy" {...link('/docs/deploy/deployments')}>
            Custom domains, previews, and CI checks.
          </DocCard>
          <DocCard icon="plug" title="Integrations" {...link('/docs/integrations/analytics/overview')}>
            Analytics, support, and SDK integrations.
          </DocCard>
          <DocCard icon="terminal" title="API reference" {...link('/docs/api/introduction')}>
            Automate your docs with the REST API.
          </DocCard>
        </CardGrid>
      </Section>
    </div>
  )
}

const LANDING_TOC = [{ id: 'explore', label: 'Explore' }]

function QuickstartPage({ link }) {
  return (
    <div>
      <P>
        This quickstart guide walks you from signup to a deployed documentation site
        in under fifteen minutes. You will create a project, preview it locally, make
        your first edit, and publish it to the web.
      </P>
      <Callout type="tip">
        Prefer working in the browser? Skip the CLI and use the <a href="/docs/editor" {...link('/docs/editor', true)} className="font-medium text-mint-600 underline decoration-mint-200 underline-offset-2 hover:decoration-mint-400">web editor</a> instead.
      </Callout>
      <Section id="create-a-project" title="Create your project">
        <Steps
          items={[
            {
              title: 'Sign up and create a project',
              body: <>Head to the dashboard and create a new project. Mintlify generates a starter repository with example pages, a <Code>docs.json</Code> configuration, and a working navigation.</>,
            },
            {
              title: 'Connect your GitHub repository',
              body: 'Install the Mintlify GitHub App on the repository that will hold your docs. Every push to your main branch deploys automatically.',
            },
            {
              title: 'Clone the starter kit',
              body: <CodeBlock title="Terminal">{`git clone https://github.com/your-org/docs.git
cd docs`}</CodeBlock>,
            },
          ]}
        />
      </Section>
      <Section id="preview-locally" title="Preview locally">
        <P>
          Install the CLI and start the local development server. Changes are
          hot-reloaded as you edit.
        </P>
        <CodeBlock title="Terminal">{`npm i -g mint
mint dev

# your preview is running at
# http://localhost:3000`}</CodeBlock>
      </Section>
      <Section id="make-your-first-edit" title="Make your first edit">
        <P>
          Pages are MDX files with frontmatter. Open <Code>index.mdx</Code> and change
          the title — the preview updates instantly.
        </P>
        <CodeBlock title="index.mdx">{`---
title: "Welcome to our docs"
description: "Everything you need to build with our platform"
---

## Getting started

Start building amazing documentation today.`}</CodeBlock>
      </Section>
      <Section id="deploy" title="Deploy your changes">
        <P>
          Commit and push. The GitHub App picks up the change and deploys it — usually
          in under a minute.
        </P>
        <CodeBlock title="Terminal">{`git add .
git commit -m "Update landing page"
git push`}</CodeBlock>
        <Callout type="info">
          Track deployment status anytime in the dashboard, or via the{' '}
          <a href="/docs/api/update/status" {...link('/docs/api/update/status', true)} className="font-medium text-mint-600 underline decoration-mint-200 underline-offset-2 hover:decoration-mint-400">deployments API</a>.
        </Callout>
      </Section>
      <Section id="next-steps" title="Next steps">
        <CardGrid>
          <DocCard icon="palette" title="Customize your theme" {...link('/docs/customize/themes')}>
            Colors, fonts, and layout options to match your brand.
          </DocCard>
          <DocCard icon="blocks" title="Explore components" {...link('/docs/components')}>
            Callouts, cards, code groups, and more.
          </DocCard>
        </CardGrid>
      </Section>
    </div>
  )
}

const QUICKSTART_TOC = [
  { id: 'create-a-project', label: 'Create your project' },
  { id: 'preview-locally', label: 'Preview locally' },
  { id: 'make-your-first-edit', label: 'Make your first edit' },
  { id: 'deploy', label: 'Deploy your changes' },
  { id: 'next-steps', label: 'Next steps' },
]

function CliInstallPage() {
  return (
    <div>
      <P>
        The Mintlify CLI lets you preview your documentation locally, validate links,
        and check for broken references before you deploy.
      </P>
      <Section id="prerequisites" title="Prerequisites">
        <Ul items={[<>Node.js version 20 or higher</>, <>A documentation repository with a <Code>docs.json</Code> file</>]} />
      </Section>
      <Section id="installation" title="Installation">
        <P>Install the CLI globally with your favorite package manager:</P>
        <CodeGroup
          tabs={[
            { title: 'npm', code: 'npm i -g mint' },
            { title: 'yarn', code: 'yarn global add mint' },
            { title: 'pnpm', code: 'pnpm add -g mint' },
          ]}
        />
      </Section>
      <Section id="verify" title="Verify the installation">
        <CodeBlock title="Terminal">{`mint --version
# 4.2.1`}</CodeBlock>
        <Callout type="warning">
          If the command is not found, make sure your package manager's global bin
          directory is on your <Code>PATH</Code>.
        </Callout>
      </Section>
      <Section id="updates" title="Stay up to date">
        <P>The CLI checks for updates automatically. To update manually:</P>
        <CodeBlock title="Terminal">{'mint update'}</CodeBlock>
      </Section>
    </div>
  )
}

const CLI_INSTALL_TOC = [
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'installation', label: 'Installation' },
  { id: 'verify', label: 'Verify the installation' },
  { id: 'updates', label: 'Stay up to date' },
]

function ComponentsOverviewPage({ link }) {
  const components = NAV.docs.find((group) => group.title === 'Components').items.slice(1)
  return (
    <div>
      <P>
        Components turn plain markdown into rich, interactive documentation. Every
        component works out of the box in any MDX page — no imports required.
      </P>
      <Callout type="tip">
        Combine components freely: put <Code>CodeGroup</Code> inside <Code>Steps</Code>,
        or <Code>Cards</Code> inside <Code>Tabs</Code>.
      </Callout>
      <Section id="all-components" title="All components">
        <CardGrid cols={3}>
          {components.map((component) => (
            <DocCard key={component.path} icon="blocks" title={component.title} {...link(component.path)}>
              {`Use the ${component.title} component in your MDX pages.`}
            </DocCard>
          ))}
        </CardGrid>
      </Section>
    </div>
  )
}

const COMPONENTS_TOC = [{ id: 'all-components', label: 'All components' }]

function ApiIntroPage({ link }) {
  return (
    <div>
      <P>
        The Mintlify REST API lets you trigger deployments, query analytics, run agent
        jobs, and search your documentation programmatically. All endpoints live under
        a single base URL:
      </P>
      <CodeBlock title="Base URL">{'https://api.mintlify.com'}</CodeBlock>
      <Section id="authentication" title="Authentication">
        <P>
          Authenticate with an API key passed as a bearer token. Create and manage keys
          in the dashboard under <Code>Settings → API keys</Code>.
        </P>
        <CodeBlock title="Terminal">{`curl https://api.mintlify.com/v1/project/update-status/STATUS_ID \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</CodeBlock>
        <Callout type="warning">
          API keys carry full access to your project. Keep them in a secrets manager
          and never commit them to source control.
        </Callout>
      </Section>
      <Section id="rate-limits" title="Rate limits">
        <P>
          Requests are limited to <b className="font-semibold text-ink">100 per minute</b> per
          key. Rate-limited responses return status <Code>429</Code> with a{' '}
          <Code>Retry-After</Code> header.
        </P>
      </Section>
      <Section id="errors" title="Errors">
        <P>The API uses conventional HTTP status codes and returns errors as JSON:</P>
        <CodeBlock title="Response">{`{
  "error": {
    "code": "invalid_request",
    "message": "The projectId parameter is required."
  }
}`}</CodeBlock>
      </Section>
      <Section id="explore-the-api" title="Explore the API">
        <CardGrid>
          <DocCard icon="bot" title="Agent API" {...link('/docs/api/agent/create-agent-job')}>
            Create and monitor autonomous documentation jobs.
          </DocCard>
          <DocCard icon="gauge" title="Analytics API" {...link('/docs/api/analytics/views')}>
            Page views, searches, feedback, and assistant stats.
          </DocCard>
          <DocCard icon="search" title="Assistant API" {...link('/docs/api/assistant/search')}>
            Search and question-answering over your docs.
          </DocCard>
          <DocCard icon="cloud" title="Deployments API" {...link('/docs/api/update/trigger')}>
            Trigger and track deployments from CI.
          </DocCard>
        </CardGrid>
      </Section>
    </div>
  )
}

const API_INTRO_TOC = [
  { id: 'authentication', label: 'Authentication' },
  { id: 'rate-limits', label: 'Rate limits' },
  { id: 'errors', label: 'Errors' },
  { id: 'explore-the-api', label: 'Explore the API' },
]

function WhatIsMintlifyPage({ link }) {
  return (
    <div>
      <P>
        Mintlify is a documentation platform built for the age of AI. Your content
        lives as MDX in your own git repository, deploys automatically on every push,
        and ships with search, AI assistance, and analytics — no infrastructure to run.
      </P>
      <Section id="how-it-works" title="How it works">
        <Steps
          items={[
            { title: 'Write in MDX', body: 'Author pages in markdown with React-powered components. Content stays portable and version-controlled.' },
            { title: 'Configure with docs.json', body: <>A single <Code>docs.json</Code> file defines navigation, theming, and integrations for your whole site.</> },
            { title: 'Deploy on push', body: 'The GitHub or GitLab integration builds and deploys your docs automatically, with preview deployments for every pull request.' },
          ]}
        />
      </Section>
      <Section id="built-for-agents" title="Built for agents">
        <P>
          Every Mintlify site is agent-readable by default: an automatically generated{' '}
          <Code>llms.txt</Code>, markdown export for every page, and a hosted MCP server
          that lets tools like Claude search your docs directly.
        </P>
        <Callout type="info">
          Over 60% of documentation traffic now comes from AI agents. Mintlify is
          designed so that both audiences — humans and machines — get first-class answers.
        </Callout>
      </Section>
      <Section id="where-to-go-next" title="Where to go next">
        <CardGrid>
          <DocCard icon="rocket" title="Quickstart" {...link('/docs/quickstart')}>
            Deploy your first site in minutes.
          </DocCard>
          <DocCard icon="sparkle" title="AI-native features" {...link('/docs/ai-native')}>
            llms.txt, MCP, and the contextual menu.
          </DocCard>
        </CardGrid>
      </Section>
    </div>
  )
}

const WHAT_IS_TOC = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'built-for-agents', label: 'Built for agents' },
  { id: 'where-to-go-next', label: 'Where to go next' },
]

/* ================================================================
   Generic templates
   ================================================================ */

/* --- API endpoint pages --- */
function ApiEndpointPage({ page }) {
  const resource = page.title.toLowerCase()
  const isGet = page.method === 'GET'
  return (
    <div>
      <div className="my-5 flex items-center gap-3 overflow-x-auto rounded-xl border border-line bg-cream px-4 py-3">
        <MethodBadge method={page.method} />
        <code className="whitespace-nowrap font-mono text-[13px] text-gray-700">
          https://api.mintlify.com{page.endpoint}
        </code>
      </div>
      <P>
        {isGet
          ? <>Retrieve {resource.replace(/^get /, '')} for your project. Results are returned as JSON and can be filtered with query parameters.</>
          : <>{page.title} for your project. The request body is JSON and the operation is processed asynchronously where applicable.</>}
      </P>
      <Section id="authorization" title="Authorization">
        <ParamField name="Authorization" type="string" required>
          Bearer authentication header of the form <Code>Bearer &lt;token&gt;</Code>, where{' '}
          <Code>&lt;token&gt;</Code> is your Mintlify API key.
        </ParamField>
      </Section>
      <Section id="request" title={isGet ? 'Query parameters' : 'Request body'}>
        {isGet ? (
          <>
            <ParamField name="startDate" type="string">
              Start of the reporting window as an ISO 8601 date, for example <Code>2026-01-01</Code>.
            </ParamField>
            <ParamField name="endDate" type="string">
              End of the reporting window. Defaults to today.
            </ParamField>
            <ParamField name="limit" type="integer">
              Maximum number of records to return. Defaults to <Code>100</Code>.
            </ParamField>
          </>
        ) : (
          <>
            <ParamField name="projectId" type="string" required>
              The ID of your project, found in the dashboard under <Code>Settings → General</Code>.
            </ParamField>
            <ParamField name="payload" type="object">
              Operation-specific options. See the example below for the accepted shape.
            </ParamField>
          </>
        )}
      </Section>
      <Section id="example" title="Example request">
        <CodeGroup
          tabs={[
            {
              title: 'cURL',
              code: isGet
                ? `curl "https://api.mintlify.com${page.endpoint}?limit=25" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
                : `curl -X POST "https://api.mintlify.com${page.endpoint}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "projectId": "proj_1234" }'`,
            },
            {
              title: 'JavaScript',
              code: `const res = await fetch("https://api.mintlify.com${page.endpoint}", {
  method: "${page.method}",
  headers: { Authorization: \`Bearer \${process.env.MINTLIFY_API_KEY}\` },
})
const data = await res.json()`,
            },
          ]}
        />
      </Section>
      <Section id="response" title="Response">
        <CodeBlock title="200 OK">{isGet
          ? `{
  "data": [
    { "id": "rec_8f2k", "value": 1284, "date": "2026-07-01" },
    { "id": "rec_8f2l", "value": 1342, "date": "2026-07-02" }
  ],
  "hasMore": false
}`
          : `{
  "id": "job_4t8n",
  "status": "queued",
  "createdAt": "2026-07-07T09:30:00Z"
}`}</CodeBlock>
      </Section>
    </div>
  )
}

const API_PAGE_TOC = [
  { id: 'authorization', label: 'Authorization' },
  { id: 'request', label: 'Request' },
  { id: 'example', label: 'Example request' },
  { id: 'response', label: 'Response' },
]

/* --- component pages --- */
function ComponentPage({ page }) {
  const tag = page.title.replace(/[^a-zA-Z]/g, '')
  return (
    <div>
      <P>
        The {page.title} component works in any MDX page with no imports required.
        Use it to structure content and guide readers through your documentation.
      </P>
      <Section id="preview" title="Preview">
        <div className="my-5 rounded-xl border border-line bg-cream p-6">
          <div className="rounded-lg border border-line bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-ink">
              <DocIcon name="blocks" className="size-4 text-mint-600" />
              {page.title} example
            </div>
            <p className="mt-1.5 text-[13.5px] leading-5 text-gray-500">
              This is how the {page.title} component renders inside your documentation.
            </p>
          </div>
        </div>
      </Section>
      <Section id="usage" title="Usage">
        <CodeBlock title={`${kebab(page.title)}.mdx`}>{`<${tag} title="${page.title} example">
  This is how the ${page.title} component renders inside your documentation.
</${tag}>`}</CodeBlock>
      </Section>
      <Section id="props" title="Props">
        <ParamField name="title" type="string" required>
          The title displayed at the top of the component.
        </ParamField>
        <ParamField name="icon" type="string">
          Optional icon name from the built-in icon library, or a custom SVG.
        </ParamField>
        <ParamField name="children" type="ReactNode" required>
          The content rendered inside the component. Supports full MDX.
        </ParamField>
      </Section>
    </div>
  )
}

const COMPONENT_PAGE_TOC = [
  { id: 'preview', label: 'Preview' },
  { id: 'usage', label: 'Usage' },
  { id: 'props', label: 'Props' },
]

/* --- integration pages --- */
function IntegrationPage({ page }) {
  const key = kebab(page.title)
  const category = page.path.split('/')[3]
  return (
    <div>
      <P>
        Connect {page.title} to your documentation with a single entry in{' '}
        <Code>docs.json</Code>. Once deployed, {page.title} starts receiving data from
        your docs automatically — no code changes required.
      </P>
      <Section id="setup" title="Setup">
        <Steps
          items={[
            { title: `Get your ${page.title} credentials`, body: `Copy the tracking ID or API key from your ${page.title} dashboard.` },
            {
              title: 'Add the integration to docs.json',
              body: <CodeBlock title="docs.json">{`{
  "integrations": {
    "${category}": {
      "${key}": {
        "apiKey": "YOUR_${key.toUpperCase().replace(/-/g, '_')}_KEY"
      }
    }
  }
}`}</CodeBlock>,
            },
            { title: 'Deploy', body: 'Push your changes. The integration is live as soon as the deployment finishes.' },
          ]}
        />
      </Section>
      <Section id="verify-integration" title="Verify the integration">
        <P>
          Visit your live documentation and check the {page.title} dashboard — events
          typically appear within a few minutes.
        </P>
        <Callout type="info">
          Integrations only run on production deployments, never on local previews or
          preview deployments.
        </Callout>
      </Section>
    </div>
  )
}

const INTEGRATION_TOC = [
  { id: 'setup', label: 'Setup' },
  { id: 'verify-integration', label: 'Verify the integration' },
]

/* --- guide pages --- */
function GuidePage({ page }) {
  const topic = page.title.toLowerCase()
  return (
    <div>
      <P>
        This guide covers {topic} — what it is, why it matters, and how to apply it to
        your documentation step by step.
      </P>
      <Callout type="tip">
        Short on time? Skim the checklist at the end of this guide and come back for
        the details later.
      </Callout>
      <Section id="why-it-matters" title="Why it matters">
        <P>
          Great documentation compounds: every improvement reduces support load,
          shortens onboarding, and makes your product easier for both people and AI
          agents to use. Investing in {topic} pays off across all three.
        </P>
      </Section>
      <Section id="step-by-step" title="Step by step">
        <Steps
          items={[
            { title: 'Audit your current state', body: 'Review your existing pages and note where readers get stuck. Analytics and assistant conversations are a good starting signal.' },
            { title: 'Apply the changes incrementally', body: 'Work section by section rather than rewriting everything at once. Small, reviewable pull requests keep quality high.' },
            { title: 'Measure the impact', body: 'Watch page feedback, search success rate, and assistant deflection to confirm the change helped.' },
          ]}
        />
      </Section>
      <Section id="checklist" title="Checklist">
        <Ul
          items={[
            'Every page has a clear title and one-sentence description.',
            'Headings follow a logical hierarchy that matches the reader’s task.',
            'Code examples are copy-pasteable and tested.',
            'Links point to the most specific relevant page.',
          ]}
        />
      </Section>
    </div>
  )
}

const GUIDE_TOC = [
  { id: 'why-it-matters', label: 'Why it matters' },
  { id: 'step-by-step', label: 'Step by step' },
  { id: 'checklist', label: 'Checklist' },
]

/* --- guides landing --- */
function GuidesLandingPage({ link }) {
  const groups = NAV.guides.slice(1) // skip "Getting started" (this page lives there)
  return (
    <div>
      <P>
        Practical guides for planning, writing, and maintaining documentation — from
        style and structure to AI-assisted workflows and advanced customization.
      </P>
      {groups.map((group) => (
        <Section key={group.title} id={kebab(group.title)} title={group.title}>
          <CardGrid cols={3}>
            {group.items.map((item) => (
              <DocCard key={item.path} icon="map" title={item.title} {...link(item.path)}>
                {`A practical guide to ${item.title.toLowerCase()}.`}
              </DocCard>
            ))}
          </CardGrid>
        </Section>
      ))}
    </div>
  )
}

const GUIDES_LANDING_TOC = NAV.guides.slice(1).map((group) => ({ id: kebab(group.title), label: group.title }))

/* --- default pages --- */
function DefaultPage({ page }) {
  const topic = page.title.toLowerCase()
  const slug = slugOf(page)
  return (
    <div>
      <P>
        {descriptionFor(page)} This page explains the concepts, shows a working
        configuration, and lists the best practices our team recommends.
      </P>
      <Section id="overview" title="Overview">
        <P>
          {page.title} is configured through your <Code>docs.json</Code> file and takes
          effect on your next deployment. Local previews via <Code>mint dev</Code> pick
          up changes instantly, so you can iterate before publishing.
        </P>
        <Callout type="info">
          Changes to {topic} apply to your whole site. Use{' '}
          <Code>versions</Code> if you need different behavior per docs version.
        </Callout>
      </Section>
      <Section id="configuration" title="Configuration">
        <CodeBlock title="docs.json">{`{
  "${slug.replace(/-/g, '_')}": {
    "enabled": true,
    "options": {
      "mode": "default"
    }
  }
}`}</CodeBlock>
      </Section>
      <Section id="best-practices" title="Best practices">
        <Ul
          items={[
            <>Keep your configuration in version control and review changes like code.</>,
            <>Test with <Code>mint dev</Code> locally before deploying to production.</>,
            <>Use preview deployments to validate {topic} on real pull requests.</>,
          ]}
        />
      </Section>
    </div>
  )
}

const DEFAULT_TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'best-practices', label: 'Best practices' },
]

/* ================================================================
   Dispatcher
   ================================================================ */

export function renderPage(page, navigate) {
  // link() builds props for internal anchors: real href + client-side navigation
  const link = (path, inline = false) => ({
    ...(inline ? {} : { href: path }),
    onClick: (e) => {
      e.preventDefault()
      navigate(path)
    },
  })

  switch (page.path) {
    case '/docs':
      return { body: <LandingPage link={link} />, toc: LANDING_TOC, landing: true }
    case '/docs/quickstart':
      return { body: <QuickstartPage link={link} />, toc: QUICKSTART_TOC }
    case '/docs/cli/install':
      return { body: <CliInstallPage />, toc: CLI_INSTALL_TOC }
    case '/docs/components':
      return { body: <ComponentsOverviewPage link={link} />, toc: COMPONENTS_TOC }
    case '/docs/api/introduction':
      return { body: <ApiIntroPage link={link} />, toc: API_INTRO_TOC }
    case '/docs/what-is-mintlify':
      return { body: <WhatIsMintlifyPage link={link} />, toc: WHAT_IS_TOC }
    case '/docs/guides':
      return { body: <GuidesLandingPage link={link} />, toc: GUIDES_LANDING_TOC }
    default:
      break
  }

  if (page.method) return { body: <ApiEndpointPage page={page} />, toc: API_PAGE_TOC }
  if (page.path.startsWith('/docs/components/')) return { body: <ComponentPage page={page} />, toc: COMPONENT_PAGE_TOC }
  if (page.path.startsWith('/docs/integrations/') && !page.children) return { body: <IntegrationPage page={page} />, toc: INTEGRATION_TOC }
  if (page.path.startsWith('/docs/guides/')) return { body: <GuidePage page={page} />, toc: GUIDE_TOC }
  return { body: <DefaultPage page={page} />, toc: DEFAULT_TOC }
}
