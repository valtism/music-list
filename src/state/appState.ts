import { atomWithStorage } from "jotai/utils";
import { Auth } from "../api";

export const authAtom = atomWithStorage<Auth>("auth", {
  token: "",
  expiresAt: Date.now(),
});

export const darkAtom = atomWithStorage<boolean | undefined>(
  "dark-mode",
  undefined
);
