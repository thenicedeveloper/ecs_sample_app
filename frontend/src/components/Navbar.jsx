import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-semibold hover:text-gray-300 transition">
        DevOps
      </Link>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
      </div>
    </nav>
  )
}
