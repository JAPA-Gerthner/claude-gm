import { createApp } from 'vue'
import * as Sentry from '@sentry/vue'
import App from './App.vue'

const app = createApp(App)

// GlitchTip/Sentry error tracking
const dsn = import.meta.env.VITE_SENTRY_DSN
if (dsn) {
  Sentry.init({
    app,
    dsn,
    integrations: [
      Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
  })
}

app.mount('#app')
