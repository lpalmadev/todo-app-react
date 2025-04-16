import { useMemo, useState } from "react";
import { LoginForm, PrivateRoutes } from "../../@types";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { emailValidator, passwordValidator } from "../../utilities";
import { Button } from "@/components/ui/button";
import Google from "@/components/icons/providers/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

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
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
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
        <Button className="w-full">Sign in</Button>
        <hr className="mt-4 mb-4 border" />
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={onClickLoginWithGoogle}
        >
          <Google />
          Login with Google
        </Button>
        <div className="my-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Login;
