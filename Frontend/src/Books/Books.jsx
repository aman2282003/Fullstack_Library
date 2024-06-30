import React from "react";
import Navbar from "../Components/Navbar";
import { Books } from "../Components/Books";
import { Footer } from "../Components/Footer";
export const Bookss = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Books />
      </div>

      <Footer />
    </>
  );
};
