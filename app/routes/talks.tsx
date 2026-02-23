import { useState } from "react";
import type { MetaFunction } from "react-router";
import { talks } from "~/data/talks";

export const meta: MetaFunction = () => [
  { title: "Talks | Sahil Sharma" },
  { name: "description", content: "Talks and presentations by Sahil Sharma at conferences and meetups." },
];

const TAG_COLORS: Record<string, string> = {
  react: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  testing: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  typescript: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  cloudflare: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  keynote: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  performance: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  dx: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
};

function getYouTubeId(url: string): string | null {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

function TalkCard({ talk }: { talk: (typeof talks)[0] }) {
  const [playing, setPlaying] = useState(false);
  const videoId = talk.youtubeUrl ? getYouTubeId(talk.youtubeUrl) : null;

  return (
    <div className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-lg transition-all duration-200">
      {/* Thumbnail / Video */}
      <div className="relative aspect-video bg-black shrink-0">
        {videoId ? (
          playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={talk.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full"
              aria-label={`Play: ${talk.title}`}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-900/40 dark:via-purple-900/30 dark:to-pink-900/20 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-indigo-300 dark:text-indigo-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {talk.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-2">
          {talk.title}
        </h2>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          {talk.eventUrl ? (
            <a
              href={talk.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {talk.event}
            </a>
          ) : (
            <span className="font-semibold">{talk.event}</span>
          )}
          <span className="mx-1.5 text-gray-300 dark:text-gray-700">·</span>
          <time>{talk.date}</time>
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
          {talk.description}
        </p>

        {talk.slidesUrl && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <a
              href={talk.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              Slides
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Talks() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Talks
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          I enjoy sharing what I learn. Here are the talks and presentations I've given at conferences and meetups.
        </p>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
          Want me to speak at your event?{" "}
          <a
            href="mailto:ss2408.inbox@gmail.com"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            Get in touch.
          </a>
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {talks.map((talk) => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </div>
    </div>
  );
}
