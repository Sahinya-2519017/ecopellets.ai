import { useState } from 'react';
import { Leaf, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      setEmail('');
      setPassword('');
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 p-3 rounded-full">
              <Leaf className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to EcoPellets</h1>
          <p className="text-gray-600">
            Sign in to access your farmer dashboard and personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="text-blue-900 font-medium mb-1">Demo Login Page</p>
              <p className="text-blue-800">
                This is a frontend-only demo. No actual authentication is performed.
                Use any valid email format and password (6+ characters).
              </p>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-green-900 font-medium mb-1">Login Successful!</p>
                <p className="text-green-800">
                  In a production environment, you would now be redirected to your dashboard.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="farmer@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="text-green-600 font-semibold hover:text-green-700">
                Sign up
              </button>
            </p>
          </div>
        </div>

        <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Future Features (SaaS Ready)</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              Personalized farmer dashboard
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              Order tracking and delivery management
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              Field data recording and pest monitoring
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              Historical recommendation archive
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              Community forum and expert consultation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
