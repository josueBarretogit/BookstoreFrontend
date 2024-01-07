import { fail } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

const db = {
  getUserFromSession(cookie: string | undefined) {
    return cookie;
  },
  createSession(user: FormDataEntryValue | null) {
    return user;
  },
  getUser(us: FormDataEntryValue | null) {
    return us;
  },
};

export const load: PageServerLoad = async ({ cookies }) => {
  const user: string | undefined = await db.getUserFromSession(
    cookies.get("sessionid"),
  );
  return { user };
};

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const user = await db.getUser(email);
    if (!user) {
      return fail(400, { email, missing: true });
    }
    cookies.set("sessionid", (await db.createSession(user)) as string, {
      path: "/",
    });

    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  },
} satisfies Actions;
