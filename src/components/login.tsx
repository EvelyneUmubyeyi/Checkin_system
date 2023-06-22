import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {faEnvelope, faLock, faEyeSlash, faEye  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LoginFormData {
    email: string;
    password: string;
  }

const Login = ()=>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
      });
      const [authenticated, setAuthenticated] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [ showPassword, setShowPassword] = useState(false);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleLogin = async () => {
        const { email, password } = formData;
        
        if (!email || !password) {
            console.log('All fields are required');
          return;
        }
        
        setIsLoading(true);
    
        try {
        //integration
          setAuthenticated(true);
        } catch (error: any) {
            console.log(error);
        } finally {
            navigate("/");
          setIsLoading(false);
        }
      };
    
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="shadow-md rounded my-4 px-4 py-4 w-[90%] m-auto">
          <div className="text-green-900  mb-3">
            <h3 className='text-center font-bold mb-8 text-xl'>Sign In</h3>
          </div>
            <div className="relative mb-6">
              <input
                className="text-sm sm:text-base placeholder-gray-500 pl-10 px-2 py-1 rounded-lg border-2 border-green-900 w-full py-2 focus:outline-none focus:border-customBlue"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-900" />
                </div>
            </div>
     <div className="relative mb-6">
      <input
        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-10 py-1 rounded-lg border-2 border-green-900 w-full py-2 focus:outline-none focus:border-customBlue"
        id="password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FontAwesomeIcon icon={faLock} className="text-green-900" />
      </div>
      <div
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={() => setShowPassword(!showPassword)}
        style={{ cursor: 'pointer' }}
      >
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="text-green-900"
        />
      </div>
    </div>
            
            <div className="flex items-center justify-between">
              <button
                className="bg-green-900 hover:bg-green-700 text-white text-center font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
                disabled={isLoading}
              >
                  {isLoading ? 'Loading...' : 'Create an account'}
              </button>
            </div>
            <div className='pt-4 mb-6 flex justify-center	'>
            <p>Not registered? <a href="/signup" className="text-green-900 font-bold">Sign up</a></p>
          </div>
          <div className="relative flex py-2 items-center">
    </div>
          </div>
          </div>
      );
}

export default Login;