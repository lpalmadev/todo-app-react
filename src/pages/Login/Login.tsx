import { useState } from "react"
import { LoginForm } from "../../@types"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const initialFormState : LoginForm = { email: '', password: ''}

function Login() {
  const [form, setForm] = useState<LoginForm>(initialFormState)
  const { login, signinWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: {name, value} } : React.ChangeEvent<HTMLInputElement>) : void => {
    setForm({...form, [name]: value}) 
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    login(form.email, form.password);
    navigate("/", { replace: true});
  }

  const onClickLoginWithGoogle = () => {
    signinWithGoogle();
  }

  return (
    <div className="w-full max-w-xs m-auto">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              name="email" 
              type="email" 
              id="email" 
              onChange={handleChange} 
              placeholder="example@domain.com" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              id="password" 
              onChange={handleChange}
              placeholder="**********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            // onClick={handleResetPassword}
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <button 
          className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
          onClick={onClickLoginWithGoogle}
        >
          Signing With Google
        </button>
        <p className="my-4 text-sm flex justify-between px-3">
          Don't have an account?
          <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Register
          </Link>
        </p>
    </div>
  )
}

export default Login