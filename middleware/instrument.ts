import dotenv from 'dotenv'
import * as Sentry from '@sentry/node'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

dotenv.config()

Sentry.init({
  dsn: `https://${process.env.SENTRY_PUBLIC_KEY}@${process.env.SENTRY_HOST}.ingest.de.sentry.io/${process.env.SENTRY_PROJECT_ID}`,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0
})
