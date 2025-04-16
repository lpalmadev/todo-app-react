import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrivateRoutes, RegisterForm } from "../../@types";
import { useAuth } from "../../hooks";
import { emailValidator, passwordValidator } from "../../utilities";
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
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const initialFormState: RegisterForm = { email: "", password: "" };

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function Register() {
  // const [form, setForm] = useState<RegisterForm>(initialFormState);
  // const [errors, setErrors] = useState<RegisterForm>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  // const handleChange = ({
  //   target: { name, value },
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [name]: value });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    await signup(data.email, data.password);
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  // const validateForm = useMemo(() => {
  //   const errors: RegisterForm = {
  //     email: "",
  //     password: "",
  //   };

  //   if (isSubmitted) {
  //     console.log(isSubmitted);
  //     errors.email = emailValidator(form.email);
  //     errors.password = passwordValidator(form.password);
  //   }

  //   setErrors(errors);

  //   // Return true if there are no errors, otherwise false
  //   return Object.values(errors).every((error) => !error);
  // }, [form, isSubmitted]);

  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your information to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="m@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input {...register("password")} id="password" type="password" />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Button type="submit" variant="default" className="w-full mt-6">
              Create an account
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="my-4 text-sm">
          Already have an Account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
export default Register;
