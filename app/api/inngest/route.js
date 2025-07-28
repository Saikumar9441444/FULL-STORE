import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncuserUpdation } from "../../../config/inngest";
import connectDB from "../../../lib/connectDB";

// Connect to DB before running the functions
await connectDB(); // <-- Add this line (if top-level await is allowed in your config)

// Create an API that serves functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncuserUpdation,
    syncUserDeletion,
  ],
});
