const { onRequest } = require('firebase-functions/v2/https');
const next = require('next');

process.env.NODE_ENV = 'production';
process.env.NEXT_TELEMETRY_DISABLED = '1';

const app = next({ dev: false, dir: __dirname });

// prepare() in production initializes the Next.js server during cold start.
// getRequestHandler() is cached so it's only resolved once per instance.
const ready = app.prepare();
const handleRequest = app.getRequestHandler();

exports.nextServer = onRequest(
  { memory: '1GiB', timeoutSeconds: 60, region: 'us-central1' },
  async (req, res) => {
    await ready;
    return handleRequest(req, res);
  }
);
