import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Subscribers - Admin" },
];

interface Subscriber {
  id: number;
  email: string;
  subscribed_at: string;
  status: string;
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const isLocalhost = url.hostname === "localhost" || url.hostname === "127.0.0.1";

  // Defense-in-depth: require CF Access header in production
  const cfUser = request.headers.get("CF-Access-Authenticated-User-Email");
  if (!isLocalhost && !cfUser) {
    throw new Response("Forbidden", { status: 403 });
  }

  const { DB } = context.cloudflare.env;

  const result = await DB.prepare(
    "SELECT id, email, subscribed_at, status FROM subscribers ORDER BY subscribed_at DESC"
  ).all<Subscriber>();

  return {
    subscribers: result.results ?? [],
    total: result.results?.length ?? 0,
  };
}

export default function AdminSubscribers() {
  const { subscribers, total } = useLoaderData<typeof loader>();

  function downloadCsv() {
    const header = "id,email,subscribed_at,status";
    const rows = subscribers.map(
      (s) => `${s.id},"${s.email}","${s.subscribed_at}","${s.status}"`
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "subscribers.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Subscribers</h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{total} total</p>
          </div>
          <button
            onClick={downloadCsv}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Download CSV
          </button>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Subscribed at</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {subscribers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-8 text-center text-gray-400">
                    No subscribers yet.
                  </td>
                </tr>
              ) : (
                subscribers.map((s) => (
                  <tr key={s.id} className="bg-white dark:bg-gray-950">
                    <td className="px-4 py-3 text-gray-900 dark:text-white">{s.email}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                      {new Date(s.subscribed_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          s.status === "active"
                            ? "inline-flex rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400"
                            : "inline-flex rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400"
                        }
                      >
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
