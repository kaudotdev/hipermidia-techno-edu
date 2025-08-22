import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navLinks = [
        { to: "/", label: "Início" },
        { to: "/beneficios", label: "Benefícios" },
        { to: "/ferramentas", label: "Ferramentas" },
        { to: "/registros", label: "Registros" },
        { to: "/blog", label: "Blog" },
        { to: "/contatos", label: "Contatos" },
    ];
    return (
        <header className="w-full z-50 relative">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="text-xl font-bold text-[#6D6594] whitespace-nowrap select-none drop-shadow-lg">
                    <Link to="/">Techno & Edu</Link>
                </div>
                <ul className="hidden md:flex gap-4 text-[#6D6594] font-medium">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`px-4 py-2 rounded-xl border-2 border-transparent transition-all duration-400 bg-white hover:border-[#b7aee6] hover:bg-[#f3f0fa] hover:scale-105 shadow-md ${location.pathname === link.to ? 'border-[#a99be7] bg-[#f3f0fa] scale-105' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden flex items-center">
                    <button
                        aria-label="Abrir menu"
                        className={`text-[#6D6594] focus:outline-none relative group`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`block w-8 h-1 bg-[#6D6594] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-8 h-1 bg-[#6D6594] rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-1 bg-[#6D6594] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                    {menuOpen && (
                        <ul className="absolute top-16 left-0 w-full bg-white border-b border-[#ecebf3] shadow-2xl flex flex-col gap-2 py-4 px-6 z-50 text-[#6D6594] font-medium animate-fade-in rounded-b-2xl">
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className={`block px-4 py-3 rounded-xl border-2 border-transparent transition-all duration-400 bg-white hover:border-[#b7aee6] hover:bg-[#f3f0fa] hover:scale-105 shadow ${location.pathname === link.to ? 'border-[#a99be7] bg-[#f3f0fa] scale-105' : ''}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}