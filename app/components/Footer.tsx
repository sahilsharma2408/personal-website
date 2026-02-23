export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; 2026 Sahil Sharma. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sahilsharma2408"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/SahilSharma0824"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/sahilsharma241993/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
