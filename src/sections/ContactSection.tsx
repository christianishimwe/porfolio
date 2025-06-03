import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
        <form className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 text-3xl hover:scale-110 transition-transform">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 text-3xl hover:scale-110 transition-transform">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
