import { useMemo, useState } from "react";
import { LoginForm, PrivateRoutes } from "../../@types";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { InputField } from "../../components";
import { emailValidator, passwordValidator } from "../../utilities";

const initialFormState: LoginForm = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState<LoginForm>(initialFormState);
  const [errors, setErrors] = useState<LoginForm>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { login, signinWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm) {
      await login(form.email, form.password);
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    }
  };

  const onClickLoginWithGoogle = async () => {
    await signinWithGoogle();
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  const validateForm = useMemo(() => {
    const errors: LoginForm = {
      email: "",
      password: "",
    };

    if (isSubmitted) {
      console.log(isSubmitted);
      errors.email = emailValidator(form.email);
      errors.password = passwordValidator(form.password);
    }

    setErrors(errors);

    // Return true if there are no errors, otherwise false
    return Object.values(errors).every((error) => !error);
  }, [form, isSubmitted]);

  return (
    <div className="bg-white border-neutral-200 border-solid border max-w-[414px] m-auto pl-10 pr-10">
      <h3 className="text-center leading-10 text-3xl font-semibold mt-4 mb-4">
        Log in
      </h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="example@domain.com"
          />
        </div>
        <div className="mb-6">
          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="**********"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </form>
      <hr className="mt-4 mb-4 border" />
      <button
        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={onClickLoginWithGoogle}
      >
        Log in with Google
      </button>
      <p className="my-4 text-sm flex justify-between text-gray-600  ">
        Don't have an account?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
