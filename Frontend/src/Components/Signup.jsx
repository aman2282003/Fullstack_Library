import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://fullstack-library-3.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Account created succesfully");
          toast({
            title: "Account created successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate(from, { replace: true });
          // localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        toast({
          title: "Error:" + err.response.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <div className="flex items-center h-screen justify-center ">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg ">Signup</h3>
              {/* Name section */}
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="dark:text-black  w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-blue-500 text-sm">
                    Name is required
                  </span>
                )}
              </div>

              {/* email section  */}
              <div className="mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="dark:text-black  w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-blue-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>
              {/* password section */}
              <div className="mt-4 space-y-2 ">
                <span>Password</span>
                <br />
                <input
                  type="Password"
                  placeholder="Enter Your Password"
                  className="dark:text-black  w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />

                <br />
                {errors.password && (
                  <span className="text-blue-500 text-sm">
                    Password is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white px-3 rounded-md py-1 hover:bg-blue-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Already have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer "
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
