import React, { useContext, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Leaf, Mail, Lock, User, Loader2 } from 'lucide-react';
import axios from 'axios';

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [view, setView] = useState('login'); // 'login', 'signup', 'forgot', 'reset'
  const [loading, setLoading] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [formData, setFormData] = useState({ username: '', email: '', password: '', newPassword: '' });

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const payload = JSON.parse(atob(token.split('.')[1]));
      login({ name: payload.name, email: payload.email, picture: payload.picture }, token);
      navigate('/');
    } catch (err) {
      setError("Google Login failed.");
    }
  };

  const handleGuestLogin = () => {
    login({ name: 'Guest Farmer', email: 'guest@agriarya.com', picture: null }, 'guest-token');
    navigate('/');
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      let endpoint = '';
      let payload = {};

      if (view === 'login') {
        endpoint = 'http://localhost:5001/api/auth/login';
        payload = { email: formData.email, password: formData.password };
      } else if (view === 'signup') {
        endpoint = 'http://localhost:5001/api/auth/signup';
        payload = { username: formData.username, email: formData.email, password: formData.password };
      } else if (view === 'forgot') {
        endpoint = 'http://localhost:5001/api/auth/forgot-password';
        payload = { email: formData.email };
      } else if (view === 'reset') {
        endpoint = 'http://localhost:5001/api/auth/reset-password';
        payload = { token: resetToken, newPassword: formData.newPassword };
      }

      const res = await axios.post(endpoint, payload);

      if (view === 'login') {
        login({ name: res.data.user.username, email: res.data.user.email }, res.data.token);
        navigate('/');
      } else if (view === 'signup') {
        setView('login');
        setSuccess("Registration successful! Please sign in.");
      } else if (view === 'forgot') {
        setResetToken(res.data.resetToken);
        setView('reset');
        setSuccess("Reset token generated! (In real app, check your email). You can now set a new password.");
      } else if (view === 'reset') {
        setView('login');
        setSuccess("Password updated! Please login with your new password.");
      }
    } catch (err) {
      console.error("Auth error:", err);
      const errMsg = err.response?.data?.message || err.response?.data || err.message || "Something went wrong.";
      setError(typeof errMsg === 'string' ? errMsg : JSON.stringify(errMsg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.png" alt="BG" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A2E24]/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#E9F0EC] space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-3xl bg-white shadow-xl border border-[#E9F0EC] p-1">
             <img src="/logo.png" alt="AgriArya" className="w-full h-full object-contain rounded-2xl" />
          </div>
          <h2 className="mt-6 text-3xl font-black text-[#1A2E24] tracking-tight">
            {view === 'login' && 'Welcome Back'}
            {view === 'signup' && 'Join AgriArya'}
            {view === 'forgot' && 'OTP Verification'}
            {view === 'reset' && 'Create New Password'}
          </h2>
          <p className="mt-2 text-sm font-medium text-gray-500">
            {view === 'login' && 'Sign in to access your dashboard'}
            {view === 'signup' && 'Create an account to start farming'}
            {view === 'forgot' && 'Enter your email to receive a 6-digit OTP'}
            {view === 'reset' && 'Enter the code and set your new password'}
          </p>
        </div>

        <div className="space-y-6">
          {(error || success) && (
            <div className={`p-4 rounded-xl text-sm font-bold border ${success ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-600 border-red-100'}`}>
              {error || success}
            </div>
          )}
          
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {view === 'signup' && (
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" required placeholder="Full Name" className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#E9F0EC] outline-none transition-all focus:border-agri-main" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
              </div>
            )}
            
            {(view === 'login' || view === 'signup' || view === 'forgot') && (
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" required placeholder="Email Address" className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#E9F0EC] outline-none transition-all focus:border-agri-main" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            )}

            {(view === 'login' || view === 'signup') && (
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="password" required placeholder="Password" className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#E9F0EC] outline-none transition-all focus:border-agri-main" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
              </div>
            )}

            {view === 'reset' && (
              <>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-agri-main">OTP</div>
                  <input 
                    type="text" 
                    required 
                    maxLength="6"
                    placeholder="Enter 6-digit Code" 
                    className="w-full pl-14 pr-4 py-3 rounded-xl border-2 border-[#E9F0EC] outline-none tracking-widest font-black text-xl text-center focus:border-agri-main" 
                    value={resetToken} 
                    onChange={e => setResetToken(e.target.value)} 
                  />
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="password" required placeholder="Set New Password" className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#E9F0EC] outline-none transition-all focus:border-agri-main" value={formData.newPassword} onChange={e => setFormData({...formData, newPassword: e.target.value})} />
                </div>
              </>
            )}

            {view === 'login' && (
              <div className="text-right">
                <button type="button" onClick={() => setView('forgot')} className="text-xs font-bold text-gray-400 hover:text-agri-main transition-colors underline-offset-4 hover:underline">Forgot Password?</button>
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full bg-[#1A2E24] hover:bg-agri-main text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group">
              {loading ? <Loader2 className="animate-spin" size={18} /> : 
                (view === 'login' ? "Sign In" : view === 'signup' ? "Sign Up" : view === 'forgot' ? "Send OTP" : "Reset Password Now")
              }
            </button>
          </form>

          <div className="text-center">
            {view === 'login' ? (
              <button onClick={() => setView('signup')} className="text-sm font-bold text-gray-500 hover:text-agri-main">New to AgriArya? Create an account</button>
            ) : (
              <button onClick={() => setView('login')} className="text-sm font-bold text-gray-500 hover:text-agri-main">Back to Sign In</button>
            )}
          </div>

          {view === 'login' && (
            <div className="space-y-4 pt-4 border-t border-[#E9F0EC]">
              <div className="flex justify-center flex-col items-center gap-4">
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => setError("Google Login Failed")} theme="outline" size="large" />
                <button onClick={handleGuestLogin} className="w-full border-2 border-[#E9F0EC] text-gray-500 py-3 rounded-xl font-bold hover:bg-gray-50 flex items-center justify-center gap-2 px-6">
                  <Leaf size={16} /> Continue as Guest
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
