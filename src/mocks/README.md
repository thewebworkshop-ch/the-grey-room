# MSW (Mock Service Worker)

This directory contains the MSW configuration for mocking API calls in tests.

## Structure

- **handlers.ts** - Define your API mock handlers here
- **server.ts** - MSW server for Node.js (Vitest tests)
- **browser.ts** - MSW worker for browser (development/Storybook)

## Usage in Tests

MSW is automatically enabled for all Vitest tests (configured in `vitest.setup.ts`).

### Example: Mocking an API call

```typescript
import { HttpResponse, http } from "msw";

import { server } from "@/mocks/server";

test("fetches user data", async () => {
  // Mock the API response for this test
  server.use(
    http.get("/api/user", () => {
      return HttpResponse.json({ name: "John Doe" });
    })
  );

  // Your test code here
});
```

### Example: Mocking an error

```typescript
server.use(
  http.get("/api/user", () => {
    return new HttpResponse(null, { status: 500 });
  })
);
```

## Adding Global Handlers

Add handlers that should work across all tests in `handlers.ts`:

```typescript
export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json({ name: "Default User" });
  }),
];
```

## Using in Browser (Development)

To enable MSW in development mode, add this to your `src/app/layout.tsx`:

```typescript
if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const { worker } = await import("@/mocks/browser");
    worker.start();
  }
}
```

## Resources

- [MSW Documentation](https://mswjs.io/docs/)
- [MSW with Next.js](https://mswjs.io/docs/integrations/node)
