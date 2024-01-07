import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  console.log("executed");
  const { a, b } = await request.json();
  return json(a + b);
};
