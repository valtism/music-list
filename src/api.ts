import { AlbumObject } from "spotify-api-types";

export interface Auth {
  token: string;
  expiresAt: number;
}

export async function authorize(): Promise<Auth> {
  const res = await fetch(
    "https://1pd7ps5dmd.execute-api.ap-southeast-2.amazonaws.com/default/spotifyAuth"
  );
  const { access_token, token_type, expires_in } = await res.json();

  const expirationTime = Date.now() + (expires_in - 100) * 1000;
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
