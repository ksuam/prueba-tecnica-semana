import { useEffect, useState } from 'react';
import { blogService } from '../api/blogService';
import { Mail, Briefcase, MapPin, Loader2 } from 'lucide-react';

const UsersDirectory = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogService.getUsers()
      .then(data => {
        setUsers(data.users);
      })
      .catch(error => {
        console.error("Error al cargar usuarios:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      // Loader
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <Loader2 className="animate-spin text-indigo-600 mb-4" size={48} />
        <p className="text-gray-500 font-medium">Cargando directorio de usuarios...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
          Directorio de Usuarios
        </h1>
        <p className="text-gray-500 text-lg">
          Lista de usuarios registrados en la plataforma con acceso protegido.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {users.map((u) => (
          <div 
            key={u.id} 
            className="group bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/*Imagen*/}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-indigo-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <img 
                src={u.image}
                alt={`${u.firstName} ${u.lastName}`}
                className="relative w-full aspect-square object-cover rounded-3xl bg-gray-50 border border-white shadow-sm"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {u.firstName} {u.lastName}
              </h3>
              
              <div className="inline-flex items-center gap-1 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 bg-indigo-50 px-3 py-1 rounded-full">
                <Briefcase size={12} />
                {u.company.title}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-50">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <Mail size={16} className="text-gray-400" />
                  <span className="truncate">{u.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{u.address.city}, {u.address.stateCode}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersDirectory;