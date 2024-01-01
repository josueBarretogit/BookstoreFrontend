import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = ({ params }) => {
  return {
    title: params.slug,
    content: "some content",
  };
};
