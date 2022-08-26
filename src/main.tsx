import React from "react";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

Sentry.init({
  dsn: "https://95986b3153664709a510de0b424f6532@o403794.ingest.sentry.io/6692134",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
