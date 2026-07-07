/* Navigation data for the docs site — mirrors the left sidebar of mintlify.com/docs.
   Three tabs (Documentation, Guides, API reference), each with its own group tree. */

const g = (title, items) => ({ title, items })
const p = (title, path, extra = {}) => ({ title, path, ...extra })

export const TABS = [
  { id: 'docs', label: 'Documentation', icon: 'book' },
  { id: 'guides', label: 'Guides', icon: 'map' },
  { id: 'api', label: 'API reference', icon: 'terminal' },
]

export const NAV = {
  docs: [
    g('Getting started', [
      p('Introduction', '/docs'),
      p('Quickstart', '/docs/quickstart'),
      p('What is Mintlify?', '/docs/what-is-mintlify'),
      p('Credit pricing', '/docs/credits'),
      p('Migrate to Mintlify', '/docs/migration'),
    ]),
    g('Editor', [
      p('Editor overview', '/docs/editor'),
      p('How to use the editor', '/docs/editor/tutorial'),
      p('Create and edit pages', '/docs/editor/pages'),
      p('Organize navigation', '/docs/editor/navigation'),
      p('Ask agent', '/docs/editor/agent'),
      p('Live preview', '/docs/editor/live-preview'),
      p('Branching and publishing', '/docs/editor/branching-and-publishing'),
      p('Git essentials for the editor', '/docs/editor/git-essentials'),
      p('Configurations', '/docs/editor/configurations'),
      p('Editor settings', '/docs/editor/settings'),
      p('Keyboard shortcuts', '/docs/editor/keyboard-shortcuts'),
    ]),
    g('CLI', [
      p('Mintlify CLI', '/docs/cli'),
      p('Install the CLI', '/docs/cli/install'),
      p('Preview locally', '/docs/cli/preview'),
      p('Commands', '/docs/cli/commands'),
    ]),
    g('Organize', [
      p('Navigation', '/docs/organize/navigation'),
      p('Pages', '/docs/organize/pages'),
      p('Global settings', '/docs/organize/settings'),
      p('API settings', '/docs/organize/settings-api'),
      p('Appearance and branding', '/docs/organize/settings-appearance'),
      p('Integrations', '/docs/organize/settings-integrations'),
      p('SEO and search', '/docs/organize/settings-seo'),
      p('Site structure', '/docs/organize/settings-structure'),
      p('docs.json schema reference', '/docs/organize/settings-reference'),
      p('Hidden pages', '/docs/organize/hidden-pages'),
      p('Exclude files from publishing', '/docs/organize/mintignore'),
    ]),
    g('Create content', [
      p('Format text', '/docs/create/text'),
      p('Format code', '/docs/create/code'),
      p('Images and embeds', '/docs/create/image-embeds'),
      p('Lists and tables', '/docs/create/list-table'),
      p('Files', '/docs/create/files'),
      p('Reusable snippets', '/docs/create/reusable-snippets'),
      p('Changelogs', '/docs/create/changelogs'),
      p('Personalized content', '/docs/create/personalization'),
      p('Redirects', '/docs/create/redirects'),
    ]),
    g('Components', [
      p('Components overview', '/docs/components'),
      p('Accordions', '/docs/components/accordions'),
      p('Badge', '/docs/components/badge'),
      p('Banner', '/docs/components/banner'),
      p('Callouts', '/docs/components/callouts'),
      p('Cards', '/docs/components/cards'),
      p('Code groups', '/docs/components/code-groups'),
      p('Color', '/docs/components/color'),
      p('Columns', '/docs/components/columns'),
      p('Examples', '/docs/components/examples'),
      p('Expandables', '/docs/components/expandables'),
      p('Fields', '/docs/components/fields'),
      p('Frames', '/docs/components/frames'),
      p('Icons', '/docs/components/icons'),
      p('Mermaid', '/docs/components/mermaid-diagrams'),
      p('Panel', '/docs/components/panel'),
      p('Prompt', '/docs/components/prompt'),
      p('Response fields', '/docs/components/responses'),
      p('Steps', '/docs/components/steps'),
      p('Tabs', '/docs/components/tabs'),
      p('Tiles', '/docs/components/tiles'),
      p('Tooltips', '/docs/components/tooltips'),
      p('Tree', '/docs/components/tree'),
      p('Update', '/docs/components/update'),
      p('View', '/docs/components/view'),
      p('Visibility', '/docs/components/visibility'),
    ]),
    g('API playground', [
      p('API playground overview', '/docs/api-playground/overview'),
      p('OpenAPI setup', '/docs/api-playground/openapi-setup'),
      p('AsyncAPI setup', '/docs/api-playground/asyncapi-setup'),
      p('Add SDK examples', '/docs/api-playground/adding-sdk-examples'),
      p('Create manual API pages', '/docs/api-playground/mdx-setup'),
      p('Complex data types', '/docs/api-playground/complex-data-types'),
      p('Multiple responses', '/docs/api-playground/multiple-responses'),
      p('Manage page visibility', '/docs/api-playground/managing-page-visibility'),
      p('Troubleshooting', '/docs/api-playground/troubleshooting'),
    ]),
    g('Customize', [
      p('Themes', '/docs/customize/themes'),
      p('Fonts', '/docs/customize/fonts'),
      p('Custom domain', '/docs/customize/custom-domain'),
      p('Custom 404 page', '/docs/customize/custom-404-page'),
      p('Custom scripts', '/docs/customize/custom-scripts'),
      p('React', '/docs/customize/react-components'),
    ]),
    g('AI-native features', [
      p('AI-native documentation', '/docs/ai-native'),
      p('Contextual menu', '/docs/ai/contextual-menu'),
      p('llms.txt', '/docs/ai/llmstxt'),
      p('skill.md', '/docs/ai/skillmd'),
      p('Markdown export', '/docs/ai/markdown-export'),
      p('Admin MCP server', '/docs/ai/mintlify-mcp'),
      p('Search MCP server', '/docs/ai/model-context-protocol'),
    ]),
    g('Agent', [
      p('What is the agent?', '/docs/agent'),
      p('Customize agent behavior', '/docs/agent/customize'),
      p('Write effective prompts', '/docs/agent/effective-prompts'),
      p('Agent integrations', '/docs/agent/integrations'),
      p('Add the agent to Slack', '/docs/agent/slack'),
      p('Use cases', '/docs/agent/use-cases'),
    ]),
    g('Assistant', [
      p('Assistant', '/docs/assistant'),
      p('Configure the assistant', '/docs/assistant/configure'),
      p('Customize assistant behavior', '/docs/assistant/customize'),
      p('Add assistant skills', '/docs/assistant/skills'),
      p('Use the assistant', '/docs/assistant/use'),
    ]),
    g('Automations', [
      p('Automations overview', '/docs/automations'),
      p('Create a custom automation', '/docs/automations/create'),
      p('Manage automations', '/docs/automations/manage'),
      p('Predefined automations', '/docs/automations/reference'),
    ]),
    g('Deploy', [
      p('Deployments', '/docs/deploy/deployments'),
      p('GitHub', '/docs/deploy/github'),
      p('GitHub Enterprise Server', '/docs/deploy/ghes'),
      p('GitLab', '/docs/deploy/gitlab'),
      p('Self-hosted GitLab OAuth', '/docs/deploy/gitlab-self-hosted'),
      p('Monorepo setup', '/docs/deploy/monorepo'),
      p('Multi-repository deployments', '/docs/deploy/multi-repo'),
      p('Preview deployments', '/docs/deploy/preview-deployments'),
      p('CI checks', '/docs/deploy/ci'),
      p('Authentication setup', '/docs/deploy/authentication-setup'),
      p('Host docs at /docs subpath', '/docs/deploy/docs-subpath'),
      p('Cloudflare Workers', '/docs/deploy/cloudflare'),
      p('Vercel', '/docs/deploy/vercel'),
      p('External proxies with Vercel', '/docs/deploy/vercel-external-proxies'),
      p('AWS Route 53 and CloudFront', '/docs/deploy/route53-cloudfront'),
      p('Reverse proxy', '/docs/deploy/reverse-proxy'),
      p('CSP configuration', '/docs/deploy/csp-configuration'),
      p('Offline export', '/docs/deploy/export'),
    ]),
    g('Integrations', [
      p('Analytics', '/docs/integrations/analytics/overview', {
        children: [
          p('Adobe Analytics', '/docs/integrations/analytics/adobe'),
          p('Amplitude', '/docs/integrations/analytics/amplitude'),
          p('Clarity', '/docs/integrations/analytics/clarity'),
          p('Clearbit', '/docs/integrations/analytics/clearbit'),
          p('Fathom', '/docs/integrations/analytics/fathom'),
          p('Google Analytics 4', '/docs/integrations/analytics/google-analytics'),
          p('Google Tag Manager', '/docs/integrations/analytics/google-tag-manager'),
          p('Heap', '/docs/integrations/analytics/heap'),
          p('Hightouch', '/docs/integrations/analytics/hightouch'),
          p('Hotjar', '/docs/integrations/analytics/hotjar'),
          p('LogRocket', '/docs/integrations/analytics/logrocket'),
          p('Mixpanel', '/docs/integrations/analytics/mixpanel'),
          p('Pirsch', '/docs/integrations/analytics/pirsch'),
          p('Plausible', '/docs/integrations/analytics/plausible'),
          p('PostHog', '/docs/integrations/analytics/posthog'),
          p('Segment', '/docs/integrations/analytics/segment'),
        ],
      }),
      p('Privacy', '/docs/integrations/privacy/overview', {
        children: [p('Osano', '/docs/integrations/privacy/osano')],
      }),
      p('SDKs', '/docs/integrations/sdks', {
        children: [
          p('Speakeasy', '/docs/integrations/sdks/speakeasy'),
          p('Stainless', '/docs/integrations/sdks/stainless'),
        ],
      }),
      p('Support', '/docs/integrations/support/overview', {
        children: [
          p('Front', '/docs/integrations/support/front'),
          p('Intercom', '/docs/integrations/support/intercom'),
        ],
      }),
    ]),
    g('Dashboard', [
      p('Roles', '/docs/dashboard/roles'),
      p('Deployment permissions', '/docs/dashboard/permissions'),
      p('Single sign-on (SSO)', '/docs/dashboard/sso'),
      p('Audit logs', '/docs/dashboard/audit-logs'),
      p('Security contact', '/docs/dashboard/security-contact'),
    ]),
    g('Optimize', [
      p('Analytics', '/docs/optimize/analytics'),
      p('Feedback', '/docs/optimize/feedback'),
      p('Search', '/docs/optimize/search'),
      p('SEO', '/docs/optimize/seo'),
      p('PDF exports', '/docs/optimize/pdf-exports'),
    ]),
  ],

  guides: [
    g('Getting started', [
      p('Guides', '/docs/guides'),
      p('Documentation content types', '/docs/guides/content-types'),
      p('Documentation content templates', '/docs/guides/content-templates'),
      p('Understand your audience', '/docs/guides/understand-your-audience'),
    ]),
    g('Writing', [
      p('Write technical documentation', '/docs/guides/style-and-tone'),
      p('Link pages effectively', '/docs/guides/linking'),
      p('Use images and videos', '/docs/guides/media'),
      p('Accessibility', '/docs/guides/accessibility'),
      p('Improve documentation SEO', '/docs/guides/seo'),
      p('GEO: Optimize for AI search', '/docs/guides/geo'),
      p('Maintain docs over time', '/docs/guides/maintenance'),
      p('Measure and improve quality', '/docs/guides/improving-docs'),
    ]),
    g('Write with AI tools', [
      p('Claude Code', '/docs/guides/claude-code'),
      p('Codex', '/docs/guides/codex'),
      p('Cursor', '/docs/guides/cursor'),
      p('Devin Desktop', '/docs/guides/devin-desktop'),
    ]),
    g('Git workflows', [
      p('Git concepts for documentation', '/docs/guides/git-concepts'),
      p('Work with branches', '/docs/guides/branches'),
      p('Configure automerge', '/docs/guides/configure-automerge'),
    ]),
    g('Site types', [
      p('Developer documentation', '/docs/guides/developer-documentation'),
      p('Help center', '/docs/guides/help-center'),
      p('Knowledge base', '/docs/guides/knowledge-base'),
      p('Multi-language setup', '/docs/guides/internationalization'),
      p('Structure your navigation', '/docs/guides/navigation'),
    ]),
    g('Advanced', [
      p('Headless docs with custom frontend', '/docs/guides/custom-frontend'),
      p('Build custom page layouts', '/docs/guides/custom-layouts'),
      p('Build in-app assistant', '/docs/guides/assistant-embed'),
      p('Migrate MDX pages to OpenAPI', '/docs/guides/migrating-from-mdx'),
      p('Use automations', '/docs/guides/use-automations'),
    ]),
  ],

  api: [
    g('Getting started', [p('REST API introduction', '/docs/api/introduction')]),
    g('Agent', [
      p('Create agent job', '/docs/api/agent/create-agent-job', { method: 'POST', endpoint: '/v2/agent/jobs' }),
      p('Get agent job', '/docs/api/agent/get-agent-job', { method: 'GET', endpoint: '/v2/agent/jobs/{jobId}' }),
      p('Send follow-up message', '/docs/api/agent/send-message', { method: 'POST', endpoint: '/v2/agent/jobs/{jobId}/messages' }),
    ]),
    g('Analytics', [
      p('Get page views', '/docs/api/analytics/views', { method: 'GET', endpoint: '/v1/analytics/views' }),
      p('Get unique visitors', '/docs/api/analytics/visitors', { method: 'GET', endpoint: '/v1/analytics/visitors' }),
      p('Get search queries', '/docs/api/analytics/searches', { method: 'GET', endpoint: '/v1/analytics/searches' }),
      p('Get feedback', '/docs/api/analytics/feedback', { method: 'GET', endpoint: '/v1/analytics/feedback' }),
      p('Get feedback by page', '/docs/api/analytics/feedback-by-page', { method: 'GET', endpoint: '/v1/analytics/feedback/pages' }),
      p('Get assistant conversations', '/docs/api/analytics/assistant-conversations', { method: 'GET', endpoint: '/v1/analytics/assistant/conversations' }),
      p('Get assistant caller stats', '/docs/api/analytics/assistant-caller-stats', { method: 'GET', endpoint: '/v1/analytics/assistant/callers' }),
    ]),
    g('Assistant', [
      p('Create assistant message', '/docs/api/assistant/create-assistant-message', { method: 'POST', endpoint: '/v2/assistant/messages' }),
      p('Search documentation', '/docs/api/assistant/search', { method: 'POST', endpoint: '/v2/assistant/search' }),
      p('Get page content', '/docs/api/assistant/get-page-content', { method: 'GET', endpoint: '/v2/assistant/pages/{path}' }),
    ]),
    g('Automations', [
      p('Trigger automation', '/docs/api/automations/trigger', { method: 'POST', endpoint: '/v1/automations/{automationId}/trigger' }),
    ]),
    g('Deployments', [
      p('Trigger deployment', '/docs/api/update/trigger', { method: 'POST', endpoint: '/v1/project/update/{projectId}' }),
      p('Get deployment status', '/docs/api/update/status', { method: 'GET', endpoint: '/v1/project/update-status/{statusId}' }),
    ]),
    g('Preview', [
      p('Trigger preview deployment', '/docs/api/preview/trigger', { method: 'POST', endpoint: '/v1/project/preview/{projectId}' }),
    ]),
    g('Static export', [
      p('Overview', '/docs/api/static-export/overview'),
      p('Start export job', '/docs/api/static-export/start-job', { method: 'POST', endpoint: '/v1/exports' }),
      p('Get job status', '/docs/api/static-export/get-job-status', { method: 'GET', endpoint: '/v1/exports/{jobId}' }),
      p('Generate bundle', '/docs/api/static-export/generate-bundle', { method: 'POST', endpoint: '/v1/exports/{jobId}/bundle' }),
    ]),
  ],
}

/* ---------- helpers ---------- */

function flattenItems(items, group, acc) {
  for (const item of items) {
    acc.push({ ...item, group })
    if (item.children) flattenItems(item.children, group, acc)
  }
}

/** Flat, ordered list of every page in a tab — used for prev/next and search. */
export function flattenTab(tabId) {
  const acc = []
  for (const group of NAV[tabId]) flattenItems(group.items, group.title, acc)
  return acc
}

export const ALL_PAGES = TABS.flatMap((tab) =>
  flattenTab(tab.id).map((page) => ({ ...page, tab: tab.id, tabLabel: tab.label })),
)

/** Which tab a path belongs to (paths are unique across tabs). */
export function tabForPath(path) {
  const hit = ALL_PAGES.find((page) => page.path === path)
  return hit ? hit.tab : 'docs'
}

export function findPage(path) {
  return ALL_PAGES.find((page) => page.path === path) || null
}
