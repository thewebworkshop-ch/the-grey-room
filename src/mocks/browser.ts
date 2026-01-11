import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

/**
 * MSW worker for browser environment (development/Storybook)
 * This will intercept API calls in the browser
 */
export const worker = setupWorker(...handlers);
