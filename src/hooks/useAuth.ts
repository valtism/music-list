import { useEffect } from "react";
import { Auth, authorize } from "../api";
import useLocalStorage from "./useLocalStorage";

export function useAuth() {
  const [auth, setAuth] = useLocalStorage<Auth>("auth", {
    token: "",
    expiresAt: Date.now(),
  });

  useEffect(() => {
    if (auth.token && auth.expiresAt > Date.now()) return;
    async function refreshToken() {
      const auth = await authorize();
      setAuth(auth);
      // Automatically refresh token when it expires
      setTimeout(refreshToken, auth.expiresAt - Date.now());
    }
    refreshToken();
  }, [auth.expiresAt, auth.token, setAuth]);

  return auth;
}
