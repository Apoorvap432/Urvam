import { NavLink, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';

export default function App() {
  return (
    <div>
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <NavLink to="/" className="font-bold text-2xl text-leaf-600">🌿 Mini Plant Store</NavLink>
          <nav className="flex gap-3">
            <NavLink to="/" className="btn">Catalog</NavLink>
            <NavLink to="/admin" className="btn">Admin</NavLink>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <footer className="container py-10 text-sm text-gray-500">© {new Date().getFullYear()} Mini Plant Store</footer>
    </div>
  );
}
