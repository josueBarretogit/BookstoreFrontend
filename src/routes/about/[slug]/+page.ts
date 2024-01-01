import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = ({ params }) => {
  return {
    title: params.slug,
    content: "some content",
  };
};
