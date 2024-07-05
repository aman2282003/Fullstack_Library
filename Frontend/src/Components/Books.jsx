import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

export const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("https://fullstack-library-3.onrender.com/book");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="  items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl font-semibold mt-28">
            Welcome to Your Personal{" "}
            <span className="text-blue-500">Book Haven</span> Today
          </h1>
          <p className="mt-12 ">
            Discover a wide selection of books tailored to your interests.
            Browse through genres, find your next favorite read, and enjoy
            seamless borrowing. Our library is here to inspire and support your
            love for reading. Welcome and happy exploring! Dive into the world
            of stories, knowledge, and adventure at your fingertips. We're
            excited to have you here!
          </p>
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300 mt-6 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
