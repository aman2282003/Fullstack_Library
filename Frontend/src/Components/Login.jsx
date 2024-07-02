import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
export const Login = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://fullstack-library-3.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast({
            title: "Login successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        // alert("Error:");

        toast({
          title: "Invalid Username or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login
        </button> */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="dark:text-black w-80 px-3 py-1 border rounded-md outline-none"
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
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="dark:text-black  w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-blue-500">
                    Password is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};
