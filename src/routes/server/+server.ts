import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

/** @type {import('./$types').RequestHandler} */
export function GET(event: RequestEvent) {
  // log all headers
  console.log(event.request.headers);

  // create a JSON Response using a header we received
  return json(
    {
      // retrieve a specific header
      userAgent: event.request.headers.get("user-agent"),
    },
    {
      // set a header on the response
      headers: { "x-custom-header": "potato" },
    },
  );
}
