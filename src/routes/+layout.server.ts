import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  return { user: "an user" };
};
