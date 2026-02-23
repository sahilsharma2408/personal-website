import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Unsubscribe - Sahil Sharma" },
];

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return { status: "invalid" as const };
  }

  const { DB } = context.cloudflare.env;

  const row = await DB.prepare(
    "SELECT id, status FROM subscribers WHERE unsubscribe_token = ?"
  )
    .bind(token)
    .first<{ id: number; status: string }>();

  if (!row) {
    return { status: "not_found" as const };
  }

  if (row.status === "unsubscribed") {
    return { status: "already_unsubscribed" as const };
  }

  await DB.prepare("UPDATE subscribers SET status = 'unsubscribed' WHERE id = ?")
    .bind(row.id)
    .run();

  return { status: "success" as const };
}

export default function Unsubscribe() {
  const { status } = useLoaderData<typeof loader>();

  const messages: Record<typeof status, { heading: string; body: string }> = {
    success: {
      heading: "You've been unsubscribed",
      body: "Sorry to see you go. You won't receive any more emails from me.",
    },
    already_unsubscribed: {
      heading: "Already unsubscribed",
      body: "You've already been removed from the mailing list.",
    },
    not_found: {
      heading: "Link not recognised",
      body: "This unsubscribe link is invalid or has expired.",
    },
    invalid: {
      heading: "Missing token",
      body: "No unsubscribe token was provided.",
    },
  };

  const { heading, body } = messages[status];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">{heading}</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">{body}</p>
        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
