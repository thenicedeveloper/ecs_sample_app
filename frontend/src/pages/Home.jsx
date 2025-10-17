import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center text-center px-6 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-emerald-600"
      >
        Welcome to DevOps at IPRO 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-lg max-w-2xl mb-10"
      >
        Where we utilize a modern, containerized approach showcasing the power
        of clean architecture, automation, and cloud-native DevOps design.
      </motion.p>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-5xl">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-md rounded-2xl p-8 flex-1"
        >
          <h3 className="text-xl font-semibold mb-2 text-emerald-600">
            Backend Excellence
          </h3>
          <p className="text-gray-600 text-sm">
            Built for performance and simplicity. The
            backend supports clean APIs, secured environments, and
            scalability for real-world workloads.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-md rounded-2xl p-8 flex-1"
        >
          <h3 className="text-xl font-semibold mb-2 text-emerald-600">
            Frontend Experience
          </h3>
          <p className="text-gray-600 text-sm">
            Powered by DevOps strategies for a fast, adaptive interface.
            Designed for seamless interaction, responsive layouts, and a
            professional visual identity.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-md rounded-2xl p-8 flex-1"
        >
          <h3 className="text-xl font-semibold mb-2 text-emerald-600">
            Cloud Infrastructure
          </h3>
          <p className="text-gray-600 text-sm">
            Deployed using Docker and AWS ECS for reliable scalability. A
            fully automated CI/CD workflow ensures zero-downtime releases.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-emerald-50 to-white shadow-md rounded-2xl p-8 max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-2 text-emerald-600">
          Built for Developers, Designed for Growth 🌱
        </h2>
        <p className="text-gray-700 mb-6">
          Explore the stack, learn modern DevOps principles, and deploy scalable
          apps using clean, production-ready patterns.
        </p>
        <a
          href="/about"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          Learn More →
        </a>
      </motion.div>
    </div>
  )
}