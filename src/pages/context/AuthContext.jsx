import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "firebase-config";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return null; // Remove or replace with any placeholder component if needed
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
