import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrivateRoutes, RegisterForm } from "../../@types";
import { useAuth } from "../../hooks";
import { Button, InputField } from "../../components";
import { emailValidator, passwordValidator } from "../../utilities";

const initialFormState: RegisterForm = { email: "", password: "" };

function Register() {
  const [form, setForm] = useState<RegisterForm>(initialFormState);
  const [errors, setErrors] = useState<RegisterForm>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm) {
      await signup(form.email, form.password);
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    }
  };

  const validateForm = useMemo(() => {
    const errors: RegisterForm = {
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
        Register
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
        <Button title="Register" isPrimary />
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
