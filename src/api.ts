import { AlbumObject } from "spotify-api-types";
const spotifyAuth = import.meta.env.VITE_SPOTIFY_AUTHORIZATION as string;

export interface Auth {
  token: string;
  expiresAt: number;
}

export async function authorize(): Promise<Auth> {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: spotifyAuth },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });
  const { access_token, token_type, expires_in } = await res.json();
  const expirationTime = Date.now() + (expires_in - 20) * 1000;
  return {
    token: `${token_type} ${access_token}`,
    expiresAt: expirationTime,
  };
}

export async function search(
  auth: Auth,
  query: string
): Promise<AlbumObject[]> {
  if (!query) return [];

  if (!auth.token) {
    auth = await authorize();
  }

  const res = await fetch(
    `https://api.spotify.com/v1/search?type=album&limit=5&q=${query}`,
    {
      headers: { Authorization: auth.token },
    }
  );
  const { albums } = await res.json();
  return albums.items;
}
