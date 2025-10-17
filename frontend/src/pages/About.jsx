import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 py-12 px-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900"
      >
        DevOps Mindset 2025 🌐
      </motion.h1>

      {/* --- Section: The Three Ways --- */}
      <section className="max-w-5xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-600 border-l-4 border-cyan-600 pl-3">
          The Three Ways — Core DevOps Principles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">1️⃣ Flow</h3>
            <p className="text-sm text-gray-600">
              Work in small batches to increase speed and reduce risk. Visualize
              work, limit WIP, and optimize value flow.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">2️⃣ Fast Feedback</h3>
            <p className="text-sm text-gray-600">
              Build systems that detect and resolve problems early. Embrace
              automation, observability, and blameless retrospectives.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">3️⃣ Continual Learning</h3>
            <p className="text-sm text-gray-600">
              Encourage experimentation, safe failures, and innovation. A
              generative culture out-learns and out-experiments the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section: Key Movements --- */}
      <section className="max-w-5xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-600 border-l-4 border-cyan-600 pl-3">
          Key Movements & Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Lean Manufacturing → DevOps Roots</h3>
            <p className="text-sm text-gray-600">
              From Toyota’s “Just-in-Time” system — eliminate waste, empower
              frontline workers, and improve continuously.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Agile & Lean Startup</h3>
            <p className="text-sm text-gray-600">
              Build, measure, learn. Deliver value fast through MVPs and data-driven
              iteration.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Safety Culture → SRE</h3>
            <p className="text-sm text-gray-600">
              Borrowed from aviation and healthcare: resilience through
              blameless postmortems and fault-tolerant design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Bell Labs Legacy</h3>
            <p className="text-sm text-gray-600">
              A culture of innovation that produced UNIX, C, and the transistor —
              proving that creativity thrives in collaborative environments.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section: Learning & Curiosity --- */}
      <section className="max-w-5xl mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-600 border-l-4 border-cyan-600 pl-3 text-left">
          Learning & Growth
        </h2>
        <div className="bg-gradient-to-r from-indigo-50 to-white shadow-md rounded-2xl p-8">
          <p className="text-gray-700 leading-relaxed text-md">
            <strong>Learn intentionally.</strong> Identify relevant material, read broadly,
            reflect deeply, and apply what you learn. Great questions drive
            great discovery — ask what’s invisible, what can improve, and how
            value reaches customers.
          </p>
        </div>
      </section>

      {/* --- Section: Culture & Teams --- */}
      <section className="max-w-5xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-600 border-l-4 border-cyan-600 pl-3">
          Your DevOps Team Culture
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Collaborative</h3>
            <p className="text-sm text-gray-600">
              Teams share repos, swarms to fix problems, and communicate openly
              without fear of blame.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Generative Culture</h3>
            <p className="text-sm text-gray-600">
              Promotes learning, experimentation, and respect — knowledge flows
              freely across boundaries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Continuous Improvement</h3>
            <p className="text-sm text-gray-600">
              Limit WIP, reduce lead time, automate quality, and celebrate small,
              frequent wins.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section: Practices --- */}
      <section className="max-w-5xl mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-600 border-l-4 border-cyan-600 pl-3">
          Modern DevOps Practices
        </h2>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          <li className="bg-white p-4 rounded-xl shadow-sm">⚙️ Infrastructure as Code</li>
          <li className="bg-white p-4 rounded-xl shadow-sm">🚀 Continuous Integration / Delivery (CI/CD)</li>
          <li className="bg-white p-4 rounded-xl shadow-sm">📦 Containerization & Orchestration</li>
          <li className="bg-white p-4 rounded-xl shadow-sm">📊 Monitoring & Observability</li>
          <li className="bg-white p-4 rounded-xl shadow-sm">🤝 Collaboration & Culture</li>
          <li className="bg-white p-4 rounded-xl shadow-sm">🧠 Continuous Learning & Experimentation</li>
        </ul>
      </section>
    </div>
  )
}