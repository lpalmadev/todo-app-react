import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrivateRoutes, RegisterForm } from "../../@types";
import { useAuth } from "../../hooks";
import { emailValidator, passwordValidator } from "../../utilities";
import Google from "@/components/icons/providers/google";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your information to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <Button className="w-full">Create an account</Button>
        <div className="my-4 text-sm">
          Already have an Account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>

    // <div className="bg-white border-neutral-200 border-solid border max-w-[414px] m-auto pl-10 pr-10">
    //   <h3 className="text-center leading-10 text-3xl font-semibold mt-4 mb-4">
    //     Register
    //   </h3>
    //   <form onSubmit={handleSubmit} noValidate>
    //     <div className="mb-6">
    //       <InputField
    //         label="Email"
    //         name="email"
    //         type="email"
    //         value={form.email}
    //         onChange={handleChange}
    //         error={errors.email}
    //         placeholder="example@domain.com"
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <InputField
    //         label="Password"
    //         name="password"
    //         type="password"
    //         value={form.password}
    //         onChange={handleChange}
    //         error={errors.password}
    //         placeholder="**********"
    //       />
    //     </div>
    //     <Button title="Register" isPrimary />
    //   </form>
    //   <p className="my-4 text-sm flex justify-between px-3">
    //     Already have an Account?
    //     <Link to="/login" className="text-blue-700 hover:text-blue-900">
    //       Login
    //     </Link>
    //   </p>
    // </div>
  );
}
export default Register;
