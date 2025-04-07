import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [receiveNews, setReceiveNews] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center w-full sm:w-[1400px] h-auto sm:h-[580px] bg-black bg-opacity-5">
      <div className="flex flex-row w-full sm:w-[800px] shadow-lg rounded-lg bg-white overflow-hidden">
        {/* Testimonial Section */}
        <div className="hidden sm:block sm:w-[700px] bg-[#9b87f5] relative flex flex-col justify-between p-3 sm:p-12 text-white">
          <div className="mt-2 sm:mt-20 relative z-10">
            <img src="/apostrophe.png" className="apostrophe h-5 sm:h-10" alt="apostrophe"/>
            <p className="text-sm sm:text-3xl font-light leading-tight sm:leading-relaxed">
              Step into the elite circle of JEE toppers. Gain access to strategies, insights, and exclusive tips that have shaped the best minds.
            </p>
            <div className="mt-2 sm:mt-12">
              <p className="font-semibold text-xs sm:text-xl">Rajesh Kumar</p>
              <p className="opacity-80 text-xs sm:text-base">Technical Training Head</p>
              <p className="text-sm sm:text-2xl font-bold mt-1 sm:mt-2">NNIIT</p>
            </div>
          </div>
          
          <div className="relative z-10">
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-80 mb-1 sm:mb-4">TRUSTED BY</p>
            <div className="flex justify-between items-center text-xs sm:text-base">
              <div className="text-white opacity-80 font-semibold">Google</div>
              <div className="text-white opacity-80 font-semibold">NVIDIA</div>
              <div className="text-white opacity-80 font-semibold">OpenAI</div>
              <div className="text-white opacity-80 font-semibold">LinkedIn</div>
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="w-full sm:w-[900px] flex flex-col justify-center bg-white p-3 sm:p-0">
          <div className="mx-auto w-full max-w-md">
            <h1 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-8 text-gray-900 text-center sm:text-left sm:relative sm:left-[25%]">Create your account</h1>

            <button className="w-[60%] sm:w-[70%] mb-2 sm:mb-6 py-1 sm:py-2 flex items-center justify-center text-xs sm:text-base relative left-[20%] sm:left-[15%] gap-1 sm:gap-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="mr-1 sm:mr-2"
              >
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.30-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>

            <div className="relative flex items-center justify-center mb-2 sm:mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-2 sm:mx-4 text-xs sm:text-base text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mb-2 sm:mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-1 sm:mb-2 text-xs sm:text-base px-1 sm:px-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[85%] p-2 sm:p-3 text-xs sm:text-base sm:relative sm:left-[2%] px-1 sm:px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="john.doe@gmail.com"
              />
            </div>

            <div className="mb-2 sm:mb-4">
              <label htmlFor="password" className="block text-gray-600 mb-1 sm:mb-2 text-xs sm:text-base px-1 sm:px-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full sm:w-[84%] p-2 sm:p-3 text-xs sm:text-base sm:relative sm:left-[2%] px-1 sm:px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-12 top-[32%] sm:top-[12%] transform text-gray-500"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} className="sm:w-5 sm:h-5" /> : <Eye size={16} className="sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

            <div className="mb-2 sm:mb-6 flex items-start gap-1 sm:gap-2">
              <input
                type="checkbox"
                id="receiveNews"
                checked={receiveNews}
                onChange={() => setReceiveNews(!receiveNews)}
                className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="receiveNews" className="text-gray-600 text-xs sm:text-sm">
                Receive exclusive topper strategies and updates.
              </label>
            </div>

            <button className="w-[70%] py-2 sm:py-3 text-xs sm:text-base bg-orange-500 text-white rounded-lg hover:bg-orange-600 mb-2 sm:mb-6 relative left-[17%] sm:left-[15%]">
              Create account
            </button>

            <p className="text-center text-xs sm:text-base text-gray-600 mb-1 sm:mb-4">
              Already have an account?{' '}
              <a href="#" className="text-orange-500 hover:underline">
                Log in
              </a>
            </p>

            <p className="text-xs sm:text-sm text-gray-500 text-center">
              By creating your account, you agree to the
              <br className="hidden sm:block" />
              <a href="#" className="text-gray-500 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
