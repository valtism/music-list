import { useEffect } from "react";
import { useAtom } from "jotai";

import { authorize } from "../api";
import { authAtom } from "../state/appState";

export function useFetchAuth() {
  const [auth, setAuth] = useAtom(authAtom);

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
