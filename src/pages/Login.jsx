import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    login(userObject);
    navigate('/users');
  };

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md mx-auto"> 
        <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-gray-100 p-8 md:p-12 text-center">
          
          <div className="w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-lg shadow-indigo-200">
             <span className="text-3xl font-black">-</span>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">¡Hola!</h1>
          <p className="text-gray-500 mb-10 text-lg">Inicia sesión para acceder al directorio exclusivo.</p>
          
          <div className="flex justify-center p-6 bg-indigo-50/50 rounded-3xl border-2 border-dashed border-indigo-100 transition-all hover:bg-indigo-50">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => console.log('Login Failed')}
              theme="filled_blue"
              shape="pill"
            />
          </div>
          
          <p className="mt-10 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;