import { useEffect, useState } from 'react';
import { blogService } from '../api/blogService';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedUser, setSelectedUser] = useState("all");


  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      const [postsData, usersData] = await Promise.all([
        blogService.getPosts(),
        blogService.getUsers()
      ]);
      setPosts(postsData.posts);
      setUsers(usersData.users);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    } finally {
      setLoading(false);
    }
  };

  //Filtro por usuario/autor
  const handleFilterByUser = async (userId) => {
    setSelectedUser(userId);
    setLoading(true);
    
    try {
      let data;
      if (userId === 'all') {
        // Forzamos la carga de todos los posts
        data = await blogService.getPosts();
      } else {
        // Carga posts por ID de usuario/autor
        data = await blogService.getPostsByUser(userId);
      }
      setPosts(data.posts);
    } catch (error) {
      console.error("Error al filtrar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto">
      <aside className="w-full md:w-1/4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Filtrar por Autor</h3>
        
        {/* Lista Autores*/}
        <select 
          value={selectedUser}
          onChange={(e) => handleFilterByUser(e.target.value)}
          className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer"
        >
          <option value="all">🌟 Todos los autores</option>
          {users.map(u => (
            <option key={u.id} value={u.id}>
              {u.firstName} {u.lastName}
            </option>
          ))}
        </select>
      </aside>

      <main className="w-full md:w-3/4">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {posts.length > 0 ? (
              posts.map(post => <PostCard key={post.id} post={post} />)
            ) : (
              <p className="text-center text-gray-500 py-20">No hay posts para este autor.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;