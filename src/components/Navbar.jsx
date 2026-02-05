import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, LayoutGrid } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-indigo-200 shadow-lg">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              SUA<span className="text-indigo-600">Blog</span>
            </span>
          </Link>

          {/* Menú Derecha */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Inicio
            </Link>

            {user ? (
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <Link to="/users" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-indigo-600">
                  <LayoutGrid size={18} /> Directorio
                </Link>
                <div className="flex items-center gap-3 bg-gray-50 p-1 pr-3 rounded-full border border-gray-100">
                  <img src={user.picture} alt="profile" className="w-8 h-8 rounded-full shadow-sm" />
                  <button onClick={logout} className="text-gray-500 hover:text-red-600 transition-colors">
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;