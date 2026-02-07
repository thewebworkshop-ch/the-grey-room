import { setupServer } from "msw/node";

import { handlers } from "./handlers";

/**
 * MSW server for Node.js environment (Vitest tests)
 * This will intercept API calls during testing
 */
export const server = setupServer(...handlers);
