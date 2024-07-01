import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  let parsedAuthUser;

  try {
    parsedAuthUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  } catch (e) {
    console.error("Failed to parse auth user from localStorage:", e);
    parsedAuthUser = null;
  }

  const [authUser, setAuthUser] = useState(parsedAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
