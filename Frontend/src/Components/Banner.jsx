import React from "react";
import book from "../assets/book.png";
import { Link } from "react-router-dom";
export const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl">
              <span className="text-blue-500">LibraryThing</span> A Home For
              Your Books.
            </h1>
            <p className="text-xl font-semibold">
              OAPEN promotes open access academic books, offering hosting,
              quality assurance, dissemination, and preservation, and working
              with publishers, libraries, and funders.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <Link to="/signup">
            <button className="mt-6 btn bg-blue-500 text-white hover:bg-blue-700">
              Sign-up to continue
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img src={book} className="w-[480px] h-[480px]" alt="" />
        </div>
      </div>
    </>
  );
};
