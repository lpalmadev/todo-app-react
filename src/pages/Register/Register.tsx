import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrivateRoutes, RegisterForm } from "../../@types";
import { useAuth } from "../../hooks";

const initialState: RegisterForm = { email: "", password: "" };

function Register() {
  const [register, setRegister] = useState<RegisterForm>(initialState);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signup(register.email, register.password);
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
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
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="**********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}
export default Register;
