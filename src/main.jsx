import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Docs from './docs/Docs.jsx'
import EnterprisePage from './pages/EnterprisePage.jsx'
import StartupsPage from './pages/StartupsPage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import SwitchPage from './pages/SwitchPage.jsx'
import ScorePage from './pages/ScorePage.jsx'
import CustomersPage from './pages/CustomersPage.jsx'
import ContactSalesPage from './pages/ContactSalesPage.jsx'
import './index.css'

// minimal routing: pick the page component from the pathname, landing page as fallback
const path = window.location.pathname.replace(/\/+$/, '')
let Page = App
if (path.startsWith('/docs')) Page = Docs
else if (path === '/enterprise') Page = EnterprisePage
else if (path === '/startups') Page = StartupsPage
else if (path === '/pricing') Page = PricingPage
else if (path === '/careers') Page = CareersPage
else if (path === '/blog') Page = BlogPage
else if (path === '/switch') Page = SwitchPage
else if (path === '/score') Page = ScorePage
else if (path === '/customers') Page = CustomersPage
else if (path.startsWith('/contact')) Page = ContactSalesPage

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
