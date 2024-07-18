//AuthContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "firebase-config";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return (
      <div
        className="loader-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="loader"
          style={{
            "--w": "10ch",
            fontWeight: "bold",
            fontFamily: "monospace",
            fontSize: "30px",
            lineHeight: "1.4em",
            letterSpacing: "var(--w)",
            width: "var(--w)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "#0000",
            textShadow: `
          calc(0*var(--w)) 0 #333,
          calc(-1*var(--w)) 0 #333,
          calc(-2*var(--w)) 0 #333,
          calc(-3*var(--w)) 0 #333,
          calc(-4*var(--w)) 0 #333,
          calc(-5*var(--w)) 0 #333,
          calc(-6*var(--w)) 0 #333,
          calc(-7*var(--w)) 0 #333,
          calc(-8*var(--w)) 0 #333,
          calc(-9*var(--w)) 0 #333`,
          }}
        >
          Loading...
          <style jsx>{`
            @keyframes l20 {
              9.09% {
                text-shadow: calc(0 * var(--w)) -10px #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              18.18% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) -10px #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              27.27% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) -10px #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              36.36% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) -10px #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              45.45% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) -10px #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              54.54% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) -10px #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              63.63% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) -10px #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              72.72% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) -10px #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              81.81% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) -10px #333,
                  calc(-9 * var(--w)) 0 #333;
              }
              90.90% {
                text-shadow: calc(0 * var(--w)) 0 #333,
                  calc(-1 * var(--w)) 0 #333, calc(-2 * var(--w)) 0 #333,
                  calc(-3 * var(--w)) 0 #333, calc(-4 * var(--w)) 0 #333,
                  calc(-5 * var(--w)) 0 #333, calc(-6 * var(--w)) 0 #333,
                  calc(-7 * var(--w)) 0 #333, calc(-8 * var(--w)) 0 #333,
                  calc(-9 * var(--w)) -10px #333;
              }
            }
            .loader {
              animation: l20 2s infinite linear;
            }
          `}</style>
        </div>
      </div>
    );
  } else {
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
}