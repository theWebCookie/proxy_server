import dotenv from 'dotenv'
import * as Sentry from '@sentry/node'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

dotenv.config()

const { SENTRY_PUBLIC_KEY, SENTRY_HOST, SENTRY_PROJECT_ID } = process.env

Sentry.init({
  dsn: `https://${SENTRY_PUBLIC_KEY}@${SENTRY_HOST}.ingest.de.sentry.io/${SENTRY_PROJECT_ID}`,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0
})
