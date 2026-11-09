import { getMessages } from "next-intl/server";

/* Only the namespaces read by client components ("use client" files calling useTranslations).
   Everything else is rendered on the server, so it doesn't need to ship in every page's HTML.
   Add a namespace here when a client component starts using it. */
const CLIENT_NAMESPACES = ["Nav", "Footer", "Home", "HomeModern", "ContactModern", "ExpertiseModern", "InsightsModern"];

export async function getClientMessages() {
  const all = await getMessages();
  return Object.fromEntries(CLIENT_NAMESPACES.filter((k) => k in all).map((k) => [k, all[k]]));
}
