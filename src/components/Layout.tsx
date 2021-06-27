import clsx from "clsx";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center space-y-10",
        "font-nunito text-gray-900 dark:text-gray-50 px-4 py-10",
        "selection:bg-pink-100 dark:selection:bg-pink-200/80 selection:text-purple-900"
      )}
    >
      {children}
    </div>
  );
}
