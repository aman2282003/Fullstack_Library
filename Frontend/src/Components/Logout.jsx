import React from "react";
import { useAuth } from "../Context/Authprovider";
import { useToast } from "@chakra-ui/react";
export const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const toast = useToast();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });

      toast({
        title: "Logout successfully.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
      localStorage.removeItem("Users");
    } catch (error) {}
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className="px-3 py-2 text-white rounded-md cursor-pointer bg-red-500"
      >
        Logout
      </button>
    </>
  );
};
