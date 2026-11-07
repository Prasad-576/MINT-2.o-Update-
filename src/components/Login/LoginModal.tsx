import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../Common/Button';
import Modal from '../Common/Modal';
import { authService } from '../../auth/authService';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    
    try {
      const response = await authService.login({ email, password });
      
      setStatus('success');
      
      if (response.user?.role === 'founder') {
        setMessage('Founder login successful! Redirecting...');
        setTimeout(() => {
          onClose();
          navigate('/founder');
        }, 1500);
      } else if (response.user?.role === 'manager') {
        setMessage('Manager login successful! Redirecting...');
        setTimeout(() => {
          onClose();
          navigate('/manager');
        }, 1500);
      } else {
        setMessage('Employee login successful! Redirecting...');
        setTimeout(() => {
          onClose();
          navigate('/dashboard');
        }, 1500);
      }
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Invalid email or password.');
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600">Please enter your details to sign in.</p>
        </div>

        <AnimatePresence mode="wait">
          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                status === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 className="shrink-0 mt-0.5 text-green-600" size={18} />
              ) : (
                <AlertCircle className="shrink-0 mt-0.5 text-red-600" size={18} />
              )}
              <p className="text-sm font-medium">{message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
            <input 
              type="email" 
              id="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" 
              placeholder="prasadbange2@gmail.com" 
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
              <a href="#" className="text-sm font-semibold text-teal-primary hover:text-teal-hover">Forgot password?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" 
              placeholder="••••••••" 
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-teal-primary focus:ring-teal-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
              Remember me for 30 days
            </label>
          </div>
          
          <Button 
            variant="primary" 
            type="submit" 
            disabled={isLoading || status === 'success'}
            className="w-full py-3.5 justify-center text-base shadow-lg shadow-teal-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign in to your account'}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
