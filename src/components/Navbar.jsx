import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">Rajat Digital</h1>
        <div className="space-x-6 hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact" className="text-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
