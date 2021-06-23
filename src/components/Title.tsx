import React from "react";

interface TitleProps {
  children: React.ReactNode;
}
export default function Title({ children }: TitleProps) {
  return (
    <h1 className="font-work text-5xl bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-stripes motion-reduce:animate-none filter drop-shadow-lg ">
      {children}
    </h1>
  );
}
