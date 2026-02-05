import { Link } from 'react-router-dom';
import { MessageSquare, Eye, Heart } from 'lucide-react';

const PostCard = ({ post }) => {
  const tagColors = ['bg-blue-100 text-blue-700', 'bg-purple-100 text-purple-700', 'bg-pink-100 text-pink-700'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span 
            key={tag} 
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tagColors[index % tagColors.length]}`}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Título y Cuerpo */}
      <Link to={`/post/${post.id}`}>
        <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-500 line-clamp-3 mb-6 text-sm leading-relaxed">
        {post.body}
      </p>

      {/* Footer de la Card*/}
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span className="flex items-center gap-1">
            <Eye size={16} /> {post.views}
          </span>
          <span className="flex items-center gap-1">
            <Heart size={16} className="text-red-400" /> {post.reactions.likes}
          </span>
        </div>
        
        <Link 
          to={`/post/${post.id}`} 
          className="text-indigo-600 font-bold text-sm hover:underline"
        >
          Leer más →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;