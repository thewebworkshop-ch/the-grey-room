import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = new Resend(resendApiKey);

// Example usage:
// import { resend } from "@/lib/email";
//
// await resend.emails.send({
//   from: "onboarding@yourdomain.com",
//   to: "user@example.com",
//   subject: "Welcome!",
//   html: "<p>Welcome to our app!</p>",
// });
