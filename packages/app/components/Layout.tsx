import React from "react";
import Pattern from "./Pattern";
import { twMerge } from "tailwind-merge";

interface LayoutProps {
  children?: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
}

function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={twMerge(
        "w-full relative h-[100vh] overflow-y-auto bg-dark-105",
        className
      )}
    >
      <div className="z-upper">{children}</div>
    </div>
  );
}

export default Layout;

export function MobileLayout({ children }: LayoutProps) {
  return (
    <div className="sm:w-full md:max-w-[500px] xl:max-w-[500px] mx-auto relative h-[100vh] overflow-y-auto">
      <div className="z-upper">{children}</div>
    </div>
  );
}
