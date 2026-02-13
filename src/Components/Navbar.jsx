import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 bg-gray-800 text-white">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </nav>
  )
}

export default Navbar
