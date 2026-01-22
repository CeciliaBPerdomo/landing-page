function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-800">
          Mi Landing
        </h1>

        <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Inicio
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Características
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
