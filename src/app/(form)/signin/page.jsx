"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";

const LognInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleSignIn = async (formData) => {
    const { email, password } = formData;
    console.log(formData);
    const { data, error } = await authClient.signIn.email({
      email,
      password,
       callbackURL: "/"
    });

    if (error) {
      return toast.error(error.message);
    } else if (data) {
      toast.success("Sign up is successful");
     
    }
  };

  return (
    <div className="flex justify-center items-center my-auto card mx-auto container w-md mt-20">
      <h1 className=" text-teal-500 font-extrabold text-3xl">SIGNIN</h1>
      <Form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex w-96 flex-col gap-4"
      >
        <Label>Email</Label>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          placeholder="Enter Your Email"
          className="input input-accent"
        />
        {errors.email && (
          <div
            role="alert"
            className="alert alert-warning h-10 text-white font-bold max-w-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Email is Invalid !</span>
          </div>
        )}
        <TextField className="w-full max-w-80" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              {...register("password", {
                required: true,
              })}
              placeholder="Enter Your Password"
              className="w-screen"
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        {errors.password && (
          <div
            role="alert"
            className="alert h-10 alert-warning text-white font-bold  max-w-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Password is Invalid !</span>
          </div>
        )}
        <div className="flex  gap-2">
          <Button className="font-bold" type="submit">
            <Check />
            SIGN IN
          </Button>
          <Button className="font-bold" type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <h1 className="text-sm font-bold">Don`t have account?<Link className="text-accent-hover" href="/signup"> signup</Link></h1>
      </Form>
      <div className="divider">or</div>

      <div className="grid grid-cols-1 gap-3 grid-rows-3">
        {/* Google */}
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        {/* Facebook */}
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Login with Facebook
        </button>

        {/* VK */}
        <button className="btn bg-[#47698F] text-white border-[#35567b]">
          <svg
            aria-label="VK logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2240 2240"
          >
            <g fill="white">
              <path d="M2077 904q23 64-150 294-24 32-65 85-78 100-90 131-17 41 14 81 17 21 81 82h1l1 1 1 1 2 2q141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66T648 1722l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211T165 943q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5T814 1348t34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 17-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z"></path>
            </g>
          </svg>
          Login with VK
        </button>
      </div>
    </div>
  );
};

export default LognInPage;
