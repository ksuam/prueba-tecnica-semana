import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { blogService } from '../api/blogService';
import { Eye, ThumbsUp, ThumbsDown } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    blogService.getPostById(id).then(setPost);
  }, [id]);

  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-4xl font-black mb-4">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed mb-8">{post.body}</p>
      
      <div className="flex items-center gap-6 border-t pt-4 text-gray-500">
        <span className="flex items-center gap-2"><Eye size={20}/> {post.views} vistas</span>
        <span className="flex items-center gap-2 text-green-600">
          <ThumbsUp size={20}/> {post.reactions.likes}
        </span>
        <span className="flex items-center gap-2 text-red-600">
          <ThumbsDown size={20}/> {post.reactions.dislikes}
        </span>
      </div>
    </div>
  );
};

export default PostDetail