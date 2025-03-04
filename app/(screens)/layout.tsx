"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthHeader from "@/components/ui/AuthHeader";
import AuthFooter from "@/components/ui/AuthFooter";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      <main className="grow">{children}</main>
      <AuthFooter/>
    </>
  );
}
